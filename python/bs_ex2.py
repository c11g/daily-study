# To run this, you can install BeautifulSoup
# https://pypi.python.org/pypi/beautifulsoup4

# Or download the file
# http://www.py4e.com/code3/bs4.zip
# and unzip it in the same directory as this file

from urllib.request import urlopen
from bs4 import BeautifulSoup
import ssl

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter - ')
if len(url) < 1: url = 'http://py4e-data.dr-chuck.net/known_by_Lilya.html'

count = int(input('Enter count: '))
position = int(input('Enter position: '))

while count > 0:
    html = urlopen(url, context=ctx).read()
    soup = BeautifulSoup(html, "html.parser")

    # Retrieve all of the anchor tags
    tags = soup('a')
    print(url)
    url = tags[position-1].get('href', None)
    count = count - 1

print(tags[position-1].get('href', None))