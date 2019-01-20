# 1부터 n까지의 합 구하기(ch1_sum_n.pyS)
# 재귀 함수 활용하기
def sum_recursive(n):
    # n = 5
    # 5 + 4 + 3 + 2 + 1
    if n <= 1:
        return 1
    
    return n + sum_recursive(n-1)

number = int(input('Enter a number sum-recursive: '))
print('sum-recursive', sum_recursive(number))

# 숫자 n개 중에 최댓값 찾기(ch2_max.py)
# 재귀 함수 활용하기
def max_recursive(li, idx):
    if (idx == 1): return li[0]
    max = max_recursive(li, idx-1)

    if (max > li[idx-1]): return max
    else: return li[idx-1]
    
a = [17,92,18,33,58,7,33,42,99]
print('max-recursive', max_recursive(a, len(a)))

# if (idx == 1): return li[0]
# max = max_recursive(li, idx-1)
# 위 코드 2줄이, idx가 9->2 까지 재귀적으로 반복

# idx == 2일 때 max 값이 li[0] 즉 17이 할당되고 아래 코드로 넘어감
# 그리고 거꾸로 지금까지 중첩된 함수가 순차적으로 실행됨
# idx가 거꾸로 2->9 까지 반복