function array(){

    var arrayContent=document.getElementById('arrayContent');
var array = ['first', 'second', 'third', [1, 2, 3]];
console.log(array.length);
console.log(array.indexOf('second'));
console.log(array.push('fourth'));
console.log(array);
console.log(array.unshift('zeroth'));
console.log(array);
console.log(array.pop());
console.log(array);
console.log(array.shift());
console.log(array);
console.log(array.slice(3));
console.log(array);
console.log(array[1]);
array[1]='another';
console.log(array);
delete array[1];
var string = array.toString();
console.log(string);

var arr1=[1,2,3];
var arr2=['karthick' ,123];
var arr4=arr1.concat(arr2);
console.log(arr4);
}