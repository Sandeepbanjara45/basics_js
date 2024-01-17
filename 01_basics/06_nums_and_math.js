const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(typeof balance.toString());
// console.log(balance.toFixed(2));

const otherNumver = 123.897;
// console.log(otherNumver.toPrecision(3));

const hundred = 1000000;
// console.log(hundred.toLocaleString('en-IN'));

//++++++++++++++++ Maths +++++++++++++++++++//

// console.log(Math);
// console.log(Math.abs(+4));//round of value
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.2));//choose top level value jra sa bi point 4 se upper hua use m 5 lunga.
// console.log(Math.floor(4.7));//choose low level value 
// console.log(Math.min(4,3,6,7));
// console.log(Math.max(4,3,6,7));

console.log(Math.random());
console.log((Math.random()*10) + 1);//one is used to avoid zero value.
console.log(Math.floor(Math.random() * 10) + 1);//it is point to lowest value.

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);





