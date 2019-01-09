import re

f = open('mbox-short.txt')

li = list()
for line in f:
    line = line.strip()

    if not re.search(r'\S+@\S+', line):
        continue
    
    match = re.findall(r'[\w.]+@[\w.]+', line)
    li.append(match[0])

print(li)