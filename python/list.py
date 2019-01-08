# friends = ['c11g', 'messi', 'ronald']
# print(friends, len(friends))
# for item in friends:
#     if ( item == "ronald" ): item = "raul"
#     print(item)
#     print(friends)

# for i in range(len(friends)):
#     if ( friends[i] == "ronald" ): friends[i] = "raul"
#     print(friends[i])
#     print(friends)

# count = 0
# total = 0.0

# while True:
#     number = input("Enter a number: ")
    
#     if number == "done":
#         break
    
#     try: number = float(number)
#     except:
#         print("입력 값이 잘못되었어요. 숫자를 입력해주세요!")
#         continue
    
#     count = count + 1
#     total = total + number
#     average = total / count

# print("count is", count, "total is", total, "average is", average)

sumList = list()
while True:
    num = input("Enter a number: ")

    if num == "done": break
    
    try: num = float(num)
    except:
        print("입력 값이 잘못되었어요. 숫자를 입력해주세요!")
        continue
    
    sumList.append(num)

print("count is", len(sumList), "total is", sum(sumList), "average is", sum(sumList)/len(sumList))