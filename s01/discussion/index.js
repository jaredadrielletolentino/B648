// console.log("Happy Monday");
// Parent -> child class
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let userA = new User("John", "Doe", "john@email.com", "123456");

console.log(userA);
console.log(userA.getFullName());

// Inheritance
// Child class or subclasses
// "extends" keyword to indicate that the class Customer is inheriting the properties and/or methods of the class User
// Note: Inheritance is uni-directional. We cannot pass properties/methods from child to parent
class Customer extends User {
    // With child class, we can add unique properties
    constructor(firstName, lastName, email, password, purchases, paymentMethod) {
        // super() constructor is the constructor of the base/parent class. this allows our subclass to inherit the properties and methods from the parent class.
        // Note: The order of parameters matters. The order in the constructor of your parent class will be the order followed by the super() constructor
        // Note: If you do not provide a variable in the super() constructor, the value will be set as undefined.
        super(firstName, lastName, email, password);
        this.purchases = purchases;
        this.paymentMethod = paymentMethod;
    }

    // We can also add unique methods
    displayPurchases() {
        this.purchases.forEach(purchase => console.log(purchase));

        return this;

    }
}

let customerA = new Customer("Jane", "Doe", "jane@mail.com", "123456", ["Toothpaste", "Toothbrush"], "Debit Card");

console.log(customerA);
console.log(customerA.getFullName());
console.log(customerA.displayPurchases());

class Employee extends User {
    constructor(firstName, lastName, email, password, employeeID, department) {
        // Inherit properties from the parent User class
        super(firstName, lastName, email, password);
        this.employeeID = employeeID;
        this.department = department;
    }

    // method for Employee
    getEmployeeDetails() {
        return `This id ${this.employeeID} belongs to ${this.getFullName()} from ${this.department} department`;
    }
}

// Create a new employee object
let employeeA = new Employee("Alice", "Smith", "alice@email.com", "secret123", "EMP-001", "IT");

console.log(employeeA);
console.log(employeeA.getFullName());
console.log(employeeA.getEmployeeDetails());

// Subclasses as Parent class
// The TeamLead class will inherit the properties/methods of the class Employee and class User because the Employee class inherits from the User class
// Grandparent -> Grandchild inheritance
class TeamLead extends Employee {
    constructor(firstName, lastName, email, password, employeeID, department, role) {

        super(firstName, lastName, email, password, employeeID, department);
        this.role = role;
        this.teamMembers = [];
    }

    addTeamMember(employee) {
        this.teamMembers.push(employee);
        return this;
    }

    displayTeamMemberNames() {
        this.teamMembers.forEach(member => {
            console.log(member.getFullName());
        });
        return this;
    }
}

let teamLead1 = new TeamLead("Jessie", "Smith", "jessie@mail.com", "123456", "IT", "Team Leader");

console.log(teamLead1);
console.log(teamLead1.getFullName());
console.log(teamLead1.getEmployeeDetails());

// 1. Create 3 more Employee elements/objects
let employee2 = new Employee("Bob", "Johnson", "bob@email.com", "pass123", "EMP-003", "IT");
let employee3 = new Employee("Charlie", "Brown", "charlie@email.com", "pass456", "EMP-004", "HR");
let employee4 = new Employee("Andrea", "Torres", "deya@email.com", "pass789", "EMP-005", "Finance");

// 2. Log the employees in the console
console.log(employee2);
console.log(employee3);
console.log(employee4);

// 3. Add team members to teamLead1 using the addTeamMember method
console.log(teamLead1.addTeamMember(employee2));
console.log(teamLead1.addTeamMember(employee3));
console.log(teamLead1.addTeamMember(employee4));

// 4. Display all team members' names using displayTeamMemberNames
console.log("Team Members for " + teamLead1.getFullName() + ":");
teamLead1.displayTeamMemberNames();