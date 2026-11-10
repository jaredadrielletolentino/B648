// console.log("Hello World");

// Polymorphism
// is a combination of the words poly which means many and morph means form
// In OOP, polymorphism allows objects to takes different forms by declaring different implementations in the base class and subclass.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `The person's name is ${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, employeeID) {
        super(firstName, lastName);
        this.employeeID = employeeID;
    }

    // [SECTION] Method Overriding
    // This is a form of Polymorphism where a subclass provides a specific implementation of a method that is already defined in it parents class.
    getFullName() {
        // return `The employee's name is ${this.firstName} ${this.lastName}`;

        // Use the "super" keyword to invoked parent class methods
        return super.getFullName() + ` with employee ID ${this.employeeID}`;
    }
}

// 1. Create a new class called TeamLead that is a child of Employee.
class TeamLead extends Employee {

    // 2. In the TeamLead subclass, override Employee's getFullName() method to add " and he/she is a team lead"
    getFullName() {
        return super.getFullName() + " and he/she is a team lead";
    }
}

const employeeA = new Employee("John", "Doe", "EM-004");
console.log(employeeA.getFullName());

/*
Mini exercise
1. Create a new class called TeamLead that is a child of Employee.
2. In the TeamLead subclass, override Employee's getFullName() method to add " and he/she is a team lead"

Test Input: 
*/

const teamLeadA = new TeamLead('Jane', 'Smith', 'TL-001');
console.log(teamLeadA.getFullName());//The person's name is Jane Smith with employee ID TL-001 and he/she is a team lead

// [SECTION] Method Overloading (Parameter Overloading)
// Parameter overloading, also known as method overloading is a concept in programming languages where multiple methods with the same name are defined within the class object but with different parameter lists.

/*
    Example of Method Overloading in Java
    public class Calculator {
        public int add(int a, int b) {
            return a + b;
        }
        
        public double add(double a, double b, double c) {
            return a + b + c;
        }
    }

*/

class Calculator {
    // In JavaScript, last defined method will overwrite any previous definitions with the same name.
    // add(num1, num2) {
    //     return num1 + num2;
    // }

    // add(num1, num2, num3) {
    //     return num1 + num2 + num3;
    // }
    add(num1, num2, num3) {
        // This approach allow us to define a single method that can handle different number of arguments.
        if(arguments.length === 1) {
            return num1;
        } else if(arguments.length === 2) {
            return num1 + num2;
        } else if(arguments.length === 3) {
            return num1 + num2 + num3;
        } else {
            return "Invalid number of arguments";
        }
    }
}

const calc = new Calculator();
console.log(calc.add(5));
console.log(calc.add(5, 3));
console.log(calc.add(5, 3, 2));
console.log(calc.add());

// Polymorphism form
// Method overriding: same method name, same parameters, but a different implementation in the child class.
// Method overloading it is the same method name, but different parameters(argument numbers), and different implementation within the same class.

/*
	Mini Exercise #2
	1. Create a MessageComposer class with a sendMessage() method that follows these requirements:
	- Name as argument: return a default message "Hello, [name]!"
	- Name and greeting as arguments: return a custom message "[name] says: [greeting]"
	- Name, greeting, and date as arguments: return a message "[name] says: [greeting] on [date]"
	- Test the sendMessage() method with different combinations of arguments to demonstrate method overloading:

*/

class MessageComposer {
    sendMessage(name, greeting, date) {
        // Check number of arguments to handle different overloading scenarios
        if (arguments.length === 1) {
            return `Hello, ${name}!`;
        } else if (arguments.length === 2) {
            return `${name} says: ${greeting}`;
        } else if (arguments.length === 3) {
            return `${name} says: ${greeting} on ${date}`;
        } else {
            return "Invalid number of arguments";
        }
    }
}

const composer = new MessageComposer();

console.log(composer.sendMessage("John")); // Outputs: Hello, John!
console.log(composer.sendMessage("Jane", "Hi there!")); // Outputs: Jane says: Hi there!
console.log(composer.sendMessage("Joe", "Good morning!", "2023-10-01")); // Outputs: Joe says: Good morning! on 2023-10-01
console.log(composer.sendMessage()); // Outputs: Invalid number of arguments