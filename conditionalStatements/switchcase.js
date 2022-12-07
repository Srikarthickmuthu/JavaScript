
function switchcase(){
    var selected=document.getElementById("selected").value;
    switch(selected){
        case '1':console.log("sunday");
                break;
        case '2':console.log("monday");
                break;
        case '3':console.log("tuesday");
                break;
        default: console.log("No values");
    }
}