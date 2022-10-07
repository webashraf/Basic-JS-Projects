const mark = 100;
switch(mark){
    case mark >= 80 && mark <=100:
    console.log("A+")
    break;
    case mark >70: 
    console.log("A")
    break;
    case mark >60:
    console.log("B")
    break;
    case mark >50:
    console.log("C")
    break;
    case mark >40 && mark > 0:
    console.log("Fail")
    break;
    default:
    console.log("Invalid")

}
