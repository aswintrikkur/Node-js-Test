console.log('Introduction to Node js');

const { add, sub } = require('./util')
const path = require('path')
const fs = require('fs');
const { clearTimeout } = require('timers');


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

let userName = 'Aswinkumar';

// let userCount = 0;
// const timer = setInterval(() => {
//     userCount++;
//     console.log(userCount);
// }, 1000);

// setTimeout(() => {
//     clearInterval(timer);
// }, 10000);


// fs.mkdir(path.join(__dirname, 'api'), {}, (err) => { if (err) throw err });
fs.writeFile(path.join(__dirname, 'api', 'data.txt'), `userName: userLogged`, (err) => { if (err) throw err });
fs.appendFile(path.join(__dirname, 'api', 'data.txt'), `\nuserName: ${userName}`, (err) => { if (err) throw err })
fs.readFile(path.join(__dirname, 'api', 'data.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})





