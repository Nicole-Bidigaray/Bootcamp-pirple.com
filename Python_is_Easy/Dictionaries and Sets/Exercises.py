nums = set([7,7,1,3,4,5,5,2])
print(len(nums))

nums = set([1,2,3,4,5,4,3,2,1])
print(nums)

dict = {}
dict[1] = 2
dict['1'] = 4
dict[1] += 2
count = 0

for key in dict:
    count += dict[key]

print(count)

s={"1","2","3","4","5"}

if "3" in s:
    print("3")