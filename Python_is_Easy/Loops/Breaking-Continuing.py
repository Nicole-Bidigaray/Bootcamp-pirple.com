Participants = ["Jen", "Alex", "Tina", "Joe", "Ben"]

position = 1

# for name in Participants:
#     if name == "Tina":
#         print("About to break")
#         break
#     print("About to increment")
#     position = position + 1
#
# print(position)

# Participants[0]

# for currentIndex in range(len(Participants)):
#     print(currentIndex)
#     if Participants[currentIndex] == "Joe":
#         print("Have Breaked")
#         break
#     print("Not Breaked")
#
# print(currentIndex+1)

for number in range(10):
    if number%3 == 0:
        print(number)
        print("Divisible by 3")
        continue
    print(number)
    print("Not Divisible by 3")