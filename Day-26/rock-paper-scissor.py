import random

choices = ["rock","paper","scissor"]

userChoice = input("Choose rock paper scissor: ")
print(userChoice)


Computer = random.choice(choices)
print(Computer)

#? Rock 
if userChoice == "rock" and Computer == "scissor":
    print("You WIN!!!!")
elif userChoice == "rock" and Computer == "paper":
    print("You lose :(")
elif userChoice == "rock" and Computer == "rock":
    print("Its a Tie :)")


#? scissor
elif userChoice == "scissor" and Computer == "scissor":
    print("Its a Tie :)")
elif userChoice == "scissor" and Computer == "paper":
    print("You WIN!!!!")
elif userChoice == "scissor" and Computer == "rock":
    print("You lose :(")

#? paper
elif userChoice == "paper" and Computer == "scissor":
    print("You lose :(")
elif userChoice == "paper" and Computer == "paper":
    print("Its a Tie :)")
elif userChoice == "paper" and Computer == "rock":
    print("You WIN!!!!")

else:
    print("Wrong Input")


    