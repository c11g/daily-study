print("엘레베이터 층 변환")
country = input("지금 계신 곳이 유럽이면 E, 미국이면 A 를 입력해주세요: ")
floor = input("몇 층 가세요?: ")
if country == "E":
    try:
        floor = int(floor) - 1
    except:
        floor = "Not A Number"
elif country == "A":
    try:
        floor = int(floor)
    except:
        floor = "Not A Number"
else:
    print(country, "가 입력되었습니다. 지금 계신 곳이 잘못 입력되었어요.")
    quit()
print(floor, "층 버튼을 누르세요.")