function sayName(){
    console.log("sandeep");
}
// sayName();

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNumber(num1,num2){
    // let result = num1+num2;
    // return result
    // console.log("sandeep"); 

    return num1 + num2;
}
const res = addTwoNumber(2,3)
// console.log("res: ", res);

function loginUserMessage(username){//perameters
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num){//rest oprator
    return num;
}
// console.log(calculateCartPrice(200,300,400,500,3000));

//function m obj pass krna 
const user = {
    username:"sandeep",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})
//function m array pass krna.
const myArr = [100,200,300,400];
function returnSecondValue(getarr){
    return getarr[2];
}
// console.log(returnSecondValue(myArr));
    console.log(returnSecondValue([100,200,300,400]));

