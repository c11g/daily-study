# 순차 탐색
# 입력 값: 리스트 a, 찾는 숫자 x
# 반환 값: 해당하는 인덱스 or -1
# 값이 여러 개일 경우 모두 찾아야 함
# 계산 복잡도: O(n)

def search_all(a, x):
    n = len(a)
    result = list()
    
    for i in range(0, n):
        if a[i] == x: 
            result.append(i)
    
    return result

v = [17, 92, 18, 33, 58, 7, 33, 42]
print(search_all(v, 33))
print(search_all(v, 339))

# 학생 번호를 입력하면 이름을 반환하는 함수
# 입력 값: id: 찾는 번호, numbers: 번호 리스트, names: 이름 리스트
# 반환 값: 학생 이름 or "?"

def search_name(id, numbers, names):
    length = len(numbers)

    # 번호 인덱스 확인
    for i in range(0, length):
        if numbers[i] == id: return names[i]

    return "?"
    

stu_no = [39, 14, 67, 105]
stu_name = ["Justin", "John", "Mike", "Summer"]

print(search_name(stu_no[0], stu_no, stu_name))
print(search_name(stu_no[1], stu_no, stu_name))
print(search_name(105, stu_no, stu_name))
print(search_name(777, stu_no, stu_name))