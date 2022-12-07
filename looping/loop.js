function loop(){
    console.log('in for loop');
    var value=document.getElementById('loopValue').value;
    var i;
    var anyNum=5;
    for(i=1 ; i<=value ; i++){
        
        console.log('Entered value is :'+i);}
    
    var j=1;
    while(j<=value){
        
        console.log('Inside the while loop :'+j);
        j++;
    }
    var k=1;
    do{
        console.log('inside do-while loop :'+k);
        k++;
        
    }while(k<=value);
    event.preventDefault();
}
