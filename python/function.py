name = input("Enter your name: ")

def printHello(name):
    return "Hello "+ name

result = printHello(name)
print(result)

def add(a,b):
    return a + b

print(add(5,1))

# 4.6 Write a program to prompt the user for hours and rate per hour using input to compute gross pay.
# Pay should be the normal rate for hours up to 40 and time-and-a-half for the hourly rate for all hours worked above 40 hours.
# Put the logic to do the computation of time-and-a-half in a function called computepay() and use the function to do the computation.
# The function should return a value. Use 45 hours and a rate of 10.50 per hour to test the program (the pay should be 498.75).
# You should use input to read a string and float() to convert the string to a number.
# Do not worry about error checking the user input unless you want to - you can assume the user types numbers properly.
# Do not name your variable sum or use the sum() function.

try:
    hours = float(input("Enter hours: "))
    rate = float(input("Enter rate: "))
except:
    print("hours 또는 rate가 잘못 입력되었습니다.")
    quit()

def computepay(hours, rate):
    pay = hours * rate
    
    if hours > 40:
        exPay = (hours-40)*rate*0.5
        pay = pay + exPay
    
    return pay

p = computepay(hours, rate)
print("Pay", p)