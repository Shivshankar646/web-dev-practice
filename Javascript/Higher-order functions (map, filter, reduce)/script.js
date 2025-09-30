// 1️⃣ map()
// Creates a new array by applying a function to each element of the original array.
const nums = [1, 2, 3, 4];
const squared = nums.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]

// 2️⃣ filter()
// Creates a new array containing elements that pass a condition.
const nums1 = [1, 2, 3, 4];
const evens = nums1.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]


// 3️⃣ reduce()
// Reduces an array to a single value by accumulating results.
const nums2 = [1, 2, 3, 4];
const sum = nums2.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
