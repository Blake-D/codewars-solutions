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