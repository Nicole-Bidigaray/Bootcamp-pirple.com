"""
pirple.com/python
Homework Assignment #3: "If" Statements
If conditionals.
Create a function that accepts 3 parameters and checks for equality between any two of them.
Your function should return True if 2 or more of the parameters are equal,
and false is none of them are equal to any of the others.
Bonus:
Modify your function so that strings can be compared to integers if they are equivalent.
For example, if the following values are passed to your function:
6,5,"5"
You should modify it so that it returns true instead of false.
Hint: there's a built in Python function called "int" that will help you convert strings to Integers.
"""

def compare(a, b, c):
    if int(a) == int(b) or int(a) == int(c) or int(b) == int(c):
        return True
    else:
        return False

# Check the compare function
print(compare(1,1,2)) # True
print(compare(1,2,2)) # True
print(compare(1,2,1)) # True
print(compare(1,2,3)) # False
# Bonus
print(compare(6,5,"5")) # True

li=[1,2,3,4,3,2,1]
print(li[-3])

li=[1,2,3,4,3,2,1]
print(li[3:4])

li=[["a","b"]]
print(li[0][0])

li=[["john","doe"]]
print(li[-1][-1])