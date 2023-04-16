# def hello(name):
#     return f"hello {name}"

# def big_hello(name):
#     return f"well hello there {name} you are beautiful human"

# def greet


def weight_converter(unit):
    def lbs_to_kgs(amount):
        return amount * 0.45359237
    
    def kgs_to_lbs(amount):
        return amount * 2.20462
    
    if unit == "lbs":
        return lbs_to_kgs
    
    else:
        return kgs_to_lbs
    
converter = weight_converter("lbs")

print(converter(18))


def do_twice(func):
    def wrapper(*args, **kwargs):
        func(*args, **kwargs)
        func(*args, **kwargs)
    return wrapper

@do_twice
def say_hello(name):
    print(f"hello {name}")

# say_hello = do_twice(say_hello) #?tgdr tgol bdl kl dh @do_twice w bs

say_hello('Ahmed')
@do_twice 
def return_greeting(name):
    print("creating Greeting")
    return f"hi {name}"

hey_ahmed = return_greeting("Ahmed")
print(hey_ahmed)

""" 
# def hello(name):
#     return f'Hello {name}'

# def big_hello(name):
#     return f'Well hello there {name} you beautiful human'

# def greet_george(callback):
#     return callback('George')

# print(greet_george(big_hello))

# def outer():
#     print('I\'m the outer function')

#     def inner_one():
#         print('I\'m the first inner function')

#     def inner_two():
#         print('I\'m the second inner function')
    
#     inner_one()
#     inner_two()

# outer()

def weight_converter(unit):
    kilo_multiplier = 0.453592
    def lbs_to_kgs(amount):
        return amount * kilo_multiplier
    
    def kgs_to_lbs(amount):
        return amount * 2.20462
    
    if unit == 'lbs':
        return lbs_to_kgs
    else:
        return kgs_to_lbs

converter = weight_converter('lbs')
print(converter(18))

def do_twice(func):
    def wrapper():
        func()
        func()
    return wrapper

@do_twice
def say_hello():
    print('Hello')

# say_hello = do_twice(say_hello)

say_hello()
"""