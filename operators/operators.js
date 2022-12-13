var a = document.getElementById('anum').value;
var b= document.getElementById('bnum').value;
var c='text';
var l="<br>";

console.log('Arithematic operators');
console.log("a + b =",(a+b));
console.log("a + b + c =",(a+b+c));
console.log("a - b =",(a-b));
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b);
console.log("a ++ =",a++);
console.log("b -- =",b--);

console.log('Comparison operators')
console.log("a == b ",a==b);
console.log("a > b ",a>b);
console.log("a < b ",a<b);
console.log("a != b ",a!=b);
console.log("a <= b ",a<=b);
console.log("a >= b ",a>=b);

console.log('Conditional operators');
console.log((a<b)?'a is small':'b is small');

