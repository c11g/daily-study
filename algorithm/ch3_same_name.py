# 동명이인 찾기
# list에 담긴 문자열 이름을 탐색하여
# 같은 이름이 있는 경우, 이름을 set(집합)에 넣어 반환하기

def find_same_name(li):
    s = set()
    # 팁1. range(0, len(li)-1)
    # 비교할 원소(a)에는 마지막 원소를 포함할 필요가 없다. 이미 앞 원소들에서 마지막 원소와의 비교를 끝냈기 때문.
    for i in range(0, len(li)-1):
        # 팁2. range(i+1, len(li))
        # 비교당하는 원소(b)는 비교할 원소(a) 보다 하나 뒤에서 시작하면 된다.
        for j in range(i+1, len(li)):
            if li[i] == li[j]:
                s.add(li[i])

    return s

li = ['영광', '정주', '윤서', '정주', '윤서']
print(find_same_name(li))