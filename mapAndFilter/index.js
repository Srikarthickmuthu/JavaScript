function mapFilter(){
var array=[22,33,11,1,4,55];

var array1=array.filter(age=>age>=18);

console.log(array1);

var array2=array.map(age=>{
    if(age>=18){
        return age;
    }
    else{
        return false;
    }
});

console.log(array2);

var array3=array.forEach(age=>{
    if(age>=18){
        return age;
    }
    else{
        return false;
    }
});

console.log(array3);
}
