//Extended parameter handling
function f(x,y=6){
    sum=x+y;
}
f(1)
if(sum==7){
    console.log('true');
}
else{
    console.log('false');
}
//Template iterals Raw string 
const filePath = String.raw`/home/asplap3262/Desktop/JavaScript/ES6/script.js`;

console.log(`The file was uploaded from: ${filePath}`);

