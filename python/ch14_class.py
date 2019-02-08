class Person:
    level = 0

    def __init__(self, name):
        self.name = name
        print(self.name, 'constructed!')

    def lvup(self):
        self.level = self.level + 1
        print('level is', self.level)

class Student(Person):
    school = ''

    def setSchool(self, school):
        self.school = school
        print('I am student in', school)

me = Person('c11g')
y = Student('yunseo')
y.setSchool('MIT')
print(y.level)
y.lvup()
y.lvup()
y.lvup()
print(y.level)