async function myFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('success')
        },3000)
    });
}
async function awaitFn(){
    //console.log("hello");
    const output=myFunc().then(console.log);
    console.log("hello");
   
}
awaitFn();
