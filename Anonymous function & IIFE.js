// Do the below programs in anonymous function & IIFE
// a. Print odd numbers in an array

let arr = [1,2,3,4,5,6,7,8,9];
let odds = arr.filter(n => n%2)
console.log(odds)

// b. Convert all the strings to title caps in a string array

// c. Sum of all numbers in an array

let sum = [1,2,3,4,5,6,7,8,9];
let total = 0;
for (var i = 0; i < sum.length; i++) {
    total += sum[i];
}
console.log(total);

// d. Return all the prime numbers in an array

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);

// E. Return all the palindromes in an array

// F. Return median of two sorted arrays of the same size

// G. Remove duplicatess from an array

let duplicates = [ 1,1,2,3,4,4,5,6,7,6,8,9];
let uniq = a => [...new Set(a)];
console.log(uniq());

// H. Rotate an array by k times

