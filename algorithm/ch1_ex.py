# 1. 1부터 n까지 연속된 숫자의 제곱의 합
# ex) n =10 , 1**2 + 2**2 + 3**2 ... 10**2 -> 385
# for문 이용: 복잡도 O(n)
def square_n(n):
    s = 0
    for i in range(1, n+1):
        s = s + i**2
    return s

n = int(input("Enter a number: "))
print('square_n(n)', square_n(n))

# 2. 공식 이용
def square_n2(n):
    return n*(n+1)*(2*n+1)//6

n2 = int(input("Enter a number: "))
print('square_n2(n)', square_n2(n2))