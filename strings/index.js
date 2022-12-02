var string1 = "This is the sting of values in the type of character";

console.log(string1.length);

console.log(string1.slice(1,3));
console.log(string1.slice(10));
console.log(string1.slice(-21));

console.log(string1.slice(1000,3)); //Return empty 
console.log(string1.substring(1000,3)); // Swap the values
console.log(string1.substring(3,-10)); // negative values are considered as 0
console.log(string1.slice(3,-10));

console.log(string1.substr(12,2));//1st index 2nd length

console.log(string1.concat(" Newly added"));
console.log(string1);

console.log(string1.split(""));
console.log(string1.split(" "));

console.log(string1.indexOf('the')); // returns the first 
console.log(string1.lastIndexOf('the')); // returns the last occurance of the element

