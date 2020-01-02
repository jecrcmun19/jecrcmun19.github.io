# JECRC Modal United Nations

> JECRC Modal United Nations(MUN) is a nation wide conference held by [JECRC College](https://jecrc.in).

This repository is official website for JECRC MUN.

# Table of Contents
- [JECRC Modal United Nations](#jecrc-modal-united-nations)
- [Table of Contents](#table-of-contents)
- [Requirements](#requirements)
- [Basic Installation](#basic-installation)
  - [Installing Node.js](#installing-nodejs)
  - [Installing Yarn](#installing-yarn)
- [Project Installation](#project-installation)
- [Contributing Guidelines](#contributing-guidelines)
- [Branch Name Instructions](#branch-name-instructions)
# Requirements
1. Node.js
2. Yarn

# Basic Installation

## Installing Node.js
You can find installation instructions according to your system at [Download Node.js](https://nodejs.org/en/download/)

## Installing Yarn
You can find installation instructions according to your system at [Install Yarn](https://yarnpkg.com/en/docs/install#debian-stable)

# Project Installation

1. Fork the repository
   1. You can see fork button on top-right corner.
   2. After forking, you will have your own copy of repository. For example:
   `<your_username>/jecrcmun19.github.io`
2. Clone the repository
   1. Click on `Clone or Download` button and copy the link.
   2. If you have configured `ssh` you can copy SSH Link by clicking on `ssh` and then copy.
   3. Clone the repository:
       ```bash
      $git clone https://github.com/<your_username>/jecrcmun19.github.io.git
       ```
   4. This will create a new folder named `jecrcmun19.github.io`
3. Change current working directory to this new folder:
    ```bash
    $cd jecrcmun19.github.io
    ```
4. The default branch is `master`. Our new code will be at `newsite`. Checkout this branch using:
     ```bash
     $git checkout newsite
     ```
5. Now install dependencies using `yarn` or `yarn install`.
6. After installation, you can run development server by `yarn develop`
7. Your project is running at [http://localhost:8000](http://localhost:8000)
8. You can start editing code in your favorite editor.
9. That's it.

# Contributing Guidelines
The contribution will follow typical git-fork workflow. You can use following steps to keep yourself away from any unwanted pushes to main repository and from git conflicts.

1. Fork and clone the repository (see above [instructions](#project-installation))
2. This cloned repo is only connected to your own forked repo. You will need to connect it to [main repo](https://github.com/jecrcmun19/jecrcmun19.github.io) to get updates from it. You can do this by setting a new remote link using:
    ```bash
    $git remote add upstream https://github.com/jecrcmun19/jecrcmun19.github.io.git
    ```
3. You can verify step 2 by running:
   1. `git remote -v`
   2. You can see 4 links as output:
      ```bash
      origin	git@github.com:<your_username>/jecrcmun19.github.io.git (fetch)
      origin	git@github.com:<your_username>/jecrcmun19.github.io.git (push)
      upstream	git@github.com:jecrcmun19/jecrcmun19.github.io.git (fetch)
      upstream	git@github.com:jecrcmun19/jecrcmun19.github.io.git (push)
      ```
4. Before starting the development:
   1. fetch latest changes from upstream by using:
      ```bash
      $git fetch upstream
      ```
   2. Now merge remote `newsite` changes to your local `newsite`
      ```bash
      $git merge newsite upstream/newsite
      ```
   3. Now you also have to update your local branches, you are working on(if it already exits) by:
      ```bash
      $git checkout localBranchName
      $git merge newsite
   4. Create a new branch(if not exists) for every feature you work on. (Please follow these [instructions](#branch-name-instructions) for naming branches): For example
       ```bash
       $git checkout -b branchName
       ```
   5. Do regular commits. For one commit, only include files that are changed for only that commit. You can do multiple commits for a feature. Follow these instructions for a [good commit message](https://www.conventionalcommits.org/en/v1.0.0/#summary).
5. After development:
   1. Push your changes to forked repository:
      ```bash
      $git push origin branchName #this is same branchName you created in step 4.4
      ```
   2. Create a pull request. You will see a `compare and pull request` option as soon as you push your changes.

# Branch Name Instructions
You can keep any branch name you want but as a team, there may be a situation where branch names conflict within team members.

To avoid this situation, we will use branch name like following:
> username/featureName

Now multiple members can have same branch names but different because of username.
