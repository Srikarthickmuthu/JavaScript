
function switchcase(){
    var selected=document.getElementById("selected").value;
    switch(selected){
        case '1':document.write("sunday");
                break;
        case '2':document.write("monday");
                break;
        case '3':document.write("tuesday");
                break;
        default: document.write("No values");
    }
}