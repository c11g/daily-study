# 1부터 입력 값 n까지의 합 구하기

# 1. 합 = 0 + 1 + ... + n
# 복잡도 O(n)
def sum_n(n):
    # 합계를 받을 변수 s = 0
    s = 0
    # [반복] s = s + count(n번까지 1씩 증가)
    for count in range(1, n+1):
        s = s + count
    return s

n = int(input("Enter a number: "))
print(sum_n(n))

# 2. (n+1) * n/2 식 이용
# 복잡도 O(1)
def sum_n2(n):
    return (n+1)*n//2

n2 = int(input("Enter a number: "))
print(sum_n2(n2))