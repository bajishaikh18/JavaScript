let amount = 120;
let discount = (amount>100) ? amount/10 : amount;
console.log(discount);
console.log("Final Amount: " + (amount-discount));