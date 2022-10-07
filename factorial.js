// Factorial in interactive 
let factor = n =>{
    let result = 1
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factor(10));

// Factorial in recursive

let factorial = n => {
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else{
        return factorial(n - 1) * n;
    }
}
        const element =n       
        console.log(factorial(10));