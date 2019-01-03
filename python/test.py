def greeting(input):
    try:
        name = str(input)
    except:
        name = -1
        print("Error")
    
    return "Hello" + name

print(greeting(15))