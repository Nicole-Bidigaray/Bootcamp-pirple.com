click = True
Like = 0                      
if click:
    Like = Like + 1           
print(Like)

Temperature = 20             
Thermo = 15                  
if Temperature < 15:         
    Thermo = Thermo + 5      
print(Thermo)

Time = "Day"               
Sleepy = False             
Pajamas = "Off"            
if Time == "Night" and Sleepy == True:   
    Pajamas = "On"                      
print(Pajamas) 

def max(a, b):
    if a > b:
          print('a is the max')
    else:
      print('b is the max')

max(1,2)

if (10<0) and (0 <-10):
    print("A")
else:
    print("B")

a = "b"
if True or True:
     a = "a"
print(a * 2)