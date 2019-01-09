import re

fname = input('Enter a file name: ')
if len(fname) < 1: fname = "regex_sum_42.txt"
f = open(fname)

li = list()
for line in f:
    matches = re.findall('[0-9]+', line)
    if len(matches) < 1:
        continue
    for item in matches:
        item = int(item)
        li.append(item)

print(sum(li))