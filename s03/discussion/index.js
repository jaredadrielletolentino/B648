// console.log("Hello World!");

// We cannot instantiate an object with an abstract class
class Person {
    constructor() {
        if(this.constructor === Person) {
            throw new Error("Object cannot be created from a abstract class Person");
        }

        // Requiring the subclasses to contain the method getFullName()
        if(this.getFullName === undefined) {
            throw new Error("Class must implement getFullName() method");
        }

        if(this.getFirstName === undefined) {
            throw new Error("Class must implement getFirstName() method");
        }

        if(this.getLastName === undefined) {
            throw new Error("Class must implement getLastName() method");
        }

    }

}

// We created another class that will follow the Person abstract class
class Employee extends Person {
    constructor(firstName, lastName, employeeID) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeID = employeeID;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName} has employee ID of ${this.employeeID}`;
    }

    getFirstName() {
        return `First Name: ${this.firstName}`;
    }

    getLastName() {
        return `Last Name: ${this.lastName}`;
    }
}

// Stretch Goal: Student Subclass
class Student extends Person {
    constructor(firstName, lastName, studentID, section) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentID = studentID;
        this.section = section;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName} has student ID of ${this.studentID}`;
    }

    getFirstName() {
        return `First Name: ${this.firstName}`;
    }

    getLastName() {
        return `Last Name: ${this.lastName}`;
    }

    getStudentDetails() {
        return `${this.firstName} ${this.lastName} has student ID of ${this.studentID} and belongs to section ${this.section}`;
    }
}

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive() {
        throw new Error("drive() method must be implemented");
    }
}

class Car extends Vehicle {
    constructor(make, model, color) {
        super(make, model);
        this.color = color;
    }

    drive() {
        console.log(`Driving ${this.color} ${this.make} ${this.model}`);
    }
}

class Truck extends Vehicle {
    constructor(make, model, capacity) {
        super(make, model);
        this.capacity = capacity;
    }

    drive() {
        console.log(`Driving ${this.make} ${this.model} with capacity ${this.capacity}`);
    }
}

const myCar = new Car("Toyota", "Camry", "Pearl White");
const myTruck = new Truck("Tesla", "Cyber Truck", "5000 lbs");

myCar.drive();
myTruck.drive();

const student1 = new Student("Jane", "Doe", "S12345", "A");
console.log(student1.getFullName());
console.log(student1.getFirstName());
console.log(student1.getLastName());
console.log(student1.getStudentDetails());