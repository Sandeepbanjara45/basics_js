/*
toDateString 
toISOString
toJSON
toLocalDateString
toLocalString
*/
//Dates
let myDate = new Date();
// console.log(myDate);
// console.log('1 ' ,myDate.toString());
// console.log('2 ' ,myDate.toDateString());// Tue Jan 16 2024 general way show the date and time
// console.log('3 ' ,myDate.toLocaleString());// 1/16/2024, 7:18:18 PM
// console.log('4 ' ,myDate.toISOString());
// console.log('5 ' ,myDate.toLocaleDateString());// 1/16/2024
// console.log('6 ' ,myDate.toJSON());


/* Month always start with zero (0) in javascript */
/* Month always start with 01 in form of (yy-mm-dd) */

// const myCreateDate = new Date(2024,0,24)
// console.log(myCreateDate.toDateString());

// const myCreateDate = new Date(2024,0,24,5,3,7)
// console.log(myCreateDate.toLocaleString());

// const myCreateDate = new Date("2024-01-17");//yy-mm-dd
// console.log(myCreateDate.toLocaleString());

// const myCreateDate = new Date("02-23-2024");//mm-dd-yy
// console.log(myCreateDate.toLocaleString());

// const myCreateDate = new Date("02-23-2024");//mm-dd-yy

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));//thousand is used to convert miliseccond to second
// console.log(Date.now()/1000);

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

let obj = newDate.toLocaleString('default',{
    weekday:'long'
})
console.log(obj);











