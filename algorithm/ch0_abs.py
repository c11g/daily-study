import math

# 절대값 구하기 : 입력 실수 a -> 출력 a의 절대값
# 1. 부호 판단
def abs_sign(n):
    # n >= 0이면  n 리턴
    if n >= 0: return n
    # n < 0이면 -n 리턴
    else: return -n

# 2. 제곱근 이용
def abs_square(n):
    return math.sqrt(n*n)

a = abs_sign(-3)
print('abs_sign(-3)', a)

b = abs_square(-3)
print('abs_square(-3)', b)