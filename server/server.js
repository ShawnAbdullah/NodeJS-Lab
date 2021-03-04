const path = require('path');
const fs = require('fs');

let chirpArray = ['hey yall its ya boi', `today we've got a  special treat for you`, 'dj turn it up', 'insert horrible music here', 'check out my soundcloud for more smash hits']

let dataPath = path.join(__dirname, '../chirps.json')

fs.readFile(dataPath,{
    encoding: "UTF-8"
}, (err,data) => {
    var chirper = JSON.parse(data);
    console.log(chirper.chirp1);
    console.log(chirper.chirp2);
    console.log(chirper.chirp3);
    console.log(chirper.chirp4);
    console.log(chirper.chirp5);
});