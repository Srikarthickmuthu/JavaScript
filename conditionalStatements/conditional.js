function biggest(){
    var a=document.getElementById('avalue').value;
    var b=document.getElementById('bvalue').value;
    var c=document.getElementById('cvalue').value;
    if(a>b && a>c){
        console.log("A is bigger");}
    else if(b>a && b>c){
        console.log("B is bigger");}
    else{
        console.log("C is bigger");
    }  
    event.preventDefault();
}