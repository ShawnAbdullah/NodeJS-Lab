const path = require('path');
const fs = require('fs');
const request = require('request-promise');
// const request = require('request-promise');

let dataPath = path.join(__dirname, 'data.json');

let popArray = []
request('https://reddit.com/r/popular.json', (err, res, body) => {
    if(err) console.log(err);

    // JSON.parse(body).data
    JSON.parse(body).data.children.forEach(item => {
        // fs.appendFileSync(dataPath, item.data.title + '\n' + item.data.url + '\n' + item.data.author_fullname)
       let obj = {title: item.data.title, author: item.data.author, url: item.data.url}
    popArray.push(obj)
    });

    fs.writeFile(dataPath, JSON.stringify(popArray), err => {
        if(err) console.log(err);
    // JSON.parse(body).data.children.forEach(item => {
    //     fs.appendFileSync(dataPath,item.data.title + '\n');
    })
})

//fs writefile