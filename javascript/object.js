// 데이터 프로퍼티
var people = {
	name: 'c11g',
};
console.log(Object.getOwnPropertyDescriptor(people, 'name'));

// 접근자 프로퍼티
var person = {
	_name: 'c11g', // 데이터 프로퍼티
	get name() { // getter 접근자 프로퍼티
		return this._name;
	},
	set name(value) { // setter 접근자 프로퍼티
		this._name = value;
	}
};
console.log(Object.getOwnPropertyDescriptor(person, 'name'));