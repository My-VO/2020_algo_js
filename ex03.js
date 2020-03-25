/* Calculation */

let a = 8;
let b = a + 1;
a += 1;
a *= 2;
b -= 5;
b += b;
a += 3;

console.log('a: ', a);
console.log('b: ', b);

if (a === 1) {
    a += 2;
} else {
    a += 3;
};
 console.log('a total: ', a);