list = [1,2]
for i in list:
    print(i)

age = input("Enter your age: ")
age += "6"
print(age)

# myFile = open("VacationPlaces.txt", "w")
# myFile.write("hello world")

myFile = open("myFile","r")
Line = myFile.readline()
Line = myFile.readline()
print(Line)