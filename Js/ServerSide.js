'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('D:/vitor/AREA PROGRAMAÇÃO/JavaScript Programando/Site MyProject/JSON/JSON1.json');
let student = JSON.parse(rawdata);

console.log(student);