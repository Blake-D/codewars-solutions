// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (string) {
  const glossary = "0123456789"
  let letterArray = []
  let numArray = []
  string = string.split('')
  for(let i = 0; i < string.length; i++){
    if(glossary.includes(string[i])){
      numArray.push(string[i])
    } else{
      letterArray.push(string[i])
    }
  }
  if(numArray.length === 0){
    numArray.push(1)
  } else{
    for(let x = numArray.length - 1; x > -1; x--){
      numArray[x]++
      if(numArray[x] == 10 && x != 0){
        numArray[x] = "0"
      } else if(numArray[x] == 10 && x === 0){
          numArray[x] = "0"
          numArray.unshift(1)
          break
      } else{
          numArray[x] = numArray[x].toString()
          break
      }
    }
  }
  return letterArray.join('')+numArray.join('')
}

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// the bottom-most of the two solutions below was my first swing at it. It worked, but it is super wet

// then I learned a way more efficient way to use .replace() and a new way to use .split() and reduced the solution to a single line

// vv 2nd attempt

function domainName(url){
  return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0]
}

// 1st attempt

function domainName(url){
  let myArr = []
  if(url.includes("http://www.")){
    url = url.replace("http://www.", "").split('')
    for(let i = 0; i < url.length; i++){
      if(url[i] === "."){
        break
      } else{
        myArr.push(url[i])
      }
    }
    return myArr.join('')
  } else if(url.includes("http://")){
      url = url.replace("http://", "").split('')
      for(let i = 0; i < url.length; i++){
        if(url[i] === "."){
          break
        } else{
          myArr.push(url[i])
        }
      }
      return myArr.join('')
  } else if(url.includes("https://www.")){
      url = url.replace("https://www.", "").split('')
      for(let i = 0; i < url.length; i++){
        if(url[i] === "."){
          break
        } else{
          myArr.push(url[i])
        }
      }
      return myArr.join('')
  } else if(url.includes("https://")){
      url = url.replace("https://", "").split('')
      for(let i = 0; i < url.length; i++){
        if(url[i] === "."){
          break
        } else{
          myArr.push(url[i])
        }
      }
      return myArr.join('')
  } else if(url.includes("www.")){
      url = url.replace("www.", "").split('')
      for(let i = 0; i < url.length; i++){
        if(url[i] === "."){
          break
        } else{
          myArr.push(url[i])
        }
      }
      return myArr.join('')
  } else{
    for(let i = 0; i < url.length; i++){
      if(url[i] === "."){
        break
      } else{
        myArr.push(url[i])
      }
    }
    return myArr.join('')
  }
}

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

function likes(names) {
  if(names.length === 0){
    return "no one likes this"
  } else if(names.length === 1){
    return `${names[0]} likes this`
  } else if(names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  } else if(names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if(names.length > 3){
    let num = names.length - 2
    return `${names[0]}, ${names[1]} and ${num} others like this`
  }
}

// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

function createArrayOfTiers(num) {
  num = num.toString()
  let myArr = []
  let myStr = ""
  for(let i = 0; i < num.length; i++){
    myStr = myStr + num[i]
    myArr.push(myStr)
  }
  return myArr
}

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
  let zeroArr = []
  let otherArr = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      zeroArr.push(arr[i])
    } else{
      otherArr.push(arr[i])
    }
  }
  return(otherArr.concat(zeroArr))
}


// # Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str){
  str = str.trim().split(' ')
  for(let i = 1; i < str.length; i += 2){
    str[i] = str[i].split('').reverse().join('')
  }
  return str.join(' ')
}

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

function cleanString(s) {
  s = s.split('')
  for(let i = 0; i < s.length; i++){
    if(s[i] === "#"){
      if(i === 0){
        s.shift()
        i = -1
      } else{
          s.splice(i-1, 2)
          i = i - 2
      }
    }
  }
  return s.join('')
}
// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  string = string.split('')
  for(let i = 0; i < string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      string[i] = " " + string[i]
    }
  }
  return string.join('')
}

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  for(let i = 0; i < A.length; i++){
    let count = 0
    for(let j = 0; j < A.length; j++){
      if(A[j] === A[i]){
        count++
      }
      if(j === A.length-1 && count % 2 !== 0){
        return A[i]
      }
    }
  }
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  numbers = numbers.split(' ').sort(function(a, b){return a - b})
  let tempArray = [numbers[numbers.length-1], numbers[0]]
  return tempArray.join(' ')
}

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str){
  str = str.split('')
  for(let i = str.length -1; i >= 0;  i--){
    if(str[i] === "-" || str[i] === "_"){
      str[i+1] = str[i+1].toUpperCase()
      str.splice(i, 1)
    }
  }
  return str.join('')
}

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {
  string = string.split('')
  let letterInstances = {}
  for(let i = 0; i < string.length; i++){
    if(string[i] in letterInstances){
      letterInstances[string[i]]++
    } else{
      letterInstances[string[i]] = 1
    }
  }
  return letterInstances
}



// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.


function solve(s){
  s = s.split('')
  const glossary = ["a", "e", "i", "o", "u"]
  let largest = 0
  let tempLargest = 0
  for(let i = 0; i < s.length; i++ ){
    if(glossary.includes(s[i])){
      tempLargest++
    } else{
      if(tempLargest > largest){
        largest = tempLargest
      }
      tempLargest = 0
    }
  }
  return largest
}


// Your task is to convert a given number into a string with commas added for easier readability. The number should be rounded to 3 decimal places and the commas should be added at intervals of three digits before the decimal point. There does not need to be a comma at the end of the number.

// You will receive both positive and negative numbers.

function commas(num){
  let isInt = true
  let decimalArray = []
  let wholeNumArray = []
  let decimalFound = false
  let counter = 1
  if(!Number.isInteger(num)){
    num = num.toFixed(3)
    isInt = false
  }
  num = num.toString().split('')
  if(isInt === false){
    for(let i = 0; i < num.length; i++){
      if(num[i] === "."){
        decimalFound = true
      }
      if(decimalFound === true){
        decimalArray.push(num[i])
      } else{
        wholeNumArray.push(num[i])
      }
    }
  } else{
    for(let i = 0; i < num.length; i++){
      wholeNumArray.push(num[i])
    }
  }
  for(let i = wholeNumArray.length - 1; i > 0; i--){
    if(wholeNumArray[i - 1] !== "-" && counter % 3 === 0){
      wholeNumArray.splice(i, 0, ",")
      counter++
    } else{
      counter++
    }
  }
  wholeNumArray = wholeNumArray.join('')
  if(decimalArray[decimalArray.length - 1] === "0"){
    decimalArray.pop()
    if(decimalArray[decimalArray.length - 1] === "0"){
    decimalArray.pop()
    }
  }
  decimalArray = decimalArray.join('')
  let answer = wholeNumArray.concat(decimalArray)
  return answer
}



// Retirement home viewing is on a knife edge - it really has been a bad day on Countdown…!! (https://en.wikipedia.org/wiki/Countdown_(game_show))

// Nick Hewer has lost his glasses and someone is playing tricks on Rachel Riley.

// Rachel finds her vowels (A, E, I, O and U), consonants and numbers have all been muddled up into different piles (2D arrays of both strings and numbers) and some joker has thrown in some lower case letters to make matters worse.

// As the show assistant, your challenge is to help Rachel sort her vowels into one pile (array), and her consonants into another pile (array).

// In doing so you will need to change any lower-case letters to upper-case (as they only use upper case letters on the show…) and you will need to remove any numbers as Rachel has enough already. You do not need to return the numbers in a separate array - just remove them.

// You should end up with two neat piles like below:

// EG: if there were the following cards in the pile (2D array): [["a","B","H"], [0,"d","s"], [1,"W","J"]]

// you would need to return: [["A"], ["B","H","D","S","W","J"]]

// Consisting of: Vowels: ["A"] Consonants: ["B","H","D","S","W","J"]

// Good luck!!

function sortLetters(n) {
  const vowelGlossary = ["A", "E", "I", "O", "U"]
  let vowels = []
  let consonants = []
  let nums = []
  for(let i = 0; i < n.length; i++){
    for(let j = 0; j < n[i].length; j++){
      if(typeof(n[i][j]) === "number"){
        nums.push(n[i][j])
      } else {
        n[i][j] = n[i][j].toUpperCase()
        if(vowelGlossary.includes(n[i][j])){
          vowels.push(n[i][j])
        } else{
          consonants.push(n[i][j])
        }
      }
    }
  }
  let answer = [vowels, consonants]
  return answer
}



// Check if given chord is minor or major.

// Rules:

// Basic minor/major chord have three elements.

// Chord is minor when interval between first and second element equals 3 and between second and third -> 4.

// Chord is major when interval between first and second element equals 4 and between second and third -> 3.

// In minor/major chord interval between first and third element equals... 7.

// There is a preloaded list of the 12 notes of a chromatic scale built on C. This means that there are (almost) all allowed note' s names in music.

// notes = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#', 'Gb'], 'G', ['G#', 'Ab'], 'A', ['A#', 'Bb'], 'B']

// Note that e. g. 'C#' - 'C' = 1, 'C' - 'C#' = 1, 'Db' - 'C' = 1 and 'B' - 'C' = 1.

// Input: String of notes separated by whitespace, e. g. 'A C# E'

// Output: String message: 'Minor', 'Major' or 'Not a chord'.

function minorOrMajor(chord){
    let myArray = chord.split(' ')
    for(let i = 0; i < 12; i++){
      if(myArray[i] === "C"){
        myArray[i] = 0
      } else if(myArray[i] === "C#" || myArray[i] === "Db"){
        myArray[i] = 1
      } else if(myArray[i] === "D"){
        myArray[i] = 2
      } else if(myArray[i] === "D#" || myArray[i] === "Eb"){
        myArray[i] = 3
      } else if(myArray[i] === "E"){
        myArray[i] = 4
      } else if(myArray[i] === "F"){
        myArray[i] = 5
      } else if(myArray[i] === "F#" || myArray[i] === "Gb"){
        myArray[i] = 6
      } else if(myArray[i] === "G"){
        myArray[i] = 7
      } else if(myArray[i] === "G#" || myArray[i] === "Ab"){
        myArray[i] = 8
      } else if(myArray[i] === "A"){
        myArray[i] = 9
      } else if(myArray[i] === "A#" || myArray[i] === "Bb"){
        myArray[i] = 10
      } else if(myArray[i] === "B"){
        myArray[i] = 11
      }
    }
    if(myArray.length !== 3){
      return "Not a chord"
    } else if((myArray[1] - myArray[0] === 3 || myArray[1] - myArray[0] === -9 ) && (myArray[2] - myArray[1] === 4 || myArray[2] - myArray[1] === -8) && (myArray[2] - myArray[0] === 7 || myArray[2] - myArray[0] === -5)){
      return "Minor"
    } else if((myArray[1] - myArray[0] === 4 || myArray[1] - myArray[0] === -8 ) && (myArray[2] - myArray[1] === 3 || myArray[2] - myArray[1] === -9) && (myArray[2] - myArray[0] === 7 || myArray[2] - myArray[0] === -5)){
      return "Major"
    } else{
      return "Not a chord"
    }
  }

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray(arr) {
    if (arr.length === 0) {
        return null
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || typeof (arr[i]) !== "number" || arr[i] > 9) {
            return null
        }
    }
    for (let i = arr.length - 1; i > -1; i--) {
        arr[i] = arr[i] + 1
        if (arr[i] > 9) {
            arr[i] = 0
        } else {
            i = -1
        }
    }
    if (arr[0] === 0) {
        arr.unshift(1)
    }
    return arr
}


// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr(n, s) {
    let tempArr = []
    for (let i = 0; i < n; i++) {
        tempArr.push(s)
    }
    return tempArr.join('')
}