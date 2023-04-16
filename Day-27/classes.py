# nums = [1,2,3]

# print(dir(nums))


class Dog():
    #! Class attribute
    next_id = 1 

    def __init__(self, name, age = 0):
        self.name = name
        self.age = age
        self.id = Dog.next_id
        Dog.next_id += 1
    
    def bark(self):
        print(f'{self.name} Goes BURK BORK!!!!!')

    def __str__(self):
        return f"The Dog named {self.name} is {self.age} Years old"
    
    def get_total_dogs(cls):
        return cls.next_id - 1


spot = Dog('Spot', 10)
print(spot.id)
lassie = Dog("Lassie")
print(lassie.id)

print(spot.get_total_dogs())


# spot.bark()

# print(spot)

class ShowDog(Dog):
    def __init__(self, name, age = 0, total_earnings = 0):
        Dog.__init__(self, name, age)

        self.total_earnings = total_earnings

    def add_money(self,amount):
        self.total_earnings += amount


razmatazz = ShowDog('Razmatazz', 100, 500)

print(razmatazz)
razmatazz.bark()
razmatazz.add_money(100)
print(razmatazz.total_earnings)
        
        