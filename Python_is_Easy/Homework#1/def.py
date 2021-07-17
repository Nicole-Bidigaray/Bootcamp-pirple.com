def addOne(number):
       number += 1
       return number
one = addOne(0)
two = addOne(one)
print(two)

def hello():
     print("I am a beginner")
hello()
hello()

def sumA(count):
     a = count+1
     return a
a = sumA(0)
print(a)

def printmessage(message, ntimes = 1):
    print(message * ntimes)
printmessage("Hello")
printmessage("Hello", 5)

num = 1
def func():
     num = 4
     print(num)
func()
print(num)