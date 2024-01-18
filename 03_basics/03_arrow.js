//This keyword current context ko refer krta h
//browser m global object window h
const user = {
    username:"sam",
    price:300,
    usermessage:function(){
        console.log(`${this.username}, welcome to my website`);
        // console.log(this);
    }
}
// user.usermessage()
// user.username = 'sandeep';
// user.usermessage()

/*current context empty hoga why? ham node enviroment m h so This refer krega empty object 
global m koi contect nhi h.*/
// console.log(this);

//arrow function

function chai(){
    let username = "sam";
    console.log(this);//give some property
    console.log(this.username);//undefined
}
// chai()
// const chai = function(){
//     let username = "sam";
//     console.log(this);//give some property
//     console.log(this.username);//undefined
// }
// chai()
// const chai = () => {
//     let username = "sam";
//     console.log(this);//empty object
//     console.log(this.username);//undefined

// }
// chai()

//explicit return
// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }//curlly braces use krte time return likhna padta h

//implicit return
// const addTwo = (num1 , num2) =>  num1 + num2;
// const addTwo = (num1 , num2) => ( num1 + num2);//parantise use krte time return ni likhna hota
const addTwo = (num1 , num2) =>  ({username:"sandeep banjara"});


console.log(addTwo(7,5));