# Sets = {"Element1", "Element2", "Element1", "Element4"}
# print(Sets)
# if "Element1" in Sets:
#     print("Yes")

CountryList = []
for i in range(5):
    Country = input("Plese Enter Your Country: ")
    CountryList.append(Country)
#
# CountrySet = set(CountryList)
#
# print(CountryList)
# print(CountrySet)
#
# if "Brazil" in CountrySet:
#     print("attended")

# Dictionary = {"Key": "Value", "Key2": "Value2", "Key3": "Value3"}

CountryDictionary = {}

for Country in CountryList: # ['USA', 'France', 'India', 'Brazil', 'France']
    if Country in CountryDictionary: #{}
        CountryDictionary[Country] += 1
    else:
        CountryDictionary[Country] = 1 #{Country: 1}

print(CountryDictionary)