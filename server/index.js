console.log('Introduction to Node js');

const { add, sub } = require('./util')
const path = require('path')
const fs = require('fs');
const { clearTimeout } = require('timers');
const http = require('http');
const { log } = require('console');


// console.log('sum=',add(10,20));
// console.log(`difference=`, sub(10,20));

// console.log(global);
// console.log(__filename);
// console.log(__dirname.toUpperCase());


// console.log(path.parse(__dirname));
// console.log(path.join(__dirname,'newFolder','index.js'));    /* to join a files, folders */

// fs.mkdir(path.join(__dirname, "api1/data.txt" ), {}, (err) => { if (err) throw err });
// fs.rmdir(path.join(__dirname, '/api1.txt'), {recursive:true}, (err) => {if(err) throw err} );

// console.log('speed is 5000');

let usersData = [
    {   tokken: 1122,
        userName: 'aswin' },
    {   tokken: 3344,
        userName: 'bose' },
    {   tokken: 5566,
        userName: 'unkown' }
];

// let userCount = 0;
// const timer = setInterval(() => {
//     userCount++;
//     console.log(userCount);
// }, 1000);

// setTimeout(() => {
//     clearInterval(timer);
// }, 10000);


// fs.mkdir(path.join(__dirname, 'api'), {}, (err) => { if (err) throw err });
// fs.rmdir(path.join(__dirname, 'api'), { recursive: true }, (err) => { if (err) throw err })
// fs.writeFile(path.join(__dirname, 'api', 'data.txt'), `userData = ${JSON.stringify(usersData , null, ' ')}` , (err) => { if (err) throw err });
// fs.appendFile(path.join(__dirname, 'api', 'data.txt'), `userData = ${JSON.stringify(usersData)}` , (err) => { if (err) throw err })
// fs.unlink('api/data.txt', (err,data)=>{
//     if(err) throw err;
//     console.log('file removed successfully');
// })
const apiData = fs.readFileSync(path.join(__dirname, 'api', 'data.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data);
})
// const parsedData= JSON.parse(apiData);
// console.log(parsedData);

console.log(`******apiData**** \n${apiData}`);

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5174');

    res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.write('server loading.......')
    // res.write (userName);
    res.end(JSON.stringify(apiData));
    // res.end();


})

server.listen(3000);


console.log('****completed******');
