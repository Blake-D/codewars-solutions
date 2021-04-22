# Write a function called repeatStr which repeats the given string string exactly n times.

def repeat_str(repeat, string):
    tempList = []
    for i in range(repeat):
        tempList.append(string)
    return "".join(tempList)