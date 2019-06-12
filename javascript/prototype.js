function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;

    this.sayName = function () {
        return this.name;
    };
}

const c11g = Person('youngkwang', 'cho');
console.dir(Person);