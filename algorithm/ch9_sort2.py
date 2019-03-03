# 삽입 정렬
# 일반적인 알고리즘
# 입력: a

def insertion_sort(a):
    n = len(a)

    for i in range(1, n):
        key = a[i]
        j = i-1

        while j >= 0 and key < a[j]:
            a[j+1] = a[j]
            j = j-1
            print('while', a)
        
        a[j+1] = key
        print('for', a)

a = [2,4,5,1,3]
insertion_sort(a)
print(a)