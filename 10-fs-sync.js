const { log } = require('console');
const {readFileSync, writeFileSync} = require('fs');
console.log('Starting');

const first = readFileSync('./Content/first.txt','utf8')
const second = readFileSync('./Content/Second.txt','utf8')
console.log('Reading Files...')

// console.log(first);
// console.log(second);

writeFileSync('./content/result-sync.txt',`Here is the combined file : ${first}, ${second}`,{flag : 'a'})
console.log("Done with writing files");
