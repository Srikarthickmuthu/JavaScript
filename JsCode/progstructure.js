// bindings
let variable = 10*3;
let ten=10;
console.log(ten*ten);

//function
 prompt('enter password');

// control flow
 let theNumber = Number(prompt('Choose a number'));
 console.log("square root "+ theNumber * theNumber);

 // condition execution
let theAnother = Number(prompt("Pick a number"));
if (!Number.isNaN(theAnother)) {
    console.log("Your number is the square root of " +
    theAnother * theAnother);
 }

//  nested condition
let num1 = Number(prompt("Pick a number"));
let num=2;
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

// while lopps
let number=0;
while(number<=12){
    console.log(number);
    number=number+2;
}

