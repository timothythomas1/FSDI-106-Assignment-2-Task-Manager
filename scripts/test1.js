// Object constructor. Capitalization implies this is a constructor function
function Dog(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
};

// Object class constructor
class Cat {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    };
}

function testObjects() {
    console.log("Testing Objects");
    // What are 3 ways to make objects in JavaScript

    // 1.) Object Literals
    let lola = {
        name: "Lola",
        age: 3,
        color: "blue",
    };
    console.log(lola);

    let pinto = {
        Name: "Pinto",
        Age: 4,
        Color: "tan",
    };
    console.log(pinto);

    // 2.) Object Constructors
    let teebo = new Dog("Teebo", 5, 'white');
    console.log(teebo);

    let bean = new Dog("Bean", 6, 'beige');
    console.log(bean);

    // 3.) Object Classes


}

// Testing purposes only
testObjects();