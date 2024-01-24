const myNums = [1,2,3,4];

// const myTotal = myNums.reduce( (acc,currval) =>  acc + currval, 0 )

const myTotal = myNums.reduce( (acc,currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
},0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName:'js course',
        price:1999,
    },
    {
        itemName:'mobile course',
        price:9999,
    },
    {
        itemName:'data science course',
        price:9699,
    },
    {
        itemName:'devOpps course',
        price:12999,
    }
];
const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(priceToPay);