//rest

function sum(...args){
    let sum=0;
    for(let i of args){
        sum+=i;
    }
    console.log('sum ='+sum);
}
sum(10,20,30,40,50,60,70);


//spread

let array=[1,2,3,4,5,6];
let array1=[...array,7,8,9];
console.log(array1);

let str=['a','b',...'cdeff'];
console.log(str);

