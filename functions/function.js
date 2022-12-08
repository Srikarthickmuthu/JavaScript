
function generatePassword()
{

var fname=document.getElementById('fname').value;
var lname=document.getElementById('lname').value;
var email=document.getElementById('email').value;
var dob=document.getElementById('dob').value;
// console.log(email);
// console.log(dob);
// console.log(fname);
// console.log(lname);

// var fname='karthick' , lname='kumar' , email='karthick@gmail.com' , dob='11.12.2000';
var pass1=fname.slice(0,3);
var pass2=lname.slice(0,3);
var pass3=email.slice(0,3);
var pass4=dob.slice(0,4);

var password='@'+pass1+pass2+pass3+pass4;
console.log(password);
localStorage.setItem('emailkey' ,email);
localStorage.setItem('passwordkey' , password);

}


