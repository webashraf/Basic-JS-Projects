const number1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const number2 = number1.map(v => {
    return v+1;
})
console.log(number2);
let total = [...number1, ...number2];
console.log(total);

// Heigst number using spead Operator
const theHeigstNumber = [4564, 646844, 64562, 84894];

const hegstResult = Math.max(...theHeigstNumber);
console.log(hegstResult);