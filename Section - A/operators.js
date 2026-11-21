// Mathematical, Comparison & Logical Operators
console.log("*********************  Arithmetic & Modulus Operations ********************");
// Variables Declared
let price = 45;
let quantity = 4;
// Total cost
let totalCost = price * quantity;
console.log(totalCost);
// Discounted Cost
let discountedCost = totalCost - 15;
console.log(discountedCost);
// Split Cost
let splitCost = totalCost / 3;
console.log(splitCost);
// Leftover Amount
let leftOverAmount = totalCost % 7;
console.log(leftOverAmount);


console.log("*************** LOOSE VS STRICT EQUALITY  *****************");
let codeA = "100";
let codeB = 100;
console.log(codeA == codeB); // True because JS convert the string(codeA) to a number(codeB) which makes them equal
console.log(codeA === codeB); // False because for strict equality JS checks the data type and codeA is a string while codeB is a number(integer)
console.log(codeA != codeB); // False because Loose inequality converts the string to a number, so both values are equal.
console.log(codeA !== codeB); // True because Strict inequality checks the data type too Since one is a string and the other is a number they are not strictly equal.


console.log("******************** Logical Operators (&&, ||, !) *******************");
let userName = "Lecturer_dict";
let pin = "2026";
console.log(userName === "lecturer_dict" && pin === 2026);
console.log(userName === "admin" || pin === "2026");
console.log(!(userName === "admin"));