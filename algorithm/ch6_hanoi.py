# 하노이의 탑
# n개의 하노이 탑을 옮기는 순서를 출력

def hanoi(n, start, end, sub):
    if ( n == 1 ):
        print(start, 'to', end)
        return

    hanoi(n-1, start, sub, end)
    print(start, 'to', end)
    hanoi(n-1, sub, end, start)    

hanoi(4, 1, 3, 2)