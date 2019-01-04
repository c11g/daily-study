# 3.1 Write a program to prompt the user for hours and rate per hour using input to compute gross pay.
# Pay the hourly rate for the hours up to 40 and 1.5 times the hourly rate for all hours worked above 40 hours.
# Use 45 hours and a rate of 10.50 per hour to test the program (the pay should be 498.75).
# You should use input to read a string and float() to convert the string to a number.
# Do not worry about error checking the user input - assume the user types numbers properly.

print("페이 계산기")

try:
    rate = float(input("시급은 얼마에요? : "))
    hours = float(input("몇 시간 일했어요? : "))
except:
    print("Error, please enter numeric input")
    quit()

if hours > 40:
    extraHours = hours - 40
    basicHours = 40
    print(basicHours*rate + extraHours*rate*1.5)
else:
    print(hours*rate)