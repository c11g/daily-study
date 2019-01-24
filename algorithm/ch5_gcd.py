# 최대 공약수

def gcd(a, b):
    # a, b 두 숫자 중 작은 숫자가 최대공약수가 될 가능성이 있는 수 중에 가장 큰 값
    gcd = min(a, b)

    while True:
        if (a % gcd == 0 and b % gcd == 0):
            return gcd
        else:
            gcd = gcd-1

a = int(input("Enter a number A: "))
b = int(input("Enter a number B: "))

print(gcd(a,b))