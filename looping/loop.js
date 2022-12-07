function loop(){
    console.log('in for loop');
    var value=document.getElementById('loopValue').value;
    var i;
    for(i=1 ; i<=value ; i++){
        console.log('Entered value is :'+i);
    }
    event.preventDefault();
}
