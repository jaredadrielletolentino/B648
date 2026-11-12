console.log("Hello World!");

class Person {
    constructor() {
        if(this.constructor === Person) {
            throw new Error("Object can't be instantiated from abstract class");
        }

        if(this.getFullName === undefined) {
            throw new Error("Class must implement getFullName() method");
        }
    }
}

class Employee extends Person {
    // hash names are also known as private class properties. Adding a hash symbol before the property name will make it protected.
    // It a property is protected, it can only accessed from within the said class
    // When creating protected/private class properties, it must be declared OUTSIDE the class constructor first
    #firstName;
    #lastName;
    #employeeID;

    constructor(firstName, lastName, employeeID) {
        super();
        // We only have to consistently use the prefix hash(#) for private property names 
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#employeeID = employeeID;
    }

    // Setter Method
    setFirstName(firstName) {
        this.#firstName = firstName;
    }

    // Getter Metehod
    getFirstName() {
        return this.#firstName;
    }

    // Setter and Getter for Last Name
    setLastName(lastName) {
        this.#lastName = lastName;
    }

    getLastName() {
        return this.#lastName;
    }

    // Setter and Getter for Employee ID
    setEmployeeID(employeeID) {
        this.#employeeID = employeeID;
    }

    getEmployeeID() {
        return this.#employeeID;
    }

    getFullName(){
        return `${this.#firstName} ${this.#lastName} has employee ID of ${this.#employeeID}`;
    }
}

// In encapsulation, we cannot initialize the property values in the declaration/
const employeeA = new Employee("Jane", "Doe", "EMP123");

console.log(employeeA.getFullName());

employeeA.setFirstName("John");
console.log(employeeA.getFirstName());
employeeA.setLastName("Doe");
console.log(employeeA.getLastName());
employeeA.setEmployeeID("EMP124");
console.log(employeeA.getEmployeeID());

