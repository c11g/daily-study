import urllib.request, urllib.parse
import json

fhand = urllib.request.urlopen('http://py4e-data.dr-chuck.net/comments_171352.json')
data = fhand.read()

data = json.loads(data)

commentList = data['comments']

sum = 0
for item in commentList:
    sum = sum + int(item['count'])

print(sum)