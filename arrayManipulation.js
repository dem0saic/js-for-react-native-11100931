/* 
A function that takes an array of numbers as an argument and Returns a new array where 
each even number is squared and each odd number is tripled.
*/

function processArray(array) {
    // Creating a new array to store the processed results
    const arrayOfNUmbers = [];

    // Looping through the array and pushing the results to the new array
    for(const numbers = 0; numbers < array; i++){

        // Checking if the number is even or odd and pushing the results to the new array
        if(numbers % 2 === 0){

            // square even numbers
            arrayOfNUmbers.push(numbers * numbers);
        } else {

            // triple odd numbers
            arrayOfNUmbers.push(numbers * 3);
        }
        arrayOfNUmbers.push(numbers);
    }
    return arrayOfNUmbers;
}

/*
The function takes two arrays as arguments:
- An array of strings.
- An array of numbers processed by processArray.
The function modifies each string based on its corresponding number:
- Capitalize the entire string if the number is even.
- Convert the string to lowercase if the number is odd.
*/
function formatArrayStrings(strigs, arrayOfNUmbers){

    // Creating a new array to store the processed results
    if(strigs.length !== arrayOfNUmbers.length){

        // Throwing an error if the arrays are not of the same length
        throw new Error ("Arrays must have the same length");   
    }

    // Check if the array is empty or contains duplicates and remove duplicates from the array itself 
    for(let numb = 0; numb < strigs.length; numb ++){
        const string = strigs[numb];
        const number = arrayOfNUmbers[numb];
         
        // check if the string contains a number that matches the string length
        if(number % 2 == 0){
            strigs[numb] = string.ToUpperCase();
        }else {
            strigs[numb] = string.ToLowerCase();
        }
    }
}