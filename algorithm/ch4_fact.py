# factorial 구하기
# for

def fact(n):
    # n=5
    # 5 * 4 * 3 * 2 * 1
    result = 1
    for i in range(1, n+1):
        result = result * i

    return result

number = int(input("Enter a number for-factorial: "))
f = fact(number)
print('for-factorial', f)

def fact2(n):
    # n=5
    # 5 * fact2(4) -> fact2(4) = 4 * fact2(3)
    # 5 * 4 * fact2(3) -> fact2(3) = 3 * fact2(2)
    # 5 * 4 * 3 * fact2(2) -> fact2(2) = 2 * fact2(1)
    # 5 * 4 * 3 * 2 * fact2(1) -> fact2(1) = 1
    if n <= 1:
        return 1
    
    return n * fact2(n-1)

number2 = int(input("Enter a number recursive-factorial: "))
f2 = fact(number2)
print('recursive-factorial', f2)