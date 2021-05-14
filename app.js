//npm - global command, comes w node

//local dependency - use only in this particular project.
// npm i <packagename>

//global dependency - use it in any project
// npm install -g <packageName>

//package.json - maifast file
// manual approach (creat package.kson in the root, create prop etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems)