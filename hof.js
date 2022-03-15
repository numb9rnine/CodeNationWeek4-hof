const whichGreeting = (timeOfDay)=> {
    console.log(`Good ${timeOfDay}`)
}

const greet = (time,fn) =>{
    if(time<1200){
        fn(`Morning`);
    }
    else if (time >= 1200 && time < 1800){
        fn(`Afternoon`);
    }
    else{fn (`Evening`);}
}

greet(1100,whichGreeting)

/////////////

const thisFunction = () => {
    return "HELLLLOOO";
}

const add = (example) => {
    add2(example);
}

const add2 = (example) => {
    example();
}

add(thisFunction);

let myArray = [
    [1, 2, 3, 4, 5], 
    [6, 7, 8, 9, 10], 
    [11, 12, 13, 14, {name: "Jordan"}]
];

console.log(myArray[2][4].name)
