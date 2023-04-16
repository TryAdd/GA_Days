# Part 1
# Create a BankAccount class that meets the following criteria:
# Bank accounts should accept a type property - (like “savings” or “checking”).
# Each account should keep track of its current balance which should start at 0.
# Each account should have access to a deposit and a withdraw methods.
# withdraw should return the new account balance after withdrawing
# Deposit should return the new account balance after depositing
# Once you’ve defined the class, create a checking account and a savings account. Withdraw money from the savings
# account and deposit that amount into the checking account.
# Part 2
# Prevent withdrawing money if the balance will go negative.
# Part 3
# Start each account with an additional overdraft_fees property that starts at 0. If a call to withdraw ends
# with the balance below zero then overdraft_fees should be incremented by 20. You should also prevent the user
# from going below a balance of -100, including the overdraft fees.
# Your program can be tested with these sample statements.


class BankAccount():
    def __init__(self, type, balance = 0):
        self.type = type
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self.balance
    
    def withdraw(self, amount):
        if self.balance < amount:
           return f'the amount is less than the current balance {self.balance}'  
        else:
            self.balance -= amount
            
        # self.balance -= amount
        return f"Withdraw: {self.balance}BD"
    
    
    def __str__(self):
        return f" This is the account: {self.type} Have: {self.balance}BD"


AhmedAcc = BankAccount("checking", 20)
print(AhmedAcc)

AhmedAcc.deposit(0)
print(AhmedAcc)

print(AhmedAcc.withdraw(6))
print(AhmedAcc)

