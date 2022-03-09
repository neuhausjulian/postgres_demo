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

// start the express server
app.listen( port, () => {
    console.log('server started at http://localhost:' + port);
});