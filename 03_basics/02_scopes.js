
var c = 300;
let a  = 400;

if(true){
    let a = 10;
    const b = 20;
     c = 30;
// console.log("inner: " , a);

}
// console.log(a);
// console.log(b);
// console.log(c);

//nested scope in function
function one(){
    const username = "sandeep";

    function two(){
        const website = "linkdin";
        // console.log(username);
    }
    // console.log(website);
    two()
}
one();

if(true){
    const username = "sam";
    if(username === "sam"){
        const website =" linkdin";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


//++++++interesting ++++++++//


console.log(addOne(5));

function addOne(num){
    return num + 1;
}

//expression function

addTwo(5);

const addTwo = function(num){
    return num + 2;
}