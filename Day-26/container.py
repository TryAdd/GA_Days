colors = ['red', 'black', 'blue']


print(type(colors))
print(len(colors))

#? acessing an item

print(colors[-1])


#! assigning an item:
colors[-1] = 'brown'
print(colors)


#* Adding an item
colors.append('yellow')
print(colors)

#? add multi items
colors.extend(['white','cyan'])
print(colors)



#! adding todo lists

odd = [1,3,5] 
even = [2,4,6] 

all_nums = odd + even
print(all_nums)


#? inserting an item in specific place
# tgdr tjeb alwan ela fog bs ma bjebhm couz hne is
colors.insert(1,'orange')
print(colors)

#! removing Items 
# colors.pop()
# print.pop(1)
print(colors.pop(1))
print(colors)

del colors[2]
print(colors)


colors.remove('black')
print(colors) 


colors.clear()
print(colors)


for color in colors:
    print(color)

for index, cilor in enumerate(colors):
    print(index, colors)

num = [1,2,3,4,5,6,7,8,9,10]

squared_num = []
for n in num:
    squared_num.append(n*n)

print(squared_num)

#! dh b5t9ar lle fog

squared_num = [n*n for n in num]

#? [<expression> for <item> in <list>] 

print(squared_num)


num = [1,2,3,4,5,6,7,8,9,10]
even_squared = []

for n in num:
    square = n * n
    if square%2 ==0:
        even_saqured.append(square)


print(even_squared)


#?  a5t9ar lle fog kaml

even_squared=[n*n for n in num if(n*n)%2 == 0]
print(even_squared)

colors = ['red', 'black', 'blue']
print(type(colors))
fruits = ('apple', 'banana', 'grape')
print(type(fruits))

print(len(fruits))

gum_flavors = 'mint', 'strawberrys', 'wo6r melon'
print(type(gum_flavors))

# #? empty 6bl
# languages = ()
# print(type(languages))

# 1-6bl
languages = ('Python',)
print(type(languages))


fav_toys = ('Teddy bear', 'Race car', 'Ball')

indexOne = fav_toys[1]
print(indexOne)

ball_index = fav_toys.index('Ball')
print(ball_index)

#? iteration
for idx, toy in enumerate(fav_toys):
    print(idx,toy)

#? unpacking tuples
subjects = ('physics', 'AI', 'English')
Sciences, Techolgies, Languages = subjects

print(Sciences)
print(Sciences, Techolgies, Languages)
print(subjects)

#! slicing 
name = 'Taylor'
short_name = name[0:3]
print(short_name)


#? slicing - tuble
colors = ('red', 'green', 'pink')
print(colors[:2])
print(colors[1:])
print(colors[:])



#dikshnare
students = {

}



box = {
    toy: "blue car",
    "storybook": "little Red Riding Hood",
    "box_owner": "Ahmed"
}

#! Edit Values
box['toy'] = 'red car'
print(box)

#? get method
print(box.get('doll'))


print(box.get("doll", {'barbie': 5, 'bratz':5}))
print(box)

#! in operator
print('toy' in box)


if 'storybook' in box:
    print(f"{box['storybook']}is a book I found{box['box_owner']}'s box")
else:
    print(f"{box['storybook']} is a book I couldn't find in {box['box_owner']}'s box")




# Adding Items
box['doll'] = 'barbie'
print(box['doll'])
print(box)

# Deleting Items:
del box['toy']
print(box)

print('toy' in box)

# Number of Items:
print(len(box))

treasure_gold = {
    'big_gold' : 1000,
    'meduium_gold' : 500,
    'small_gold' : 100,

}

# Iterating through Items
for key in treasure_gold:
    print(f"{key} = {treasure_gold[key]}")

# Items
print(treasure_gold.items())
#// Python anti-pattern
for key,value in treasure_gold.items():
    print(f"{key} = {value}")