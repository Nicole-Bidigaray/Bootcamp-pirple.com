# File = open("Filename", "r") # "r", "w", "a", "r+" -> read and write
# File.close()

VacationSpots = ["London", "Paris", "New York", "Utah", "Iceland"]

VacationFile = open("VacationPlaces", "w")

for Spots in VacationSpots:
    VacationFile.write(Spots + "\n")

VacationFile.close()

VacationFile = open("VacationPlaces", "r")

FirstLine = VacationFile.readline()
print(FirstLine)
SecondLine = VacationFile.readline()
print(SecondLine)
for line in VacationFile:
    print(line, end="")

# TheWholeFile = VacationFile.read()
#
# print(TheWholeFile)

VacationFile.close()

FinalSpot = "Thailand\n"

VacationFile = open("VacationPlaces", "a")
VacationFile.write(FinalSpot)
VacationFile.close()

VacationFile = open("VacationPlaces", "r")
for line in VacationFile:
    print(line, end="")

VacationFile.close()

for i in range(5):
    with open("VacationPlaces", "r") as VacationFile:
        for line in VacationFile:
            print(line)

VacationFile.read()