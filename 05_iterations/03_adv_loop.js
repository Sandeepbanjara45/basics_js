// for of loop
// ['','','']
// [{},{},{}]

const arr = [1,2,3,4,5,]
for (const val of arr) {
    // console.log(val);
}
const greeting = "hello world";
for (const greet of greeting) {
    if (greet === " ") {
        // console.log(`space detected`);
        continue;
    }
    // console.log(`Each char is ${greet}`);
}
//Map
//y duplicate entries se bachata h unique value 
// const map = new Map()
// map.set('IN','India')
// map.set('USA','United State of America')
// map.set('Fr','France')
// map.set('IN','India')

// console.log(map);
// for (const [key,value] of map) {
//     // console.log(key,":-",value);
// }

const myObject = {
    'game1':'NFS',
    'game2':'COD'
}
// for (const  [key,value] of myObject) {
    // console.log(key,":-",value);
// }

//for in loop

const myObj = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myObj) {
//   console.log(myObj[key]);
// console.log(`${key} shortcut is for ${myObj[key]}`);
}
//array
//find out any key
const programming = ['js','rb','py','java','cpp'];

for (const key in programming) {
//   console.log(key);
//   console.log(programming[key]);
}

const map = new Map()
map.set('IN','India')
map.set('USA','United State of America')
map.set('Fr','France')
map.set('IN','India')

for (const key in map) {
   console.log(key);
}
