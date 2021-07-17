# Var = input("Message to user")

# Name = input("Please enter your name: ")
# print(Name)
#
# Age = int(input("Please enter your age: "))
# print(Age + 1)

Scores = []

for i in range(5):
    currentScore = float(input("Please enter the score " + str(i + 1) + ": "))
    Scores.append(currentScore)
    print("The score you entered was:\n" + str(currentScore))

print(Scores)