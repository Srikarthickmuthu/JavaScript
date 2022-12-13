const array1=[1,2,3,4,5,6,7,8,9,10];

console.log(array1.map(a=>a*2));

const filter1=array1.filter(a=>a%2==0);
console.log(filter1);

const filter2=array1.map(a=>a%2==0);
console.log(filter1);

console.log(array1.forEach(a=>a*2)); //undefined


