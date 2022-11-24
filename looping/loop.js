function loop(){
var value=0;
var val=document.getElementById('avalue').value;
do{
    document.write('count :'+value+"<br>");
    value++;
}while(value<val);
}

