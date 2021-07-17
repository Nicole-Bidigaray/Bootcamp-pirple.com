# class Cat:
#   def __init__(self,name="Cat"):
#     self.name = name
#     self.breed = breed
#
# myCat = Cat("Mia")


# class Person:
#   def __init__(self,name="Person",age=18):
#     self.name = name
#     self.age = age
#
#   def DefinePersonAge(self,PersonAge):
#     self.age = PersonAge
#
# newPerson = Person("George",21)
# newPerson.DefinePersonAge(18)
# print(newPerson.name,newPerson.age)

class Dog:
  def __init__(self,name="Jack"):
    self.name = name

  def getName(self):
    return self.name

  def setName(self,Name):
    self.name = Name

myDog = Dog("Rolfie")
firstName = myDog.name
myDog.setName("Bobby")
secondName = myDog.getName()

print(firstName)
print(secondName)


class Match:

  def __init__(self,points=0):
    self.points = points

  def ScorePoints(self):
    self.points += 1

newMatch = Match(1)
newMatch.ScorePoints()
newMatch.ScorePoints()
print(newMatch.points)


class player:
  def __init__(self,playful=True):
    self.playful = playful

  def wantsToPlay(self):
    if self.playful == True:
      print("The player wants to play")
    else:
      print("The player doesn't want to play")

newPlayer = player(False)
newPlayer.wantsToPlay()


# class Person:
#
#     def __init__(self, firstname, lastname):
#         self.firstname = firstname
#         self.lastname = lastname
#
# class Employee(Person):
#
#     def __init__(self, firstName, lastName, staffnumber):
#         Person.__init__(self,firstName, firstName)
#         self.staffnumber = staffnumber
#
#
# class Pet:
#
#     def __init__(self, age, petID, name="Pet", owner="None"):
#         self.age = age
#         self.petID = petID
#         self.name = name
#         self.owner = owner


class Vehicle:

    def __init__(self, type, id):
        self.type = type
        self.id = id

    def __str__(self):
      return ("The vehicle is a " + self.type)

class Car(Vehicle):

    def __init__(self, carID, color, type="car"):
        Vehicle.__init__(self, type, carID)
        self.color = color

    def __str__(self):
      return ("The vehicle is " + self.color)

newCar = Car("abc1234","red")
print(newCar)


class Person:

  def __init__(self,firstName="firstName",lastName="lastName"):
    self.firstName = firstName
    self.lastName = lastName

newPerson = Person()


class Pet:

  def __init__(self,name):
    self.name = name

  def getName(self):
    return self.name

  def setName(self,x):
    self.name = x

myPet = Pet("Freddie")
print(myPet.name)
yourPet = Pet("Jack")
yourPet.setName("Bob")
print(myPet.getName())