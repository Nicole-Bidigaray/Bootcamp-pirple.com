# / /  0
#----- 1
# / /  2
#----- 3
# / /  4
#01234

def drawField(field):
    for row in range(5): #0,1,2,3,4
                         #0,.,1,.,2
        if row % 2 == 0: #0,2,4
            praticalRow = int(row/2) #0,1,2
            for column in range(5): #0,1,2,3,4
                                    #0,.,1,.,2
                if column % 2 == 0: #0,2,4
                    praticalColumn = int(column/2) #0,1,2
                    if column != 4:
                        print(field[praticalColumn][praticalRow], end="")
                    else:
                        print(field[praticalColumn][praticalRow])
                else:
                    print("|", end="")
        else:
            print("-----")
Player = 1
currentField = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
drawField(currentField)
while(True):
    print("Players turn: ", Player)
    MoveRow = int(input("Please enter the row\n"))
    MoveColumn = int(input("Please enter the column\n"))
    if Player == 1:
        #make move for player 1
        if currentField[MoveColumn][MoveRow] == " ":
            currentField[MoveColumn][MoveRow] = "X"
            Player = 2
    else:
        #make move for player 2
        if currentField[MoveColumn][MoveRow] == " ":
            currentField[MoveColumn][MoveRow] = "O"
            Player = 1
    drawField(currentField)

