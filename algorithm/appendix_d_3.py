# 재귀호출 이용한 나무 그리기

import turtle as t

def tree(len):
    if len <= 5: return
    
    new_len = len * 0.7
    t.forward(len)
    t.right(20)
    tree(new_len)
    t.left(40)
    tree(new_len)
    t.right(20)
    t.backward(len)
    
t.speed(100)
t.left(90)
tree(70)
t.hideturtle()
t.done()