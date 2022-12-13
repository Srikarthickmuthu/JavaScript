async function myFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('success')
        },1000)
        
    });
}
async function awaitFn(){
    const output=await myFunc();
    console.log(output);
}
awaitFn();