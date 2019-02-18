import sqlite3
import json

conn = sqlite3.connect('./db/rosterdb.sqlite')
cur = conn.cursor()

cur.executescript('''
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Course;
DROP TABLE IF EXISTS Member;

CREATE TABLE User (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    name VARCHAR(128) UNIQUE
);

CREATE TABLE Course (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    title VARCHAR(128) UNIQUE
);

CREATE TABLE Member (
    user_id INTEGER,
    course_id INTEGER,
    role INTEGER,
    PRIMARY KEY (user_id, course_id)
);

''')

json_name = input('Enter a json name: ')
if ( len(json_name) < 1 ): json_name = 'roster_data.json'

json_hand = open(json_name)
data = json_hand.read()
roster_js = json.loads(data)

for item in roster_js:
    name = item[0]
    title = item[1]
    role = item[2]

    if ( name is None or title is None or role is None ): continue

    cur.execute('INSERT OR IGNORE INTO User (name) VALUES (?)', (name,))
    cur.execute('SELECT id FROM User WHERE name = ?',(name,))
    user_id = cur.fetchone()[0]
    
    cur.execute('INSERT OR IGNORE INTO Course (title) VALUES (?)', (title,))
    cur.execute('SELECT id FROM Course WHERE title = ?', (title,))
    course_id = cur.fetchone()[0]

    cur.execute('''INSERT OR REPLACE INTO Member (user_id, course_id, role)
        VALUES (?, ?, ?)''', (user_id, course_id, role))

    
conn.commit()