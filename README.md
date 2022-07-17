# MScProject
RESTful API with CRUD functionality consumed by two different front ends, one Angular and the other React. These apps serve as the development stage of the MSc Project for Mobile Web Development at UWS.

## Node version used in both projects
node v16.13.0 (npm v8.1.0)

## How to run each project
Create dev.js file in server/config/dev.js with content of:

module.exports = {
  DB_URI: 'your_mongo_db_connection_string', // Get it here -> https://www.mongodb.com/
}
In base folder of project run npm install

To run api server navigate to server folder cd server and run node index.js

## How to populate DB
In case your dev.js file is created you can run in server folder command to populate database node fakeDB/cleanDB.js
