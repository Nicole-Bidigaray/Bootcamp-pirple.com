Word = "Hello"

Letters = []

for w in Word:
    print(w)
    if w == "e":
        print("What a funny letter")
        
    Letters.append(w)
    # ["H","e","l","l","o"]
    
print(Letters)

Numbers = [1,2,3,4,5]
# 1%2 = 1
# 2%2 = 0
# 3%2 = 1
for n in Numbers:
    if n%2 == 1:
        print(n)
        
Numbers = []

for num in range(1,12,2):
    Numbers.append(num)
    print(num)
    
print(Numbers)