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