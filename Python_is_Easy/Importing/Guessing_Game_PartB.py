from random import random
from time import perf_counter

randVal = random()
# print(randVal)

# time.clock() -> timevalue
# time.clock() -> timevalue2

upper = 1.0
lower = 0.0
# guess = 0.5 -> Too Low _> lower 0.5
# guess = 0.9 -> Too High -> uper 0.9
# guess = 0.5

startTime = perf_counter()

while(True):
    guess = (upper + lower) / 2  # 0.5 + 0.75 -> 1.25/2 -> 0.675
    if guess == randVal:
        break
    elif guess < randVal:
        lower = guess # lower = 0.5; uppper = 1.0
    else:
        upper = guess # upper = 0.75
endTime = perf_counter()
print(guess)
print("It took us: ", endTime - startTime, "seconds")