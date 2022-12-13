const p1 = new Promise((res, rej)=>{
    setTimeout(() => {
        res('success');
    }, 1000);
})
const p2 = new Promise((res, rej)=>{
    setTimeout(() => {
        res('failure');
    }, 2000);
})

// p1.then(console.log);
// p2.catch(console.log);

Promise.allSettled([p1,p2]).then(console.log).catch(console.log);
Promise.all([p1,p2]).then(console.log).catch(console.log);
Promise.race([p1,p2]).then(console.log).catch(console.log);
console.log('hello');