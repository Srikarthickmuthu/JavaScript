const str = "The quick brown fox jumps over the lazy dog";

// const a=str.replace('fox','dog');

// const b=str.replace("dog",'fox');

// console.log(b);

const arr=str.split(" ");
console.log(arr);

const a=arr.indexOf("fox");
arr[a]="dog";


