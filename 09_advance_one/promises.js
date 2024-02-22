const promiseOne = new Promise((resolve,reject) => {
    //do async task
    //DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async task is complete");
        resolve();
    }, 1000);
})

promiseOne.then(() => {
    console.log("promise consume");
})

// 2nd way
new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(()=> {
    console.log("task 2 resolve");
})

// 3rd way
const promiseThree = new Promise((resolve,reject) => {
    setTimeout(()=> {
        resolve({username:"sandeep",email:"sandeep@gmail.com"})
    },1000)
})
promiseThree.then((user) => {
    console.log(user);
})

//4th way
const promiseFour = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"sam",password:"123"})
        }else{
            reject("Error: Something Went Wrong")
        }
    }, 1000);
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error)=> {
    console.log(error);
})
.finally(()=> {
    console.log("The promise is either resolved or rejected");
})

//5th way

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject("Error: js Went Wrong")
        }
    }, 1000);
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()

// async function getAllUsers(){
//    try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//    } catch (error) {
//     console.log('E: ',error);
//    }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()    
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})