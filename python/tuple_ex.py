# 10.2 Write a program to read through the mbox-short.txt and figure out the distribution by hour of the day for each of the messages.
# You can pull the hour out from the 'From ' line by finding the time and then splitting the string a second time using a colon.
# From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008
# Once you have accumulated the counts for each hour, print out the counts, sorted by hour as shown below.
# Desired Output
# 04 3
# 06 1
# 07 1
# 09 2
# 10 3
# 11 6
# 14 1
# 15 2
# 16 4
# 17 2
# 18 1
# 19 1

fname = input("Enter a file name: ")
if len(fname) < 1: fname = "mbox-short.txt"
f = open(fname)

hourDic = dict()
for line in f:
    line = line.rstrip()
    if not line.startswith("From "):
        continue
    pos = line.find(":")
    h = line[pos-2:pos]

    hourDic[h] = hourDic.get(h, 0) + 1

print(sorted([(k, v) for k,v in hourDic.items()]))