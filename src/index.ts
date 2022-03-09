import express from "express"
import { DatabaseClient } from "./database_client";

const app = express()
const port = 9999;
app.set('json spaces', 2)

const databaseClient = new DatabaseClient();

app.get( "/users", ( req, res ) => {  
    databaseClient
    .getAllUsers()
    .then(users => res.json(users))
    .catch(error => res.status(500).json({"error": "Unable to load users from database"}))    
});

app.get( "/users/search", ( req, res ) => {  
  const languages_from_request = "" + req.query.languages
  let languages: number[]
  if(languages_from_request == null || languages_from_request === '') {
    languages = []
  } else {
    languages = languages_from_request.split(',').map(v => parseInt(v))
  }
  
  databaseClient
  .getAllUsersWithFullfilledLanguages(languages)
  .then(users => res.json(users))
  .catch(error => {
    console.error(error)
    res.status(500).json({"error": "Unable to load users from database"})
  })    
});

// start the express server
app.listen( port, () => {
    console.log('server started at http://localhost:' + port);
});