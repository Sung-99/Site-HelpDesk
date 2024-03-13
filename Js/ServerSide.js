



//MY server for submit // 
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//https://docs.google.com/forms/d/e/1FAIpQLSd6ya0ZXo5ljYAiI6fdw1NITvWkWBu5KCDgJB3_wlKd9nxFww/viewform?usp=pp_url&entry.535876687=aaaaaaaaaaaaaaa&entry.189561253=aaaaaaaaaaaaaaaaaa
app.post('/takAction', (req, res) => {
    // Get the message from the request body
    const { Nome, TextArea } = req.body;
    console.log( Nome, TextArea )
    // Write the message to a JSON file
    const data = JSON.stringify({  Nome, TextArea }) + '\n';
    fs.appendFile(path.join(__dirname, '..', 'JSON', 'JSON1.json'), data, (err) => {
        if (err) {
            console.error('Error writing message to file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Message written to file');
            res.status(200).send('Message written to file');
        }
    });
});

    

        
        
     

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});

