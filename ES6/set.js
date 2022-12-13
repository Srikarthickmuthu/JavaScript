const mySet=new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add('helllo');
mySet.add('5');

//set methods
console.log(mySet.has(3));

console.log(mySet.size);

console.log(mySet.delete('5'));
console.log(mySet)

console.log(mySet.clear());
console.log(mySet)

//removing duplicate elements in an array

const array=[2,3,1,1,3,4,5,6,6];
console.log(array);

console.log([...new Set(array)]);