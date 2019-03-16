import xml.etree.ElementTree as ET
import sqlite3

conn = sqlite3.connect('./db/music_track.sqlite')
cur = conn.cursor()

cur.executescript('''
DROP TABLE IF EXISTS Artist;
DROP TABLE IF EXISTS Genre;
DROP TABLE IF EXISTS Album;
DROP TABLE IF EXISTS Track;

CREATE TABLE Artist (
    id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    name    VARCHAR(128) UNIQUE
);

CREATE TABLE Genre (
    id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    name    VARCHAR(128) UNIQUE
);

CREATE TABLE Album (
    id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    artist_id  INTEGER,
    title   VARCHAR(128) UNIQUE
);

CREATE TABLE Track (
    id  INTEGER NOT NULL PRIMARY KEY 
        AUTOINCREMENT UNIQUE,
    title VARCHAR(128)  UNIQUE,
    album_id  INTEGER,
    genre_id  INTEGER,
    len INTEGER, rating INTEGER, count INTEGER
);
''')

xml_name = input('Enter a xml file name: ')
if ( len(xml_name) < 1 ): xml_name = 'Library.xml'

tree = ET.parse(xml_name)
track_list = tree.findall('dict/dict/dict')

def lookup(d, key):
    found = False
    for child in d:
        if found:
            return child.text
        if child.tag == 'key' and child.text == key:
            found = True
    return None

for track in track_list:
    if (lookup(track, 'Track ID') is None): continue
    
    artist = lookup(track, 'Artist')
    genre = lookup(track, 'Genre')
    album = lookup(track, 'Album')
    title = lookup(track, 'Name')
    len = lookup(track, 'Total Time')
    rating = lookup(track, 'Rating')
    count = lookup(track, 'Play Count')

    if title is None or artist is None or album is None or genre is None:
        continue

    cur.execute('''
        INSERT OR IGNORE INTO Artist (name) VALUES (?)
    ''', (artist, ))

    cur.execute('''
        INSERT OR IGNORE INTO Genre (name) VALUES (?)
    ''', (genre, ))

    cur.execute('''
        SELECT id FROM Artist WHERE name = ?
    ''', (artist, ))
    artist_id = cur.fetchone()[0]
    
    cur.execute('''
        INSERT OR IGNORE INTO Album (title, artist_id) VALUES (?, ?)
    ''', (album, artist_id))
    
    cur.execute('''
        SELECT id FROM Album WHERE title = ?
    ''', (album, ))
    album_id = cur.fetchone()[0]

    cur.execute('''
        SELECT id FROM Genre WHERE name = ?
    ''', (genre, ))
    genre_id = cur.fetchone()[0]

    cur.execute('''
        INSERT OR REPLACE INTO Track (title, album_id, genre_id, len, rating, count)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (title, album_id, genre_id, len, rating, count))

conn.commit()