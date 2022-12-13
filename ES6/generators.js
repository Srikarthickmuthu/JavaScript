// function* generator(i) {
//     yield i;
//     yield i + 10;
//     yield i + 20;
// }
// const gen = generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


function* anotherGenerator(i) {
    yield i+1;
    yield i+2;
    yield i+3;
}
function* anotherGenerator1(i){
    yield i+4;
    yield i+5;
    yield i+6;
}
function* generator1(i) {
    yield i;
    yield * anotherGenerator(i);
    yield * anotherGenerator1(i);
    yield i + 10;
}
const gen1 = generator1(10);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);