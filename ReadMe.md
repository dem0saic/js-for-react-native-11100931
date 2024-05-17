# Student ID: [11100931]

This project contains JavaScript functions for array manipulation and user profile creation.

**arrayManipulation.js:**

- `processArray(numbers)`: Takes an array of numbers and returns a new array where even numbers are squared and odd numbers are tripled.
- `formatArrayStrings(strings, processedNumbers)`: Takes two arrays: strings and processed numbers from `processArray`. Modifies each string based on the corresponding number (capitalizes if even, lowercases if odd).

**userInfo.js:**

- `createUserProfiles(names, modifiedNames)`: Takes two arrays: original names and modified names (from `formatArrayStrings`). Returns an array of user objects containing original name, modified name, and auto-incremented ID.

**Note:** These functions are designed to work together. You can call `processArray` and `formatArrayStrings` on an array of numbers and strings, and then use those results to create user profiles with `createUserProfiles`.