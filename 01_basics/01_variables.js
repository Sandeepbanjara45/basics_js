const accountId = 12345;
let accountEmail = "sam123@gmail.com";
var accountPass = "120303";
accountCity = "jaipur";
let accountState;

// accountId= 1233; not allowed

accountEmail= "sam21@gmial.com";
accountPass= "2344";
accountCity = "udaipur";

console.table([accountEmail,accountId,accountPass,accountCity,accountState])
/*
Prefer not to user var 
because of issue in block scope and functional scope
*/