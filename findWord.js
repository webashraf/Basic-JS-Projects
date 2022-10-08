const names = `Hello, I'm ali ashraf from bangladesh at dhaka. And I'm 24 study in Govt. Murapara college honours 3rd semister under nu.`;

const metches = names.match(/i'm/gi);
const result1 = metches ? metches.length : 0; 

const position = names.search(/i'm/i);
const result2 = position >= 0 ? position : 'Note Found The Value';

console.log(result1);
console.log(result2);