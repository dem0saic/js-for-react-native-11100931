/*
Write a function createUserProfiles that:
- Takes an array of names and the array of modified names from Task 2.
- Returns an array of objects, each containing originalName, modifiedName,
and id (auto-incremented starting from 1).
*/

let idCounter = 1;  // Auto-incrementing ID counter

function createUserProfiles(names, modifiedNames) {
   //check if names are already in the profile collection and create a new one if it doesn't exist already and not modified names already 
  if (names.length !== modifiedNames.length) {

    // Throwing an error if the arrays are not of the same length
    throw new Error("Arrays must have the same length");
  }

  // Creating a new array to store the processed results
  const userProfiles = [];

/*Loops through each user name and its corresponding modified name.
     - i: Loop counter variable (starts at 0, iterates until names.length is reached).
     - originalName: Stores the original name from the names array at the current index (i).
    - modifiedName: Stores the modified name from the modifiedNames array at the current index (i).
*/
  for (let i = 0; i < names.length; i++) {
    const originalName = names[i];
    const modifiedName = modifiedNames[i];

    /*
    Creates a new user profile object and adds it to the userProfiles array.
     - id: A unique identifier for the user profile, generated using an auto-incrementing counter.
     - originalName: The original name provided for the user.
     - modifiedName: The modified name (capitalized for even IDs, lowercase for odd IDs). 
    */
    userProfiles.push({
      id: idCounter++,
      originalName,
      modifiedName,
    });
  }

  return userProfiles;
}