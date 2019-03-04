# 삽입 정렬
# 일반적인 알고리즘
# 입력: a

def insertion_sort(a):
    n = len(a)

    for i in range(1, n):
        key = a[i]
        before_index = i-1

        while a[before_index] > key: # key가 자기보다 좌측에 위치한 원소의 숫자보다 더 작으면
            
            a[before_index+1] = a[before_index] # key가 들어갈 자리 확보를 위해 원소들을 모두 한 칸씩 우측으로 옮김
            
            before_index = before_index-1 # 0번째 원소에 도달하면 종료하기 위한 조건
            if (before_index < 0):
                print('while break!', a)
                break
            
            print('while', a)
        
        a[before_index+1] = key
        print('for', a)

a = [2,4,5,1,3]
insertion_sort(a)
print(a)
