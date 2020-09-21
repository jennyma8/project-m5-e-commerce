# WEARABOLOGY

## Quick Links

Main Repo: https://github.com/g-thinh/project-m5-e-commerce

Trello Board: https://trello.com/b/9bGUOayt/wearabology

App Layout Draft: https://app.diagrams.net/#T5f59866e432ddd533f8d6f22%7C%24%7C5f5e8861e0f0367a9668177c

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

- Go to [here](https://github.com/g-thinh/project-m5-e-commerce/pulls).

- Create a new pull request from YOUR forked repo (head repo) to the g-thinh repo (base repo)

### 4. If your changes are minor and do not conflict with any other file, feel free to accept your own PR request in the PR tab.

- PING the Slack channel for other members to re-fetch!

### 5. (OPTIONAL) If you would like to update YOUR forked repo with what you currently have

In case you dont want to do a PR right away to the main repo, but save some of your work through github, you can run the following command in the terminal

- `git push origin`

---

## Backend Endpoints to use

### FETCH

The following endpoints will return data in JSON format to be stored within the redux store using `fetch`.

-GET METHOD:

All items: `/items`

Items by category: `/category/:category`

All companies: `/companies`

Single item by id: `/items/:_id`

Single company by id: `/companies/:_id`

Cart items: `/cart`

All items from Cart at Checkout: `/cart/checkout`

-POST METHOD:

Add a new item to the cart: `/cart`

Add all items from Cart for Checkout : `/cart/checkout`

-DELETE METHOD:

Remove an item from the cart by id : `/cart/:id`

Clear Cart : `/cart`

---

## Create a new Component

To create a new functional component in the `/components` folder

1. On your CLI navigate to the `/client` folder.

2. type `yarn nc "name of new component"`
