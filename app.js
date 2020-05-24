const express = require('express')
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/api/fileTransfer', (req, res) => {
  console.log('got a request', req.body)
  const { sourcePath, destinationPath, type } = req.body;
  
  const fs = require('fs')
  const client = require('scp2')

  const callback = (err) => {
    if (err) {
      res.status(400).send({ error: err })
    } 
    res.status(200).send({ message: 'your SCP command to copy file has been successful' })
    console.log('file has been copied successfully')
  }

  if (type === 'scp') {
    client.scp(sourcePath, destinationPath, callback)
  } else {
    fs.copyFile(sourcePath, destinationPath, callback)
  }
  
  res.status(400).send({ error: 'sorry! your request could not be succsessfull' })
})

app.listen(3000, () => {
  console.log('running on port 3000')
})
