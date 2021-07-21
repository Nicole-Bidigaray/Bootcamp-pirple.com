from random import shuffle

def createDeck():
    Deck = []

    faceValues = ["A", "J", "Q", "K"]
    for i in range(4):
        for card in range(2,11):
            Deck.append(str(card))

        for card in faceValues:
            Deck.append(card)

    shuffle(Deck)
    return Deck

class Player:
    def __init__(self, hand = [], money = 100):
        self.hand = hand
        self.score = self.setScore()
        self.money = money
        self.bet = 0

    def __str__(self): # print(Player)
        currentHand = "" # self.hand = ["A", "10"]
                         # "A 10"
        for card in self.hand:
            currentHand += str(card) + " "

        finalStatus = currentHand + "score: " + str(self.score)
        # "A 10 2 4 score: 17"
        return finalStatus

    def setScore(self):
        self.score = 0 # "3 4 " -> "3 4 10"
                        # 7 -> 17
        faceCardsDict = {"A":11, "J":10, "Q":10, "K":10,
                         "2":2, "3":3, "4":4, "5":5, "6":6,
                         "7":7, "8":8, "9":9, "10":10}

        aceCounter = 0
        for card in self.hand: # "10"
            self.score += faceCardsDict[card]
            if card == "A":
                aceCounter += 1
            if self.score > 21 and aceCounter != 0:
                self.score -= 10
                aceCounter -= 1

        return self.score

    def hit(self, card):
        self.hand.append(card)
        self.score = self.setScore()

    def play(self, newHand):
        self.hand = newHand
        self.score = self.setScore()

    def betMoney(self, amount):
        self.money -= amount # Money 100; bet(20)
        self.bet += amount  # Money 100 -> 80 bet 0 -> 20

    def win(self, result):
        if result == True:
            if self.score == 21 and len(self.hand) == 2:
                self.money += 2.5 * self.bet
            else:
                self.money += 2 * self.bet

            self.bet = 0
        else:
            self.bet = 0

    def draw(self):
        self.money += self.bet
        self.bet = 0

    def hasBlackjack(self):
        if self.score == 21 and len(self.hand) == 2:
            return True
        else:
            False

def printHouse(House):
    for card in range(len(House.hand)): # len(House.hand) = 5
                                        # 0,1,2,3,4
        if card == 0:
            print("X", end = " ")
        elif card == len(House.hand) - 1:
            print(House.hand[card])
        else:
            print(House.hand[card], end = " ")

cardDeck = createDeck()
print(cardDeck)
firstHand = [cardDeck.pop(), cardDeck.pop()]
secondHand = [cardDeck.pop(), cardDeck.pop()]
Player1 = Player(firstHand)
House = Player(secondHand)
cardDeck = createDeck()

while(True):
    if len(cardDeck) < 20:
        cardDeck = createDeck()
    firstHand = [cardDeck.pop(), cardDeck.pop()]
    secondHand = [cardDeck.pop(), cardDeck.pop()]
    Player1.play(firstHand)
    House.play(secondHand)

    Bet = int(input("Please enter your bet: "))

    Player1.betMoney(Bet)
    printHouse(House)
    print(Player1)

    if Player1.hasBlackjack():
        if House.hasBlackjack():
            Player1.draw()
        else:
            Player1.win(True)
    else:
        while(Player1.score < 21):
            action = input("Do you want another card?(y/n): ")
            if action == "y":
                Player1.hit(cardDeck.pop())
                print(Player1)
                printHouse(House)
            else:
                break
        while(House.score < 16):
            print(House)
            House.hit(cardDeck.pop())

        if Player1.score > 21:
            if House.score > 21:
                Player1.draw()
            else:
                Player1.win(False)
        elif Player1.score > House.score:
            Player1.win(True)
        elif Player1.score == House.score:
            Player1.draw()
        else:
            if House.score > 21:
                Player1.win(True)
            else:
                Player1.win(False)

    print(Player1.money)
    print(House)