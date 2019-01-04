fhand = open("./python/string.py")

result = ""
count = 0
for line in fhand:
    result = result + line
    count = count + 1
print(fhand.read())

print("1", result)
text = fhand.read()
print("character:",len(text))