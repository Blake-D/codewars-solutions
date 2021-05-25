# Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

# domain_name("http://github.com/carbonfive/raygun") == "github" 
# domain_name("http://www.zombie-bites.com") == "zombie-bites"
# domain_name("https://www.cnet.com") == "cnet"

def domain_name(url):
    return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0]

# You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

# Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

# likes([]) # must be "no one likes this"
# likes(["Peter"]) # must be "Peter likes this"
# likes(["Jacob", "Alex"]) # must be "Jacob and Alex like this"
# likes(["Max", "John", "Mark"]) # must be "Max, John and Mark like this"
# likes(["Alex", "Jacob", "Mark", "Max"]) # must be "Alex, Jacob and 2 others like this"
# For 4 or more names, the number in and 2 others simply increases.

def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return names[0] + " likes this"
    elif len(names) == 2:
        return names[0] + " and " + names[1] + " like this"
    elif len(names) == 3:
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    elif len(names) > 3:
        num = f'{len(names) - 2}'
        return names[0] + ", " + names[1] + " and " + num + " others like this"

# Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

# Examples
# 420 should return ["4", "42", "420"]
# 2017 should return ["2", "20", "201", "2017"]
# 2010 should return ["2", "20", "201", "2010"]
# 4020 should return ["4", "40", "402", "4020"]
# 80200 should return ["8", "80", "802", "8020", "80200"]
# PS: The input is guaranteed to be an integer in the range [0, 1000000]

def create_array_of_tiers(n):
    n = list(f'{n}')
    answer_list = []
    temp_str = ""
    for char in n:
        temp_str = temp_str + char
        answer_list.append(temp_str)
    return answer_list

# Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

def reverse_alternate(string):
    string = string.strip().split(" ")
    i = 0
    while i < len(string):
        if len(string[i]) == 0:
            string.remove(string[i])
        else:
            i += 1
    i = 1
    while i < len(string):
        string[i] = list(string[i])
        string[i].reverse()
        string[i] = "".join(string[i])
        i += 2
    return " ".join(string)

# Given an array of integers, find the one that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

def find_it(seq):
    for i in seq:
        occurrences = seq.count(i)
        if occurrences % 2 != 0:
            return i


# Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

# Examples
# "the-stealth-warrior" gets converted to "theStealthWarrior"
# "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

def to_camel_case(text):
    text = list(text)
    i = len(text) - 1
    while i >= 0:
        if text[i] == "-" or text[i] == "_":
            text[i+1] = text[i+1].upper()
            text.pop(i)
        i -= 1
    return("".join(text))

# The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

def solve(s):
    vowels = "aeiou"
    largest = 0
    temp_largest = 0
    for i in s:
        if i in vowels:
            temp_largest += 1
        else:
            if temp_largest > largest:
                largest = temp_largest
            temp_largest = 0
    return largest


# Your family runs a shop and have just brought a Scrolling Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get some more business.

# The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates movement.

# You're father is far too busy with the business to worry about such details, so, naturally, he's making you come up with the text strings.

# Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.

def rotate(str_):
    temp_list = list(str_)
    answer_list = []
    my_string = ""
    for i in range(len(temp_list)):
        temp_list.append(temp_list[0])
        temp_list.pop(0)
        my_string = "".join(temp_list)
        answer_list.append(my_string)
    return answer_list

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