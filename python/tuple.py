d = {'a': 5, 'b': 2, 'c': 22}

# 값을 기준으로 정렬
l = list()
for k,v in d.items():
    l.append((v,k))

# print(sorted(l, reverse=True))

print( sorted([(v,k) for k,v in d.items()], reverse=True) )