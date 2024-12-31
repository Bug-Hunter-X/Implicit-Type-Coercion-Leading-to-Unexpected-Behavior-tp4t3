function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  if (a === null || b === null) {
    return null; // Handle null values explicitly
  }
  return a + b; // Corrected addition for numbers
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 5)); // throws error
console.log(foo('hello', ' world'));// throws error