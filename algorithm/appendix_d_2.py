# 재귀호출 이용한 시에르핀스키 삼각형 그리기

import turtle as t

def tri(len):
    if len <= 10:
        for i in range(0, 3):
            t.forward(len)
            t.left(120)
        return
    
    new_len = len / 2
    tri(new_len)
    t.forward(new_len)
    tri(new_len)
    t.backward(new_len)
    t.left(60)
    t.forward(new_len)
    t.right(60)
    tri(new_len)
    t.left(60)
    t.backward(new_len)
    t.right(60)

t.speed(0)
tri(160)
t.hideturtle()
t.done()