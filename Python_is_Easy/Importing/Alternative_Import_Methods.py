import random as r
# from random import randint
# from random import random, uniform
# from random import *

# random.seed(1)
# randInt = r.randint(0, 10) # start <= N <= end
# print(randInt)
#
# randFloat = r.random() # 0.0 <= N < 1.0
# print(randFloat)
#
# randUniform = r.uniform(1, 1100) # start <= N <= end
# print(randUniform)

simpleList = [1, 3, 5, 7, 11]
pickElement = r.choice(simpleList)
print(pickElement)
print(simpleList)
r.shuffle(simpleList)
print(simpleList)