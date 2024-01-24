//for each loop
const coding = ['js','ruby','java','python','cpp'];

// coding.forEach(function (item) {
//     console.log(item);
// })
// coding.forEach((item)=> {
// console.log(item);
// })

// function printMe(val){
//     console.log(val);
// }
// coding.forEach(printMe)//reference only

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const mycoding = [
    {
        languageName:'javacript',
        languageFileName:'js'
    },
    {
        languageName:'java',
        languageFileName:'java'
    },
    {
        languageName:'python',
        languageFileName:'py'
    },
]
mycoding.forEach( (item) => {
    console.log(item.languageName);
})