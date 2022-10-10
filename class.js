// Practice class and inheritance behaveour 
class Teacher{
    constructor(){
        this.teacherName = 'Abu Abdullah';
    }
}

class Students extends Teacher {
    constructor(names, age, clas){
        super();
        this.name = names;
        this.age = age;
        this.class = clas;
    }
    getFullDetails(){
        return `My name is ${this.name} and my ${this.age}`;
    }
}
const student1 = new Students(`Ali Ashraf`, 24, 15);
console.log(student1);
console.log(student1.getFullDetails());