//singleton
//obj.create

//object literals

const mySym = Symbol("key1");

const jsUser = {
    name:"sandeep",
    "full name":"Sandeep Banjara",
   [mySym]:"key1",
    age:22,
    location:"jaipur",
    email:"sandeep@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}
// console.log(jsUser.email);//1 way to access value
// console.log(jsUser["email"]);//2 way 
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(jsUser);show the typeof symble


jsUser.email = "sam@chatgpt.com";
// Object.freeze(jsUser);//obj m koi change ni kr skta 
jsUser.email = "ravan@mic.com";
// console.log(jsUser);
jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);//same obj ko reference krna h to this ka use kre
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


