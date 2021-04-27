# Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

# the array can't be empty
# only non-negative, single digit integers are allowed
# Return nil (or your language's equivalent) for invalid inputs.

# Examples
# For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

# [4, 3, 2, 5] would return [4, 3, 2, 6]

def up_array(arr):
    if len(arr) == 0:
        return None
    for i in arr:
        if i < 0 or type(i) != int or i > 9:
            return None
    x = len(arr) - 1
    while x > -1:
        arr[x] = arr[x] +1
        if arr[x] > 9:
            arr[x] = 0
            x -= 1
        else:
            x = -1
    if arr[0] == 0:
        arr.insert(0, 1)
    return arr




# // Check if given chord is minor or major.

# // Rules:

# // Basic minor/major chord have three elements.

# // Chord is minor when interval between first and second element equals 3 and between second and third -> 4.

# // Chord is major when interval between first and second element equals 4 and between second and third -> 3.

# // In minor/major chord interval between first and third element equals... 7.

# // There is a preloaded list of the 12 notes of a chromatic scale built on C. This means that there are (almost) all allowed note' s names in music.

# // notes = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#', 'Gb'], 'G', ['G#', 'Ab'], 'A', ['A#', 'Bb'], 'B']

# // Note that e. g. 'C#' - 'C' = 1, 'C' - 'C#' = 1, 'Db' - 'C' = 1 and 'B' - 'C' = 1.

# // Input: String of notes separated by whitespace, e. g. 'A C# E'

# // Output: String message: 'Minor', 'Major' or 'Not a chord'.

def minor_or_major(chord):
    myList = chord.split()
    glossary = ["A", "A#", "Bb", "B", "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab"]
    print(myList)
    i = 0
    for note in myList:
        if note not in glossary:
            return "Not a chord"
        if note == "C":
            myList[i] = 0
        elif note == "C#" or note == "Db":
            myList[i] = 1
        elif note == "D":
            myList[i] = 2
        elif note == "D#" or note == "Eb":
            myList[i] = 3
        elif note == "E":
            myList[i] = 4
        elif note == "F":
            myList[i] = 5
        elif note == "F#" or note == "Gb":
            myList[i] = 6
        elif note == "G":
            myList[i] = 7
        elif note == "G#" or note == "Ab":
            myList[i] = 8
        elif note == "A":
            myList[i] = 9
        elif note == "A#" or note == "Bb":
            myList[i] = 10
        elif note == "B":
            myList[i] = 11
        i += 1
    if len(myList) != 3:
        return "Not a chord"
    elif (myList[1] - myList[0] == 3 or myList[1] - myList[0] == -9 ) and (myList[2] - myList[1] == 4 or myList[2] - myList[1] == -8) and (myList[2] - myList[0] == 7 or myList[2] - myList[0] == -5):
        return "Minor"
    elif (myList[1] - myList[0] == 4 or myList[1] - myList[0] == -8 ) and (myList[2] - myList[1] == 3 or myList[2] - myList[1] == -9) and (myList[2] - myList[0] == 7 or myList[2] - myList[0] == -5):
        return "Major"
    else:
        return "Not a chord"


# Write a function called repeatStr which repeats the given string string exactly n times.

def repeat_str(repeat, string):
    tempList = []
    for i in range(repeat):
        tempList.append(string)
    return "".join(tempList)