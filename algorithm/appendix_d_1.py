# 재귀호출 이용한 나선 그리기

import turtle as t

def spiral(len):
    if len <= 5: return
    
    t.forward(len)
    t.right(90)
    spiral(len-5)

t.speed(0)
spiral(200)
t.hideturtle()
t.done()