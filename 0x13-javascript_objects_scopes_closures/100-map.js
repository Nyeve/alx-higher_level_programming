#!/usr/bin/node
const list = require('./100-data.js').list;
const newlist = list.map((x, i) => x * i);
console.log(list);
console.log(newlist);
