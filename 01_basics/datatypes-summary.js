/* 
//jb memory m data store kiya jata h aur use excess kiya jaye tb ye two categiry hogi
//primitive 
// 7 types:(nnssbbu)
Number
Null
String
Symbol
BigInt
Boolean
Undefined


const Id = Symbol('123');
const anotherId = Symbol('123')
console.log(Id === anotherId);
const nullvalue = null;

//Reference (non-primitive)
//Array,Object,Function
const arr = ["sam","ram","singh"];
let myObj = {
    name:"sandeep",
    age:22,
}
let myFunc = function(){
    return console.log("hello");
}
console.log(typeof Id);
console.log(typeof nullvalue);
console.log(typeof arr);
console.log(typeof myObj);
console.log(typeof myFunc);
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack memory (primitive) all value copy and Heap memory all value ka reference pass hota h(non-primitive)

let myYoutubename = "skthecelibrityface";

let anothername = myYoutubename;
anothername = "ranasingh"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"sam@google.com",
    upi:"user@ybl"
}
let userTwo = userOne;
userTwo.email = "sandeep@gmail.com"; 

console.log(userOne.email);
console.log(userTwo.email);


