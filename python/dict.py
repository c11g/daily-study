# counts = dict()
# names = ['csev', 'cwen', 'csev', 'zqian', 'cwen']
# for name in names :
#     # 기본적인 if 문
#     # if name not in counts: 
#     #    counts[name] = 1
#     # else :
#     #     counts[name] = counts[name] + 1
    
#     # 딕셔너리.get(키, 기본값) 메소드를 이용
#     counts[name] = counts.get(name, 0) + 1

# print(counts)

fname = input("Enter a file name: ")
if len(fname) < 1: fname = 'clown.txt'
f = open(fname)

# 파일의 내용을 읽어서 단어 이름과 카운트를 키와 값으로 가지는 딕셔너리 만듬
counts = {}
for line in f:
    line = line.rstrip()
    words = line.split()
    
    for word in words:
       counts[word] = counts.get(word, 0) + 1

# 위 딕셔너리를 순회해서 카운트가 가장 높은 단어를 출력
# 딕셔너리.item() 메소드를 통해 키와 값으로 이루어진 튜플을 받아서 처리
bigCount = -1
bigWord = None
for word, count in counts.items():
    if count > bigCount:
        bigCount = count
        bigWord = word

print(bigWord, bigCount)