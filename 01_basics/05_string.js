const name = "sandeep";
const repoCount = 50;
// console.log(name + repoCount + "value");
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);//string interpolation

const gameName = new String("sandeep-banjara-com")
// console.log(gameName[0]);

// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('p'));
const newString = gameName.substring(0,4)
// console.log(newString);
const anotherStr = gameName.slice(7,4);
// console.log(anotherStr);
const newStringOne = "   sandeep.   ";
// console.log(newStringOne);
// console.log(newStringOne.trim());
const url = "https://sandeep.com/sandeep%20banjara";
// console.log(url.replace('%20','_'));
console.log(url.includes('sam'));
console.log(gameName.split('-'));


