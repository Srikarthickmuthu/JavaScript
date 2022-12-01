
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
var pass1=fname.substring(0,3);
var pass2=lname.substring(0,3);
var pass3=email.substring(0,3);
var pass4=dob.substring(0,4);

var password='@'+pass1+pass2+pass3+pass4;
console.log(password);
localStorage.setItem('emailkey' ,email);
localStorage.setItem('passwordkey' , password);

}

function passgenerate(event){
    var lpass=localStorage.getItem('passwordkey');
    console.log(lpass);
    event.preventDefault();
    
    var querry=document.querySelector('div');
    querry.textContent(`<input type='text' value= ${lpass}>`)

}


