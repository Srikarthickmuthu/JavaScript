function operators(){
var a = document.getElementById('anum').value;
var b= document.getElementById('bnum').value;
var c='text';
var l="<br>"
document.write('Arithematic operators');
document.write(l);
document.write("a + b =",(a+b));
document.write(l);
document.write("a + b + c =",(a+b+c));
document.write(l);
document.write("a - b =",(a-b));
document.write(l);
document.write("a * b =",a*b);
document.write(l);
document.write("a / b =",a/b);
document.write(l);
document.write("a % b =",a%b);
document.write(l);
document.write("a ++ =",a++);
document.write(l);
document.write("b -- =",b--);
document.write(l);
document.write(l);

document.write('Comparison operators')
document.write(l);
document.write("a == b ",a==b);
document.write(l);
document.write("a > b ",a>b);
document.write(l);
document.write("a < b ",a<b);
document.write(l);
document.write("a != b ",a!=b);
document.write(l);
document.write("a <= b ",a<=b);
document.write(l);
document.write("a >= b ",a>=b);
document.write(l);
document.write(l);

document.write('Conditional operators');
document.write(l);
document.write((a<b)?'a is small':'b is small');



}