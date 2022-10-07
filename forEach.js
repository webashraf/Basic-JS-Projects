let vowel = [`a`, `e`, `i`, `o`, `u`];
const latters = userLatter => {

    vowel.map((v, ind, arr) => {
        arr.push(v.toUpperCase());
    }) //Vowel Convert to upperCase
    let count = 0;

    const lattersToArr = Array.from(userLatter);
    lattersToArr.forEach( v =>{
        if (vowel.includes(v)) {
            count++;
        }
    })
    return count;
}

console.log(latters(`Hello, I'm Ali iiiiiiII Ashraf`));
