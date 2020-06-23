Paxos Ajax Intro
===

This project will be a basic starting point for a node + express server.

Steps:

Phase 1 - Setup:
---

- in terminal in project folder run 'git init'
- in terminal in project folder run 'npm init -y'
- 'npm install express'
- check package.json for dependencies
- create .gitignore file
- add to .gitignore: .DS_Store, node_modules
- create 'server' folder
- in server folder, create 'server.js'

Phase 2 - Server setup
===

in server.js:

- require express
- create an express app
- spin up server on port 5000
- hold port in const
- create "start" script in package.json

Phase 3 - Create first route
===

in server.js:

- create get route
- send test response 
- send back an array

Phase 4 - module
===

- create "modules" folder in "server"
- create "testModule.js" in "modules"

in testModule.js:

- globals & functionality (js logic)
- module.exports

in server.js:

- require module