import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup
import ssl

# SSL 인증 관련 에러를 무시
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter - ')
if len(url) < 1: url = 'http://commool.woobi.co.kr'
html = urllib.request.urlopen(url, context=ctx).read()
soup = BeautifulSoup(html, 'html.parser')

# Retrieve all of the anchor tags
tags = soup('a')
for tag in tags:
    print(tag.get('class', None))