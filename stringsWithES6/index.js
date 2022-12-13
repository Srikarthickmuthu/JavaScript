function string(){
    
var string1 = " This is the sting of values in the type of character ";
console.log(string1);
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

console.log(string1.trim());
console.log(string1.trimStart());
console.log(string1.trimEnd());

console.log(string1.charAt(10));
console.log(string1.charCodeAt(10)); //return ascii value

console.log(string1.replace(' ' , '$'));
console.log(string1.replaceAll(' ' , '$'));
console.log(string1);
}


//es6 full support to UTF-6
let str="𠮷abc";
console.log(str.charCodeAt(0));
console.log(str.charAt(0));

//ES6

console.log(str.startsWith("𠮷"));
console.log(str.endsWith("c"));
console.log(str.includes("b"));

console.log("A".repeat(5));

// let str2="hello 
// world";             //multi line in string is not possible

let str2="hello \n\
World";                 //before es6
console.log(str2);

let str3=`Hello 
World 
Of 
Happiness`;

console.log(str3);

