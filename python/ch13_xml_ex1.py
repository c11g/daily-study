import urllib.request, urllib.parse
import xml.etree.ElementTree as ET

fhand = urllib.request.urlopen('http://py4e-data.dr-chuck.net/comments_171351.xml')
data = fhand.read()

tree = ET.fromstring(data)

countTagList = tree.findall('.//count')

sum = 0
for count in countTagList:
    sum = sum + int(count.text)

print(sum)