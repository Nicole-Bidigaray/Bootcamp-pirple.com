from random import randint

# randint(a,b) -> a <= N <= b

randVal = randint(0, 100)

while(True): #while(True=True):
    guess = int(input("Please enter your guess: "))
    if guess == randVal:
        break
    elif guess < randVal:
        print("Your guess was too low")
    else:
        print("Too high")

print("You guessed correctly with: ", guess)
