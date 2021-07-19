import random as r

# random.seed(1)
randInt = r.randint(0, 10) # start <= N <= end
print(randInt)

randFloat = r.random() # 0.0 <= N < 1.0
print(randFloat)

randUniform = r.uniform(1, 1100) # start <= N <= end
print(randUniform)