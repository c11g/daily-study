import urllib.request, urllib.parse, urllib.error, re

fhand = urllib.request.urlopen('http://www.clearboth.org/')

tagDic = {}
for line in fhand:
    line = line.decode().strip()
    
    if len(line) < 1: continue
    
    tagLi = re.findall(r'<([a-z]+)', line)
    
    if len(tagLi) < 1: continue
    for tag in tagLi:
        tagDic[tag] = tagDic.get(tag, 0) + 1

tagLi = []
for tag, count in tagDic.items():
    tagLi.append((count, tag))

print(sorted(tagLi, reverse=True))