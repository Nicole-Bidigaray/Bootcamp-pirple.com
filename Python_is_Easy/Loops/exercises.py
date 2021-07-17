Word = "Hello"
Letters = []
for w in Word:
    Letters.append(w)
print(Letters)

# i = 1
# while True:
#     if i%3 == 0:
#         break
#     print(i)
#     i += 1

# for i in range(2.0):
#     print(i)

counter = 1
while (counter <= 10):
    print(counter)
    counter = counter + 1

X = "abcd"
for i in range(len(X)):
    print(i)

Length = 3

for pos in range(1,3):
    print("c" * pos)

ToPrint = "a"
for pos in range(1, Length + 1):
    print(ToPrint * pos)

for pos in range(Length, 0, -1):
    print(ToPrint * pos)

for row in range(5):
    if row%2 == 0:
        print(row)

x = 2
for i in range(x):
      for j in range(x):
            a = x - j + i
            print(a)

f = 1
A = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
for i in range(0, 3):
     f = f * i
     for j in range(0, 3):
         A[i][j] = f
print(A)