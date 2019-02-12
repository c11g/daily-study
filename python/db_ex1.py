import sqlite3

connection = sqlite3.connect('./db/org_count.sqlite')
cursor = connection.cursor()

cursor.execute('DROP TABLE IF EXISTS Counts')
cursor.execute('CREATE TABLE Counts (org TEXT, count INTEGER)')

fname = input('Enter a file name: ')
if len(fname) < 1: fname = 'mbox.txt'

fhand = open(fname)
for line in fhand:
    if not line.startswith('From: '): continue
    
    line = line.rstrip()
    pices = line.split('@')
    org = pices[1]

    cursor.execute('SELECT count FROM Counts WHERE org= ? ', (org,))
    row = cursor.fetchone()

    if row is None:
        cursor.execute('INSERT INTO Counts (org, count) VALUES(?, 1)', (org,))
    else:
        cursor.execute('UPDATE Counts SET count = count + 1 WHERE org= ? ', (org,))
    
connection.commit()
connection.close()