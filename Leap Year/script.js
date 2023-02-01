let year = [1998, 2002, 2006, 2020, 2023, 3000, 30023, 2098]

for (let i = 0; i < year.length; i++) {
    const element = year[i];
    if ((element % 4 == 0 && element % 100 !== 0) || element % 400 == 0) {
        console.log(`This is leap year ${element}`);
    }
    else{
        console.log(`${element} is not a leap year`);
    }
}