const valueUpdate = () => {
    let count = 0;
    return closure = () => count++;

    return count;
}

const result = valueUpdate();

console.log(result());
console.log(result());
console.log(result());

const result2 = valueUpdate();
console.log(result2());
console.log(result2());
console.log(result2());


console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());


console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());

