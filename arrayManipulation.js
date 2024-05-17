/* A function that takes an array of numbers as an argument and Returns a new array where 
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

function formatArrayStrings(strigs, arrayOfNUmbers){

    // Creating a new array to store the processed results
    if(strigs.length !== arrayOfNUmbers.length){

        // Throwing an error if the arrays are not of the same length
        throw new Error ("Arrays must have the same length");
        
    }

    // Check if the array is empty or contains duplicates and remove duplicates from the array itself 
    for(let i = 0; i < strigs.length; i ++){
        const string = strigs[i];
        const number = arrayOfNUmbers[i];
         
        // check if the string contains a number that matches the string length  instead of returning null  
        if(number % 2 == 0){
            strigs[i] = string + " squared";
        }else {
            strigs[i] = string + " tripled";
        }
    }
}