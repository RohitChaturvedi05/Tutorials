//===================[Clasical Function]=============================
function add(num1,num2){
    return num1+num2;
}

//===================[Anonymous Function]=============================

var any=function(x){
    return x+=1;
};

//===================[Constructor Function]============================
function Person(fName,lName,age){
    this.firstName=fName;
    this.lastName=lName;
    this.age=age;
};

// var person1 = new Person("John", "Doe", 50);
// var person2 = new Person("Jane", "Doe", 45);