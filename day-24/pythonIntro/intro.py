# to check a4a python sh3'al aw la

print("Hi")


"""
dh 7g tktb
comment azyd
mn 96r
"""

# vairables
my_variable = 10 
print(type(my_variable))

# -------------------------------------------------------------------------------------
# data types

# None
my_bank_account = None
print(type(my_bank_account))

if (my_bank_account == True):
    print("This is True!!!")
else:
    print("This is not true :(")


# the none is la 97 wla 3'l6 tgdr tchof 7ta lo bdlt altrue fe al if statment 

# -------------------------------------------------------------------------------------
# Boolean
# is ya True ya False

is_operting = True
is_broken = False

print(is_operting)
print(is_broken)

print(type(is_operting))
print(type(is_broken))

# -------------------------------------------------------------------------------------
# Numebrs

int = 123
print(type(int))


float = 21.02
print(type(float))


pi = 3.12322122
print(type(pi))

nagative = -52
print(type(nagative))

my_complex = 3 + 4j
print(type(my_complex))


# -------------------------------------------------------------------------------------
# String

greeting = "Hello world!"
print(type(greeting))

# String method

# split()
x = greeting.split(" ")
print(x)

# index
y = greeting.index("w")
print(y)

# length
z = len(greeting)
print(z)

# upper
a = greeting.upper()
print(a)

# lower
b = greeting.lower()
print(b)

# replace alklam
w = greeting.replace("world", "people")



# -------------------------------------------------------------------------------------
# in operator
hellou = "Hello Me!"
m = "Hello" in hellou
print(m)


# -------------------------------------------------------------------------------------
# `${}` in JS
# {} in Python

state = "Washinton State"
year = 1889
n = 42


# lazm f 3shan t9er 3dl w tjeb alashya2 
my_message = f"{state} was the {n}nd state to join the union in {year}"
print(my_message)


# -------------------------------------------------------------------------------------
# Operator
# Arithmetic Operator

# Add
add = 2 + 2
print(add)

# Sub
sub = 2 - 2
print(sub)

# Multiply
mul = 2 * 9 
print(mul)

# div
div = 2/2
print(div)

# 3shan 3'9bn 3nh t6l3 bdon fwa9l 76 double // 


# -------------------------------------------------------------------------------------

# Exponential
exp = 2 ** 3
print(exp)


# -------------------------------------------------------------------------------------
# Comparison Operator

# == // for Equality
# != // not equal to
# > // greater than 
# >= // greater than or equal to
# < less than
# <= less than or equal


# Logical Oprerator
# or // for or
# and // for and
# not // for not

# control flow
# if and Else statment

a = 330 
b = 200

if b > a:
    print("b is greater than a")

elif b < a:
    print("a is greator than b")

else:
    print("a and b are equal")


vip = True
food_place = "Busy"

if(food_place == "FUll" and not vip):
    print("Sorry, We have no room tonight")

elif(food_place == "Busy" and not vip):
    print("Please wait 10 min for a table")

else:
    print("Welcome! come sit down there ;)")


# -------------------------------------------------------------------------------------

# Tenary Experssion
age = 30
age_test = print('You are an old man')if age >= 40 else print("You r not an old man ylb6a")


# -------------------------------------------------------------------------------------
# Range
s = "My code rules"[3]
print(s)

d = "My code rules"[-1]
print(d)

# [start: End: Step]
r = "My code rules"[3:7]
print(r)

t = "My code rules"[3:7:2]
print(t)

q = "My code rules"[:2]
print(q)

t = "My code rules"[3:]
print(t)

y = "My code rules"[::-1]
print(y)



# -------------------------------------------------------------------------------------

# loops
# for in

for num in range(5):
    print(num)

for num in range(5,0,-1):
    print(num)


# odd and even number upto range
for i in range(0,10):
    if i % 2 == 0:
        print("{} is even".format(i))
    if i % 2 == 1:
        print("{} is odd".format(i))



# -------------------------------------------------------------------------------------
# Array in JS = list in Python
foods = ['Carrots', 'Grapes', 'Banana']

for food in foods:
    print("I like", food, foods.index(food))

for i, food in enumerate(foods):
    print('{},{}'.format(i,food))


# -------------------------------------------------------------------------------------
# nasted loops
outer = ['red', 'big', 'tasty']
inner = ['apple', 'cherry', 'banana']

for x in outer:
    for y in inner:
        print(x,y)


# -------------------------------------------------------------------------------------
# while loop
i = 1
while i < 6:
    print(i)
    i += 1



# -------------------------------------------------------------------------------------
# Python function
# in JS - function nameOfTheFunction(){}
# in Python - def name_of_the_function():

def hellowing(name):
   print("hello", name)

hellowing("ahmed")
hellowing('hisham')
hellowing('ahmed')

def about_me(fav_food, fav_animal, fav_place):
    print("i love to eat", fav_food, "While petting my", fav_animal,"at",fav_place)


# calling of the function
about_me(fav_food="pasta", fav_animal="Cat", fav_place="BH")


# return value
def add(num1, num2):
    return num1 + num2

total = add(2,3)
print(total)


def add(a,b):
    return a + b

def sub(a,b):
    return a - b

def mult(a,b):
    return a * b

def divi(a,b):
    return a / b

def compute(a,b,op):
    return op(a,b)

print(compute(1, 5, add))
print(compute(1, 5, sub))
print(compute(1, 5, mult))
print(compute(1, 5, divi))




# -------------------------------------------------------------------------------------
#! Python * Parameter specifier
# *args


def f(*args):
    print(type(args))

    for arg in args:
        print(arg)

# passing varrying number
f(1, 3, "SEI", 40, True)



# -------------------------------------------------------------------------------------
def dev_skills(dev_name, *args):
    dev = {'name': dev_name ,"skils": []}
    for skill in args:
        dev["skills"].append(skill)
    return dev

#! function call
print(dev_skills('ahmed','HTML','CSS', "JS", "Python" ))



# -------------------------------------------------------------------------------------
# **kwargs
def dev_stills(dev_asm, **kwargs):
    devv = {'name': dev_asm, "skills":{}}

    for still, rating in kwargs.items():
        devv['skills'][still] = rating
    return devv

# function call
print(dev_stills('Ahmed', HTML = 5, CSS = 5, JavaScript = 5, Python = 5))



# -------------------------------------------------------------------------------------

# Required Positional Arguments, *args, **kwargs
def arg_demo(pos1, pos2, *args, **kwargs):
    # Positional Arguments
    print(f"Positional Args: {pos1}, {pos2}")
    # * Arguments
    print('*args')
    for arg in args:
        print(' ', arg)
    print('**kwargs')
    for keyword, value in kwargs.items():
        print(f'{keyword} : {value}')
# Function call 
arg_demo('A', 'B', 1, 2, 3, 4, 5, 6, color='Orange', shape = 'Square', food='Pizza')


