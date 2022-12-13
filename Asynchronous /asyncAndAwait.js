async function myFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('success')
        },3000)
        
    });
}
async function awaitFn(){
    const output=await myFunc();
    console.log("hello");
    console.log(output);
}
awaitFn();
