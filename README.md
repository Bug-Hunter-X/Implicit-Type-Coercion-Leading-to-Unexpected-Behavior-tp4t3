# Implicit Type Coercion Bug in JavaScript

This repository demonstrates a subtle bug in JavaScript related to implicit type coercion. The `bug.js` file contains code that exhibits unexpected behavior due to the loose typing of JavaScript. The `bugSolution.js` file provides a corrected version.

## Bug Description
The function `foo` is designed to add two numbers. However, due to JavaScript's implicit type coercion, it also performs string concatenation if the inputs are strings.  This can lead to unexpected results if the function is called with mixed types or null values.

## Solution
The solution in `bugSolution.js` adds explicit type checking and error handling to address the potential issues related to implicit type coercion. 