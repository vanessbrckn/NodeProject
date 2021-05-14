const {readFileSync, writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//read file
//console.log(first,second);

//create and write file
writeFileSync('./content/result-sync.txt',
     `Here is the result: ${first}, ${second}`,
     { flag: 'a'} //this will write to append rather than overwrite
);

console.log('done with this task');
console.log('starting the next one');





