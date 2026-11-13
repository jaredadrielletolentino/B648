// Request Class
class Request {
    #requesterEmail;
    #content;
    #dateRequested;

    constructor(requesterEmail, content) {
        this.#requesterEmail = requesterEmail;
        this.#content = content;
        this.#dateRequested = new Date();
    }

    getRequesterEmail() { return this.#requesterEmail; }
    setRequesterEmail(requesterEmail) { this.#requesterEmail = requesterEmail; }

    getContent() { return this.#content; }
    setContent(content) { this.#content = content; }

    getDateRequested() { return this.#dateRequested; }
    setDateRequested(dateRequested) { this.#dateRequested = dateRequested; }
}


// Person Abstract Base Class
class Person {
    constructor() {
        if (this.constructor === Person) {
            throw new Error("Object cannot be created from an abstract class Person");
        }
        if (this.getFullName === undefined) {
            throw new Error("Class must implement getFullName() method");
        }
        if (this.login === undefined) {
            throw new Error("Class must implement login() method");
        }
        if (this.logout === undefined) {
            throw new Error("Class must implement logout() method");
        }

        // Check subclass-specific method implementations
        if (this.constructor.name === "Employee" && this.addRequest === undefined) {
            throw new Error("Class must implement addRequest() method");
        }
        if (this.constructor.name === "TeamLead") {
            if (this.addMember === undefined) {
                throw new Error("Class must implement addMember() method");
            }
            if (this.checkRequests === undefined) {
                throw new Error("Class must implement checkRequests() method");
            }
        }
        if (this.constructor.name === "Admin") {
            if (this.addTeamLead === undefined) {
                throw new Error("Class must implement addTeamLead() method");
            }
            if (this.deactivateTeam === undefined) {
                throw new Error("Class must implement deactivateTeam() method");
            }
        }
    }
}

// Employee Subclass
class Employee extends Person {
    #firstName;
    #lastName;
    #email;
    #department;
    #isActive;
    #requests;

    constructor(firstName, lastName, email, department) {
        super();
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#department = department;
        this.#isActive = true;
        this.#requests = [];
    }

    getFirstName() { return this.#firstName; }
    setFirstName(firstName) { this.#firstName = firstName; }

    getLastName() { return this.#lastName; }
    setLastName(lastName) { this.#lastName = lastName; }

    getEmail() { return this.#email; }
    setEmail(email) { this.#email = email; }

    getDepartment() { return this.#department; }
    setDepartment(department) { this.#department = department; }

    getIsActive() { return this.#isActive; }
    setIsActive(isActive) { this.#isActive = isActive; }

    getRequests() { return this.#requests; }
    setRequests(requests) { this.#requests = requests; }

    getFullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    login() {
        return `${this.#firstName} ${this.#lastName} has logged in`;
    }

    logout() {
        return `${this.#firstName} ${this.#lastName} has logged out`;
    }

    addRequest(content) {
        const newRequest = new Request(this.#email, content);
        this.#requests.push(newRequest);
        return newRequest;
    }
}

// TeamLead Subclass
class TeamLead extends Person {
    #firstName;
    #lastName;
    #email;
    #department;
    #isActive;
    #members;

    constructor(firstName, lastName, email, department) {
        super();
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#department = department;
        this.#isActive = true;
        this.#members = [];
    }

    getFirstName() { return this.#firstName; }
    setFirstName(firstName) { this.#firstName = firstName; }

    getLastName() { return this.#lastName; }
    setLastName(lastName) { this.#lastName = lastName; }

    getEmail() { return this.#email; }
    setEmail(email) { this.#email = email; }

    getDepartment() { return this.#department; }
    setDepartment(department) { this.#department = department; }

    getIsActive() { return this.#isActive; }
    setIsActive(isActive) { this.#isActive = isActive; }

    getMembers() { return this.#members; }
    setMembers(members) { this.#members = members; }

    getFullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    login() {
        return `${this.#firstName} ${this.#lastName} has logged in`;
    }

    logout() {
        return `${this.#firstName} ${this.#lastName} has logged out`;
    }

    addMember(employee) {
        this.#members.push(employee);
    }

    checkRequests(employeeEmail) {
        const member = this.#members.find(m => m.getEmail() === employeeEmail); 
        if (member) {
            return member.getRequests();
        }
        return "No employee found with that email in this team.";
    }
}

// Admin Subclass
class Admin extends Person {
    #firstName;
    #lastName;
    #email;
    #department;
    #teamLeads;

    constructor(firstName, lastName, email, department) {
        super();
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#department = department;
        this.#teamLeads = [];
    }

    getFirstName() { return this.#firstName; }
    setFirstName(firstName) { this.#firstName = firstName; }

    getLastName() { return this.#lastName; }
    setLastName(lastName) { this.#lastName = lastName; }

    getEmail() { return this.#email; }
    setEmail(email) { this.#email = email; }

    getDepartment() { return this.#department; }
    setDepartment(department) { this.#department = department; }

    getTeamLeads() { return this.#teamLeads; }
    setTeamLeads(teamLeads) { this.#teamLeads = teamLeads; }

    getFullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    login() {
        return `${this.#firstName} ${this.#lastName} has logged in`;
    }

    logout() {
        return `${this.#firstName} ${this.#lastName} has logged out`;
    }

    addTeamLead(teamLead) {
        this.#teamLeads.push(teamLead);
    }

    deactivateTeam(teamLeadEmail) {
        const lead = this.#teamLeads.find(tl => tl.getEmail() === teamLeadEmail); 
        if (lead) {
            lead.setIsActive(false); 
            lead.getMembers().forEach(member => {
                member.setIsActive(false); 
            });
            return `Team lead ${lead.getFullName()} and all team members have been deactivated.`;
        }
        return "Team lead not found.";
    }
}


// Object Instantiation and Testing 
// Instantiate 6 employees
const emp1 = new Employee("Alice", "Smith", "alice@mail.com", "Engineering");
const emp2 = new Employee("Bob", "Jones", "bob@mail.com", "Engineering");
const emp3 = new Employee("Charlie", "Brown", "charlie@mail.com", "Marketing");
const emp4 = new Employee("Diana", "Prince", "diana@mail.com", "Marketing");
const emp5 = new Employee("Evan", "Wright", "evan@mail.com", "Sales");
const emp6 = new Employee("Fiona", "Gallagher", "fiona@mail.com", "Sales");

// Instantiate 2 team leads
const tl1 = new TeamLead("George", "Clooney", "george@mail.com", "Engineering");
const tl2 = new TeamLead("Hannah", "Abbott", "hannah@mail.com", "Marketing");

// Instantiate 1 admin
const admin = new Admin("Admin", "Boss", "admin@mail.com", "Management");

// Test all operations
console.log(emp1.login());
console.log(emp1.getFullName());

// Add requests for employee 1
emp1.addRequest("Need new monitor");
emp1.addRequest("Software license update");

// Assign employees to team lead 1
tl1.addMember(emp1);
tl1.addMember(emp2);

// Assign team lead to admin
admin.addTeamLead(tl1);
admin.addTeamLead(tl2);

// Check requests via team lead
console.log("Checking requests for alice@mail.com:");
console.log(tl1.checkRequests("alice@mail.com"));

// Test deactivating team
console.log(admin.deactivateTeam("george@mail.com"));
console.log("Is Alice active after deactivation?", emp1.getIsActive());
console.log("Is George active after deactivation?", tl1.getIsActive());

console.log(emp1.logout());