# 최솟값 구하기

li = list()
while True:
    n = input('Enter a number to append list: (quit for type q)')
    if n == 'q': break
    else: 
        try: n = int(n)
        except: 
            print('올바른 값을 입력해주세요.')
            continue
        li.append(n)

min = None
def getMinValue(li):
    if len(li) < 1: return 'list의 갯수가 ' + str(len(li)) + '개 입니다.'
    
    min = li[0]
    for i in range(1, len(li)):
        if li[i] < min: min = li[i]
    
    return min

print(li, getMinValue(li))