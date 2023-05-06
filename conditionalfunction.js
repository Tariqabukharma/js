/*
1. If someone is applying to the academy’s website, create the conditional to cover these situations:
● If the candidate is older than 30, print out: “You are not eligible. You may join other programs.”
● If the candidate is between 18 and 30, print out: “You are eligible. Start your application.”
● If the candidate is younger than 18, print out: “You may join the kids' program.”
● If the candidate is older than 60, print out: “You may join the seniors’ program.”
● Calculate the age using the year of birth dynamically.
*/
let birthday = 23 / 2 / 1998;

let canidateAge = birthday - Date;
if (canidateAge > 30) {
  console.log("You are not eligible. You may join other programs.");
} else if (canidateAge >= 18 && canidateAge <= 30) {
  console.log("You are eligible. Start your application.");
} else if (canidateAge < 18) {
  console.log("You may join the kids' program.");
} else if (canidateAge > 60) {
  console.log("You may join the seniors’ program.");
}
/*2. Write a function that takes a string and switches the letters' case from upper to lower and vice
versa.*/
function switchCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}
console.log(switchCase("OrAnGe"));

//3. Write a function that takes a string, capitalizes each word's first letter, and removes all spaces

function capitalizeWord(stringName01) {
  let finco = stringName01.split();
  for (let i = 0; i <= finco.length; i++) {
    let firstl = finco[i].charAt(0).toUpperCase();
  }
  return firstl.join();
}
/**
 * 4. Write a function that removes a specific element in an array.
Sample Input: ([“Coding”, “Academy”, “By”, “Orange”], “By”)
Sample Output: [“Coding”, “Academy”, “Orange”]
 */
function RemovaArrayElement(stringName02, arrayElemnt) {
  for (let i = 0; i <= stringName02.length; i++)
    if (stringName02[i] == arrayElemnt) continue;
    else {
      let newArray = stringName02[i].join();
    }

  return newArray;
}
RemovaArrayElement(["Coding", "Academy", "By", "Orange"], "By");
/**
 * 5. Write a function that checks if a number is odd or even.

 */
function oddAndEven(checkNumber) {
  if (checkNumber % 2 == 0) {
    return `the ${checkNumber} is even `;
  } else return `the ${checkNumber} is odd `;
}
console.log(oddAndEven(5));
/**
 * 6. Write a function that checks whether an input variable is a number.
 */

function numberOrVarable(input01) {
  if (typeof input01 == "number") {
    return `${input01} is number`;
  } else {
    return `${input01} is not number`;
  }
}
console.log(numberOrVarable(5));
/**
 * 7. Write a function that finds the largest of two numbers.

 */
function largestNumber(number01, number02) {
  if (number01 > number02) {
    return `the largest number is ${number01}`;
  } else {
    return `the largest number is ${number01}`;
  }
}

// 8. Write a function that checks if a triangle is equilateral, scalene, or isosceles.
function classifyTriangle(side1, side2, side3) {
  if (side1 === side2 && side1 === side3) {
    return "equilateral";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "isosceles";
  } else {
    return "scalene";
  }
}
//9. Write a function that finds if a number is present in a given range.

//10. Write a function that checks whether a year is a leap year.
function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}
