

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;

}
Person.prototype.sayName = function () {
    return this.firstName + " " + this.lastName
};


// var person1 = new Person("John", "Doe", 50);
// var person2 = new Person("Jane", "Doe", 45);