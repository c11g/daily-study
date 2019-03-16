# 병합 정렬
# 입력 값: 리스트 a
# 출력 값: 정렬된 새로운 리스트 result

def merge_sort(a):
    
    length = len(a)
    if length <= 1: return a
    
    mid = length // 2

    a1 = merge_sort(a[:mid])
    a2 = merge_sort(a[mid:])

    result = []
    
    while a1 and a2:
        if a1[0] < a2[0]: 
            result.append(a1[0])
            a1.pop(0)
        else:
            result.append(a2[0])
            a2.pop(0)
    
    if a1: result = result + a1
    if a2: result = result + a2
    
    return result

a = [4, 6, 9, 1, 7, 3, 8, 2, 10, 5]
result = merge_sort(a)
print(result)
