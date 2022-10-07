// Find biggest string...
const names = [`AAAAAAAAA`, `BBBBBBBBBBBBB`, `CCCCCCCCCCCCCCCCCCCCCCC`, `DDDDDDDDDDDD`, `EEEEEEE`];

const largeName = [];
largeName[0] = `A`;

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    // console.log(largeName[0]);

    if (element.length > largeName[0].length) {
        largeName[0] = element;
    }
}
console.log(largeName);

// Another Way...
function largeName(name){
    let result = name[0];
    for (let i = 0; i < name.length; i++) {
        let firstElement = name[i].length;
        if (firstElement > result.length) {
            result = name[i];
        }
        
    }
    return result
}


let names2 = [`AAA`, `BBBBB`, `CCCCCCCCCCCCCCC`, `DDDDDDDDDD`];
let resultF = largeName(names2);
console.log(resultF);