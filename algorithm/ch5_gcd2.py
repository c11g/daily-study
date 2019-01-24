# 최대 공약수

def gcd(a, b):
    # 유클리드 알고리즘
    # a, b의 최대 공약수는 b와 a%b의 최대공약수와 같다. gcd(a,b) == gcd(b,a%b)
    # 어떤 수와 0의 최대공약수는 자기 자신(어떤수)이다. gcd(n,0) == n
    # gcd(1311,15) -> gcd(15, 1311%15) -> gcd(15, 6) -> gcd(6, 15%6) -> gcd(6, 3) -> gcd(3, 6%3) -> gcd(3, 0) -> 3
    if (b == 0): return a
    return gcd(b, a%b)

a = int(input("Enter a number A: "))
b = int(input("Enter a number B: "))

print(gcd(a,b))