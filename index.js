console.log('Introduction to Node js');

const {add,sub}= require('./util')
const path =require('path')

console.log('sum=',add(10,20));
console.log(`difference=`, sub(10,20));

console.log(__filename);
console.log(__dirname.toUpperCase());

console.log(path.parse(__dirname));