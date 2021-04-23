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