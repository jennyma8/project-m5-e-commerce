# WEARABOLOGY

## Quick Links

Main Repo: https://github.com/g-thinh/project-m5-e-commerce

Trello Board: https://trello.com/b/9bGUOayt/wearabology

---

## Quick Start Guide

Before you start, link your forked repo to the main one we are using above. This step should be done only ONCE.

- `git remote --v` (check your current remotes)
- `git remote add parent https://github.com/g-thinh/project-m5-e-commerce.git`

The basic workflow should have you fetch the latest version of the main repo before starting to work on any tasks/features.

### 1. Fetch and merge the latest commits from the main `parent` repo.

ALWAYS do this if other members pinged the slack channel for a merged PR BEFORE sending your PR request so that you are not behind in commits.

- `git fetch parent master`
- `git merge parent/master`

### 2. Once you are done working on a task and are ready to send a PR

- `git add .`
- `git commit -m "insert message here"`
- `git push origin master`

### 3. Open a PR request to the main repo.

- `Go to [here](https://github.com/g-thinh/project-m5-e-commerce/pulls).

- Create a new pull request from YOUR forked repo (head repo) to the g-thinh repo (base repo)

### 4. If your changes are minor and do not conflict with any other file, feel free to accept your own PR request in the PR tab.

- PING the Slack channel for other members to re-fetch!

---
