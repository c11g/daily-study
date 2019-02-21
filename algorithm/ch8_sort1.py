# 리스트 a 중 최솟값의 index 반환
def find_min_idx(a):
    n = len(a)
    min_idx = 0
    
    for index in range(1, n):
        if a[min_idx] > a[index]:
            min_idx = index

    return min_idx

# find_min_idx([4,11,7,2,5])

# 리스트 a를 오름차순으로 정렬
def sel_sort(a):
    result = []

    while a:
        min_idx = find_min_idx(a)
        value = a.pop(min_idx)
        result.append(value)

    return result

sel_sort([4,11,7,2,5])