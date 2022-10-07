// Fibonacchi
let fibonacchi = n => {
let fibona = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibona[i] = fibona[i - 1] + fibona[i - 2];  
        // console.log(i);     
    }
    return fibona;
}
console.log(fibonacchi(10));

// Fibonacchi in recursive method
let fibo = n => {
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else{
        return fibo(n - 1) + fibo(n - 2);
    }
}
console.log(fibo(10));

// Fibonacchi Ful Series
let fiboFS = n =>{
    if (n === 0) {
        return [0];
    }
    else if (n === 1) {
        return[0 , 1];
    }
    else{
        let fibo = fiboFS(n - 1);
        let nextFibo = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextFibo);
        return fibo;
    }
}
console.log(fiboFS(10)); 