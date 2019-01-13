# n명 중 두 명을 뽑아 짝을 짓는다.
# 짝을 지을 수 있는 경우의 수를 모두 출력하는 알고리즘을 만드세요.
# 예) ['Tom', 'Jerry', 'Mike'] 이면
# Tom - Jerry / Tom - Mike / Jerry - Mike

# li = ['a', 'b', 'c', 'd', 'e']
# a b / li[0] li[1]
# a c / li[0] li[2]
# a d / li[0] li[3]
# a e / li[0] li[4]
# b c / li[1] li[2]
# b d / li[1] li[3]
# b e / li[1] li[4]
# c d / li[2] li[3]
# c e / li[2] li[4]
# d e / li[3] li[4]

def makePartner(li):
    count = len(li)
    for i in range(0, count-1):
        for j in range(i+1, count):
            print(li[i], '-', li[j])


li = ['메시', '호날두', '케인', '살라', '수아레즈', '네이마르', '손흥민', '이강인']
makePartner(li)