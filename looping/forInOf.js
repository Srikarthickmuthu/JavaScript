const person={
    name:'karthick',
    age: 22
};
for(let key in person){
    console.log(key+ ':',person[key]);
}

let num=[1,2,3,4];
for(let index in num){
    console.log(index);
}
//shows index in 'for in'
let color=['red','blue','green'];
for(let key of color){
    console.log(key);
}
//show the value