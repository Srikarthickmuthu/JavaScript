var num=new Intl.NumberFormat("en-US")
var num1=new Intl.NumberFormat("en-IN")

console.log(num1.format(123456789.00))
console.log(num.format(123456789.00));

var cur= new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});
var cur1= new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"});

console.log(cur.format(1000));
console.log(cur1.format(1000));

var date=new Intl.DateTimeFormat("en-US");
var date1=new Intl.DateTimeFormat("en-IN");

console.log(date.format(new Date("2022-05-22")));
console.log(date1.format(new Date("2022-05-22")));