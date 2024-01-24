//Immediately Invoked Function Expression (IIFE)
//Note:-global scope ke palution se problem hoti h kai baar to global scope ke jobi variable h 
//ya jo bi declaration ko hatane ke liye iska use kiya.

(function chai(){//named IIFE
    console.log(`DB connected`)
})();//must use this semicolon
//ye invoke to ho gya pr isse ye ni pta nhi h ki context rokan kha h so iss situation m js m end krna hota h uske liye semicolon ka use krte h (;)
((name)=>{
    console.log(`DB connected by arrow function ${name}`);
})("sandeep")