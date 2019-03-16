# 순차 탐색
# 입력 값: 리스트 a
# 찾는 값: x

def search(a, x):
    n = len(a)
    
    for i in range(0, n):
        if a[i] == x: return i
    
    return -1

v = [17, 92, 18, 33, 58, 7, 33, 42]
print(search(v, 18))
print(search(v, 33))
print(search(v, 900))