// var scroll1=document.getElementById('scroll1');
var body=document.getElementById('body');
console.log(body);
body.addEventListener("scroll" , scrollfix);
console.log('body');
function scrollfix(){
    console.log('clicked');
    scroll1.innerHTML="<h1>Live Scores</h1>";
    console.log('body');
}