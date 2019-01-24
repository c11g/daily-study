# fibonacci
# 0, 1, 1, 2, 3, 5, 8, 13, 21 ...

# 피보나치 수열이 0번 부터 시작할 때, n번째 수를 구하는 알고리즘을 재귀 호출을 이용해서 구현
# 일단 머리 안돌아가서 while로 우선
# def fibo(idx):
#     curr = 0
#     next = 1
#     count = 1

#     while count < idx:
#         temp = curr + next
#         curr = next
#         next = temp
#         count = count + 1
    
#     return curr

# 재귀함수로
# 내 머리로 한거 = 무식함
# def fibo(c, n, idx):
#     if ( idx == 0 ): return c
    
#     after = c + n
#     c = n
#     n = after
#     idx = idx - 1
    
#     return fibo(c, n, idx)

# 책 풀이
def fibo(n):
    # 피보차니 수열 0번째는 0,
    # 1번째는 1인 특성을 활용
    if ( n <= 1): return n

    # 간단하게 fibo(n)은 그 직전 두 값의 합
    return fibo(n-2) + fibo(n-1)

n = int(input("Enter a index: "))
print(fibo(n))