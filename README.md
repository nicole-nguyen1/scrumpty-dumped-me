# scrumpty-dumped-me
This is my personal repo for scrumpty-dumped-me, a dating and relationship-management tool. This application was repurposed from a legacy codebase, [Scrumpty](https://github.com/scrumptydumpty/scrumpty), a scrum management tool. The original repo for scrumpty-dumped-me can be found [here](https://github.com/meloncats/scrumpty-dumped-me).

Team Members:
- [Logan Benson](https://github.com/cosmere)
- [Jeff Chea](https://github.com/jorfsson)
- [Mason Hunter](https://github.com/Hunterist12)

## Demo
- You can check out the demo [here](https://glacial-waters-37703.herokuapp.com/).

Note: Facebook OAuth needs to be fixed - please create an account with an email address instead.

## Motivation
We inherited this legacy codebase from another team in our Hack Reactor cohort. Why in the world did we pivot drastically? We had just built [chorecat](https://github.com/meloncats/chorecat) and Scrumpty was quite similar. We decided that turning it into something very light-hearted would be a good idea. Repurposing a scrum management tool into a dating and relationship-management tool proved to be somewhat of a challenge that involved some rearchitecting, but it was a lot of fun!

## Tech Stack
Built with
- Front-End: React, Material UI
- Back-End: Node, Express
- Database: MySQL

## Features
Disclaimer: the list names mean whatever the user wants them to mean ;)
- Add people from your dating pool to your "to-do" list
- Move people from "to-do" to "in progress" and "complete"
- Set priority and difficulty level on people you have added from your dating pool
- Remove someone from the dating pool (this user will not be removed from all users' dating pools)
- Sign in with email or Facebook OAuth
- Ability to update user profile information

Future features entail:
- Ability to filter dating pool
- Drag and drop cards
- A "swiping" interface similar to modern-day dating apps

## Getting Started
1. Fork the repo and then clone it.
2. Run the following scripts if running on localhost.
```
npm install
npm run dev
```
3. Git to coding!

## Contribute

You may contribute by following the below steps:

### Git setup
1. Fork from https://github.com/nicole-nguyen1/scrumpty-dumped-me.git.
2. Clone from your repo.
3. Add remote.

```
git remote add upstream https://github.com/nicole-nguyen1/scrumpty-dumped-me.git
```

### Git workflow
Two branches: master and dev

1. Commit to your own feature branch often and pull often.
```
git pull upstream dev
```

2. When you want to work on feature, check out dev branch and make a new feature branch.

Example:
```
git checkout -b <new-branch>
```

3. Do all work in feature branch. Commit only to your feature branch.
4. Before merging into dev, pull from dev branch and fix merge conflicts.
5. When merge conflicts are fixed, pull request into dev branch. 
6. Review.
7. Merge into dev.
8. If there is a functioning product in dev, merge into master. 
