var fs = require('fs');
var os = require('os');
var _ = require('lodash');
const notes = require("./notes.js");


var user = os.userInfo();
console.log(user);


fs.appendFile('greeting.txt',"Hi" +user.username + '!\n',()=> console.log("file is saved"));

console.log(notes.age);


var data = ["p","p",1,2,3,4]

var filer= _.uniq(data);

console.log(filer);

