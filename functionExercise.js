// // split exercise
// function elemntOfArray(stringName) {
//   return stringName.split(" ");
// }
// console.log(elemntOfArray("Orange jordan"));
// // Covert digits
// function convertDeigits(number) {
//   for (let i = 0; i <= 6; i++) {
//     number = number.replace(number[i], "*");
//     console.log(number[i]);
//   }
//   return number;
// }

// console.log(convertDeigits("0796931321"));
// // convertEmailAdderss
// function convertEmailAdderss() {}
// // convertfistletter
// function turnFistLetter(string) {
//   return string.uppercase();
// }
// console.log(turnFistLetter("orange coding"));
// reverse a number
// function flibNumber(number) {
//   let num = number.toString();
//   for (let i = num.lenght; i >= 0; i--) {
//     console.log(num[i]);
//   }
// }
// flibNumber(59856);

// 7--Swap variable value
function swapValues(num1, num2) {
  let num3 = num1;
  num1 = num2;
  num2 = num3;
}
console.log(swapValues(2, 5));

//8-- removed index charcter
function removeCharacter(name, index1) {
  let str = name.slice(0, index1) + name.slice(index1 + 4);
  return str;
}
console.log(removeCharacter("Orange", 3));

// 9--merge two strings
function merge(firstString, secString) {
  firstString = firstString.slice(1, firstString.length);
  secString = secString.slice(1, secString.length);
  return firstString.concat(secString);
}
console.log(merge("lora", "inge"));

// 10--positiing
function position(char, StrinName) {
   return StrinName.startsWith(char) || StrinName.endsWtih(char)) ;
}
// 11--
let Stingo = "Orange coding academy"
console.log(Stingo.split(""));

//12-- Sort String Alphapitic 
function sortString(str) {
    return str.split('').sort().join('');
  }

  sortString('orange');
  