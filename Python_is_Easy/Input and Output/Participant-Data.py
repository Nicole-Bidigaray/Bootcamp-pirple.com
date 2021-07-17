# PartipantNumber = 5
# ParticipantData = []
# registeredParticipants = 0
#
# outputFile = open("ParticipantData.txt", "w")
#
# while (registeredParticipants < PartipantNumber):
#     tempPartData = [] #name, country of origin, age
#     name = input("Please enter your name: ")
#     tempPartData.append(name)
#     country = input("Please enter your country of origin: ")
#     tempPartData.append(country)
#     age = int(input("Please enter your age: "))
#     tempPartData.append(age) #[name, country, age]
#     print(tempPartData)
#     ParticipantData.append(tempPartData)
#     print(ParticipantData)
#     #[tempPartData] = [[name, country, age]]
#
#     registeredParticipants += 1
#
#
# for participant in ParticipantData:
#     for data in participant:
#         outputFile.write(str(data)) #str(25) -> "25"
#         outputFile.write(" ")#Max USA 21
#     outputFile.write("\n")
#
#
# outputFile.close()

inputFile = open("ParticipantData.txt", "r")

inputList = []

for line in inputFile:
    tempParticipant = line.strip("\n").split()
    # print(tempParticipant)
    inputList.append(tempParticipant)
    # print(inputList)

    #"Max USA 21 \n".strip("\n") -> "Max USA 21 "
    #"Max USA 21 ".split() -> ["Max", "USA", "21"]

Age = {}
print(inputList)
for part in inputList:
    tempAge = int(part[-1]) #int('21') -> 21
    if part[-1] in Age:
        Age[tempAge] += 1
    else:
        Age[tempAge] = 1

print(Age)

Countries = {}
for part in inputList:
    tempCountry = part[1] #int('21') -> 21
    if tempCountry in Countries:
        Countries[tempCountry] += 1
    else:
        Countries[tempCountry] = 1

print("Countries that attended:", Countries)

Oldest = 0
Youngest = 100
mostOcurringAge = 0
counter = 0

for tempAge in Age:
    if tempAge > Oldest:
        Oldest = tempAge
    if tempAge < Youngest:
        Youngest = tempAge
    if Age[tempAge] >= counter:
        counter = Age[tempAge]
        mostOcurringAge = tempAge

print(Oldest)
print(Youngest)
print("Most ocurring Age is:", mostOcurringAge, "with", counter, "participants")

inputFile.close()

