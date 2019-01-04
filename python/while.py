# Exercise 1: Write a program which repeatedly reads numbers until the user enters "done".
# Once "done" is entered, print out the total, count, and average of the numbers.
# If the user enters anything other than a number,
# detect their mistake using try and except and print an error message and skip to the next number.

# count = 0
# total = 0.0

# while True:
#     number = input("Enter a number: ")
    
#     if number == "done":
#         break
    
#     try: number = float(number)
#     except:
#         print("입력 값이 잘못되었어요. 숫자를 입력해주세요!")
#         continue
    
#     count = count + 1
#     total = total + number
#     average = total / count

# print("count is", count, "total is", total, "average is", average)

# 5.2 Write a program that repeatedly prompts a user for integer numbers until the user enters 'done'.
# Once 'done' is entered, print out the largest and smallest of the numbers.
# If the user enters anything other than a valid number catch it with a try/except and
# put out an appropriate message and ignore the number.
# Enter 7, 2, bob, 10, and 4 and match the output below.
# Invalid input
# Maximum is 10
# Minimum is 2

largest = None
smallest = None
while True:
    num = input("Enter a number: ")
    if num == "done": break
    
    try: num = int(num)
    except:
        print("Invalid input")
        continue
    
    if largest is None: largest = num
    elif num > largest: largest = num
    
    if smallest is None: smallest = num
    elif num < smallest: smallest = num
    

print("Maximum is", largest)
print("Minimum is", smallest)