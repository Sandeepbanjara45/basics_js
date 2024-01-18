//singaltan object
// const tinderUser = new Object();
//obj literal
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email:"sam@gmail.com",
    fullname:{
        userfullname:{
            firstname:'sam',
            lastname:"choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'f'}
//1 const obj3 = {obj1 , obj2}
//2 const obj3 = Object.assign({},obj1,obj2)  //{{}=target,source=obj1}
//3 const obj3 = {...obj1,...obj2}
// console.log(obj3);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//y method property availability ko check krne ke liye h

//destructuring in obj
const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"sandeep"
}
const {courseInstructor:instructor} = course;

console.log(instructor);


