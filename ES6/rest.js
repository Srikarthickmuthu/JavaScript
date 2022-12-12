function sum(...args){
    let sum=0;
    for(let i of args){
        sum+=i;
    }
    console.log('sum ='+sum);
}
sum(10,20,30,40,50,60,70);