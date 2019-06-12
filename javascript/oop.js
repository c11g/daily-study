var Person = function (arg) {
	var name = arg ? arg : ''; // ①
	
	this.getName = function () {
		return name;
	};

	this.setName = function (arg) {
		name = arg;
	};
}

var me = new Person('Lee');
console.log(me);
console.log(me.getName());
console.log(me.__proto__ === Person.prototype);
