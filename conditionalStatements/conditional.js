function biggest(){
    var a=document.getElementById('avalue').value;
    var b=document.getElementById('bvalue').value;
    var c=document.getElementById('cvalue').value;
    if(a>b && a>c){
        document.write("<h1>A is bigger</h1>");}
    else if(b>a && b>c){
        document.write("<p>B is bigger</p>");}
    else{""
        document.write("<p>C is bigger</p>");
    }
    
    
}