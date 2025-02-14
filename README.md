# TypeScript Type Error: Argument of type 'string[]' is not assignable to parameter of type 'string'

This repository demonstrates a common TypeScript error: passing an array of strings to a function expecting a single string.  The `bug.ts` file shows the error, and `bugSolution.ts` provides a corrected version.

## Problem

The `greeter` function is designed to take a single string and return a greeting. However, the `user` variable is an array of strings. Attempting to pass `user` to `greeter` results in a type error.

## Solution

The solution involves adapting the code to handle the array of strings.  This can be done in several ways, such as iterating through the array and applying the `greeter` function to each element, or modifying the `greeter` function to accept an array as input.