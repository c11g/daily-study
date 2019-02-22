# 리스트 a를 오름차순으로 정렬
def sel_sort(a):
    n = len(a)

    for i in range(0, n-1):
        min_idx = i
        print('OUT min_idx: ',min_idx)

        for j in range(i+1, n):
            print('IN a[min_idx] - a[j] : ', a[min_idx], '-', a[j])
            if a[j] < a[min_idx]:
                print('EXECUTE')
                min_idx = j
        
        print('OUT a[min_idx] - a[i]: ',a[min_idx], '-', a[i])
        a[i], a[min_idx] = a[min_idx], a[i]
        print('OUT D:', d)
    
    return a

d = [2,4,5,1,3]
print(sel_sort(d))