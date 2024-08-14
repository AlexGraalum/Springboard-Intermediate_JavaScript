import { isEven, replaceVowels } from './utils/index.mjs';

let str = "This is a test";
console.log(`Before replace: ${str}`);
str = replaceVowels(str);
console.log(`After replace: ${str}`);

let nums = [278, 33, 100043];
console.log('Test if numbers are even:');
for (var num of nums) {
    console.log(`${num} is ${isEven(num) == true ? 'Even' : 'Odd'}`);
}
