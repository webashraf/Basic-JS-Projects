// Duplicates in filter method

const numbers = [1, 5, 3, 5, 8, 9, 4, 6, 5, 1];

const duplicates = numbers.filter((v, ind, arr) => {
    return arr.indexOf(v) !== ind;
})
// console.log(duplicates);

// Duplicates in other mathod

const numbers2 = [1, 5, 3, 5, 8, 9, 4, 6, 5, 1];
const newNumber = [];


for (let i = 0; i < numbers2.length; i++) {
    const preNumber = numbers2[i];
    const numberIndex = newNumber.indexOf(preNumber);
    if (numberIndex === -1) {
        newNumber.push(preNumber)
    }
    console.log(numberIndex);
}
console.log(newNumber);