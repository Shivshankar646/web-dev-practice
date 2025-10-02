// math.js

// Named exports
export const pi = 3.14;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function square(num) {
  return num * num;
}

export function cube(num) {
  return num * num * num;
}

// ✅ Only one default export (optional)
export default multiply; // or cube
