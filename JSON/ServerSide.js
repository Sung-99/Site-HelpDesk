



//MY server for submit // 
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/takAction', (req, res) => {
    // Get the message from the request body
    const { Nome, TextArea } = req.body;
    console.log( Nome, TextArea )
    // Write the message to a JSON file
    const data = JSON.stringify({  Nome, TextArea }) + '\n';
    
});

    

        
        
     

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});

