//date practice
console.log('Practice 1:')
let thisDate = new Date()
console.log(thisDate.toISOString())

console.log('')
console.log('Practice 2:')
let thisOtherDate = new Date()
thisOtherDate.getFullYear()
console.log('The actual year is ' + thisOtherDate.getFullYear())
thisOtherDate.setFullYear(2024)
console.log('The edited year is ' + thisOtherDate.getFullYear())

console.log('')
console.log('Practice 3:')
let someDate = new Date()
console.log(someDate.toLocaleString())
console.log(someDate.toLocaleDateString())
console.log(someDate.toLocaleTimeString())

console.log('')
console.log('Practice 4:')
let someOtherDate = new Date()
console.log('The current month is ' + someOtherDate.getMonth().toString())
someOtherDate.setMonth(11)
console.log('The new month is ' + someOtherDate.getMonth().toString())

console.log('')
console.log('Practice 5:')
let aDate = new Date()
console.log('American English Date and Time: ' + aDate.toLocaleString('en-US'))
console.log('American English Date: ' + aDate.toLocaleDateString('en-US'))
console.log('American English Time: ' + aDate.toLocaleTimeString('en-US'))

console.log('')
console.log('Practice 6:')
let dateDate = new Date(2022, 0, 15, 15, 45, 30, 0);
console.log(dateDate.toLocaleString('en-US'))

console.log('')
console.log('Practice 7:')
let theDate = new Date(2023, 2, 8, 9, 30, 0, 0);
console.log(theDate.toLocaleString())
theDate.getHours()
console.log('The Original Hours: ' + theDate.getHours())
theDate.setHours(14)
console.log(theDate.toLocaleString())

console.log('')
console.log('Practice 8:')
let theOtherDate = new Date()
let written = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'}
console.log(theOtherDate.toLocaleString('en-US', written))

console.log('')
console.log('Practice 9:')
let randomDate = new Date(2022, 5, 30, 12, 45, 30);
console.log(randomDate.toISOString())

console.log('')
console.log('Practice 10:')
let newRandom = new Date(2022, 0, 1, 12);
console.log('Previous Day: ' + newRandom.getDate())
newRandom.setDate(15);
console.log('Updated Date: ' + newRandom.toLocaleString('en-US'))

console.log('toISOString:')
let myNewDate = new Date()
console.log(myNewDate.toISOString()) // Output: current date and time in ISO format

//math practice
console.log('Practice 1:')
const price = 7.99;
console.log('$' + Math.floor(price));

console.log('')
console.log('Practice 2:')
const cupsOfFlour = 2.5;
console.log('You need about ' + Math.ceil(cupsOfFlour) + ' cups of flour.');

console.log('')
console.log('Practice 3:')
const randomNum = Math.random() * 10;
console.log('randomNum = ' + randomNum);
const roundedDown = Math.floor(randomNum);
console.log('roundedDown = ' + roundedDown);

console.log('')
console.log('Practice 4:')
let a = 132;
let b = (-3249);
const absolute = Math.abs(b - a);
console.log('The absolute value of ' + b + ' - ' + a + ' = ' + absolute)

console.log('')
console.log('Practice 5:')
const min = 5;
const max = 15;
const numNum = Math.floor(Math.random()*(max - min)+1);
console.log('numNum = ' + numNum)

//playing with strings
console.log('Practice 1:')
const forward = "Put my thang down flip it and reverse it";
const reverseIt = [...forward].reverse().join("");
console.log(forward)
console.log(reverseIt)

console.log('')
console.log('Practice 2:')
const string1 = "Can you finish...";
const string2 = "My sentences?";
const newString = string1.concat(' ' + string2);
console.log(newString)

console.log('')
console.log('Practice 3:')
const gotVowels = "I wonder how many vowels I can fit in this string?";
console.log(gotVowels)
function vowelCount(gotVowels) {
  return gotVowels.match(/[aeiou]/gi).length;
}
console.log('Vowel count: ' + vowelCount(gotVowels))

console.log('')
console.log('Practice 4:')
const normString = "I like to eat, eat, eat apples and bananas!";
console.log(normString)
const newString2 = normString.replace(/[aeiou]/gi, "o");
console.log(newString2)

console.log('')
console.log('Practice 5:')
const whiteSpace = "   Giving liminal vibes.    "
console.log(whiteSpace)
const noSpace = whiteSpace.trim();
console.log(noSpace)

console.log('')
console.log('Practice 6:')
const isDrome = "Murder for a jar of red rum.";
console.log(isDrome)
function palindromeTest(isDrome){
  const testDrome = isDrome.split().reverse().join('');
  if (isDrome == testDrome){
    console.log('Yup, tis a palindrome!');
  } else {
    console.log('Alas, tis not a palindrome.');
  }
}
palindromeTest(isDrome);

console.log('')
console.log('Practice 7:')
const isLetters = "( ˘︹˘ )";
console.log(isLetters)
let regex1 = /\w/
console.log('Does this have letters? ' + regex1.test(isLetters))

console.log('')
console.log('Practice 8:')
const thisString = "This is a bunch of words with white space.";
console.log(thisString)
console.log(thisString.split(" "))

console.log('')
console.log('Practice 9:')
const allLittle = "this is a test.";
console.log(allLittle)

const arr = allLittle.split(" ");
for (var i =0; i < arr.length; i++){
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const cappyCaps = arr.join(" ");
console.log(cappyCaps)

console.log('')
console.log('Practice 10:')
const qualContent = "Th1s 1s l337 sp34k. (This is leet speak.)";
console.log(qualContent)

const regex2 = /[a-zA-z0-9]/;
console.log('Does it have at least one capital letter, one lowercase letter, and one digit? ' + regex2.test(qualContent))
