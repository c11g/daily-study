# 삽입 정렬
# 쉽게 설명한 알고리즘
# 입력: a

def find_insertion_index(item, li):
    for i in range(0, len(li)):
        if item < li[i]: return i
    
    return len(li)


def insertion_sort(a):
    result = []

    while a:
        item = a.pop(0)
        idx = find_insertion_index(item, result)
        result.insert(idx, item)

    return result

a = [2,4,5,1,3]
new_a = insertion_sort(a)
print(new_a)