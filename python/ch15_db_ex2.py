import sqlite3
import json

conn = sqlite3.connect('./db/rosterdb.sqlite')
cur = conn.cursor()

print(conn, cur)