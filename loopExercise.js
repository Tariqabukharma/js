/**
 * 1. Write a script to print out all even numbers between 1 and 50, twice.
Use 1 for loop and 1 while loop.
 */
//  for loop
function forLoop() {
  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

forLoop();
//while loop
function whileLoop() {
  let i = 1;
  while (i <= 50) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

/**
 * 4. Fizz-Buzz! Write a script that does the following:
● Counts from 1 to 100 and prints out something for each number:
○ If the number is divisible by 3, print "Fizz"
○ If the number is divisible by 5, print "Buzz"
○ If the number is divisible by both 3 and 5, print "FizzBuzz"
○ If the number does not meet any of the above conditions, just print the number
Output:
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz,
19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz,
Fizz, ...

 */
function divisible3(){
    for (let i=1;i<=100;i++){

    if (i %3==0){
    console.log("Fizz");      
    }
    else if (i%5==0){
        console.log("Buzz");      

    }
    else if (i%5==0&&i%3==0){
        console.log("FizzBuzz"); 
    }
    else 
    {
        console.log(i);

    }
    }
    /**
     * 6. Create a recursive solution. A FizzBuzz function calls itself to continue the series.
     * 
     */
    
    function recursiveFunction(i){
        if (i==100){
            return;
        }
        else {
            if (i %3==0){
                console.log("Fizz");      
                }
                else if (i%5==0){
                    console.log("Buzz");      
            
                }
                else if (i%5==0&&i%3==0){
                    console.log("FizzBuzz"); 
                }
                else 
                {
                    console.log(i);
            
                }
            recursiveFunction(i+1)
            
        }

    }
    recursiveFunction(1);
    /***7. Write a function that takes a number and converts it to certain banknotes.
Sample Input: (57, [25, 10, 5, 1])
Sample Output: 25, 25, 5, 1, 1 */

function Banknotes(amount, banknotes) {
    let result = "";
    for (let i = 0; i < banknotes.length; i++) {
      let note = banknotes[i];
      while (amount >= note) {
        result += note + ", ";
        amount -= note;
      }
    }
    return result.slice(0, -2);
  }

  console.log(convertToBanknotes(645, [25, 10, 5, 1])); 
  

  /**
   * 8. Write a function that counts the existence of a specific character within a string, despite the case.
     Sample Input: (“Coding Academy by Orange”, “o”)
      Sample Output: 2
   */
      function countCharacter(str, char) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
          if (str.charAt(i).toLowerCase() === char.toLowerCase()) {
            count++;
          }
        }
        return count;
      }
      countCharacter("Coding Academy by Orange".'o');

//       Write for loops that accomplish the following tasks:
// a. Print the numbers 0 - 20, one number per line.
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// b. Print only the ODD values from 3 - 29, one number per line.
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// c. Print the EVEN numbers 12 down to -14 in descending order, one number per line.
// d. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 
for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Initialize two variables to hold the string 'CodingAcademy' and the 
// array [7, 500, 'KH404', 'black', 36], then construct for loops to accomplish the following tasks:
// e. Print each element of the array to a new line.
// f. Print each string character in reverse order to a new line

// initialize variables
const myString = 'CodingAcademy';
const myArray = [7, 500, 'KH404', 'black', 36];

// print each element of the array to a new line
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// print each string character in reverse order to a new line
for (let i = myString.length - 1; i >= 0; i--) {
  console.log(myString[i]);
}
// 11. Construct a for loop that sorts the array [7, 23, 18, 9, -13, 38, -10, 12, 0, 124] into two new arrays:
// Define an empty evens array to hold the even numbers and an odds array for the odd numbers.
// In the loop, determine if each number is even or odd, then put that number into evens or odds, as 
// appropriate.
 
const myArray = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
const evens = [];
const odds = [];

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    evens.push(myArray[i]);
  } else {
    odds.push(myArray[i]);
  }
}

console.log("Even numbers: " + evens);
console.log("Odd numbers: " + odds);



      
  
