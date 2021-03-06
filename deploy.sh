#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    exit 0
fi

# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Clone the existing gh-pages for this repo into gitCiOuput/
# Create a new empty branch if gh-pages doesn't exist yet (should only happen on first deply)
git clone $REPO gitCiOuput
cd gitCiOuput
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
git rm -r * --ignore-unmatch
cd ..


# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

cp -Rf --verbose dist/* gitCiOuput/

# Now let's go have some fun with the cloned repo
cd gitCiOuput
git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"


# Commit the "changes", i.e. the new version.
# The delta will show diffs between new and old versions.
git add -f .
git commit -m "Deploy to GitHub Pages: ${SHA}"

# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
# ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
# ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
# ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
# ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
# openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in deploy_key.enc -out deploy_key -d
echo "Start decryption"
openssl aes-256-cbc -K ${GITHUB_KEY} -iv ${GITHUB_KEY_IV} -pass pass:${GUTHUB_KEY_PASS} -in ../deploy_key.enc -out deploy_key -d
echo "Finished decryption"
chmod 600 deploy_key
eval `ssh-agent -s`
echo "Start ssh-add"
ssh-add deploy_key 
echo "Finished ssh-add"


# Now that we're all set up, we can push.
git push $SSH_REPO $TARGET_BRANCH

echo "Finished deploy script"