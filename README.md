# Part 3

node.js express + mysql
-Setup instructions:
npm init -y
npm install express mysql2 cors dotenv sequelize
npm install --save dev nodemon
-project architecture :
-main : server.js
-models : taskModel +db (to manage the database)
-routes : taskrouter
-controllers :containing create , update , get(by due date and by category),delete
