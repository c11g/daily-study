# 최댓값 구하기

def getMax(li):
    n = len(li)
    max = li[0]

    for i in range(1, n):
        if li[i] > max:
            max = li[i]

    return max

a = [17,92,18,33,58,7,33,42]

print(getMax(a))

# 최댓값 위치 구하기

def getMaxIdx(li):
    n = len(li)
    max_idx = 0

    for i in range(1, n):
        if li[i] > li[max_idx]:
            max_idx = i

    return max_idx

a = [17,92,18,33,58,7,33,42]

print(getMaxIdx(a))