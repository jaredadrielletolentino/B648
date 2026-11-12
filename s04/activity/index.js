// 1. RegularShape Abstract Base Class (Encapsulated)
class RegularShape {
    constructor() {
        if (this.constructor === RegularShape) {
            throw new Error("Object can't be instantiated from abstract class");
        }
        if (this.getArea === undefined) {
            throw new Error("Method getArea needs to be implemented");
        }
        if (this.getPerimeter === undefined) {
            throw new Error("Method getPerimeter needs to be implemented");
        }
    }
}

// Square Subclass
class Square extends RegularShape {
    #noSides;
    #length;

    constructor() {
        super();
    }

    setNoSides(noSides) {
        this.#noSides = noSides;
    }

    getNoSides() {
        return this.#noSides;
    }

    setLength(length) {
        this.#length = length;
    }

    getLength() {
        return this.#length;
    }

    getPerimeter() {
        return `The perimeter of the square is ${this.#noSides * this.#length}`;
    }

    getArea() {
        return `The area of the square is ${this.#length * this.#length}`;
    }
}

// Triangle Subclass
class Triangle extends RegularShape {
    #noSides;
    #length;

    constructor() {
        super();
    }

    setNoSides(noSides) {
        this.#noSides = noSides;
    }

    getNoSides() {
        return this.#noSides;
    }

    setLength(length) {
        this.#length = length;
    }

    getLength() {
        return this.#length;
    }

    getPerimeter() {
        return `The perimeter of the triangle is ${this.#noSides * this.#length}`;
    }

    getArea() {
        const area = (Math.sqrt(3) / 4) * (this.#length ** 2);
        return `The area of the triangle is ${area.toFixed(3)}`;
    }
}


// 2 & 3. User Abstract Base Class
class User {
    constructor() {
        if (this.constructor === User) {
            throw new Error("Object can't be instantiated from abstract class");
        }
        if (this.login === undefined) {
            throw new Error("Method login needs to be implemented");
        }
        if (this.register === undefined) {
            throw new Error("Method register needs to be implemented");
        }
        if (this.logout === undefined) {
            throw new Error("Method logout needs to be implemented");
        }
    }
}

// RegularUser Subclass
class RegularUser extends User {
    #name;
    #email;
    #password;

    constructor() {
        super();
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setEmail(email) {
        this.#email = email;
    }

    getEmail() {
        return this.#email;
    }

    setPassword(password) {
        this.#password = password;
    }

    getPassword() {
        return this.#password;
    }

    register() {
        return `${this.#name} has registered.`;
    }

    login() {
        return `${this.#name} has logged in.`;
    }

    logout() {
        return `${this.#name} has logged out`;
    }

    browseJobs() {
        return "There are 10 jobs found";
    }
}

// Admin Subclass
class Admin extends User {
    #name;
    #email;
    #password;
    #hasAdminExpired;

    constructor() {
        super();
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setEmail(email) {
        this.#email = email;
    }

    getEmail() {
        return this.#email;
    }

    setPassword(password) {
        this.#password = password;
    }

    getPassword() {
        return this.#password;
    }

    setHasAdminExpired(hasAdminExpired) {
        this.#hasAdminExpired = hasAdminExpired;
    }

    getHasAdminExpired() {
        return this.#hasAdminExpired;
    }

    register() {
        return `Admin ${this.#name} has registered.`;
    }

    login() {
        return `Admin ${this.#name} has logged in.`;
    }

    logout() {
        return `Admin ${this.#name} has logged out`;
    }

    postJob() {
        return "Job posting added to site";
    }
}


const square1 = new Square();
square1.setNoSides(4);
square1.setLength(65);
console.log(square1.getLength()); // 65
console.log(square1.getPerimeter()); // The perimeter of the square is 260

const triangle1 = new Triangle();
triangle1.setNoSides(3);
triangle1.setLength(15);
console.log(triangle1.getLength()); // 15
console.log(triangle1.getArea()); // The area of the triangle is 97.428

const reguser1 = new RegularUser();
reguser1.setName("Dan");
reguser1.setEmail("dan@mail.com");
reguser1.setPassword("Dan12345");
console.log(reguser1.register()); // Dan has registered.
console.log(reguser1.login()); // Dan has logged in.
console.log(reguser1.browseJobs()); // There are 10 jobs found
console.log(reguser1.logout()); // Dan has logged out

const admin = new Admin();
admin.setName("Joe");
admin.setEmail("admin_joe@mail.com");
admin.setPassword("joe12345");
admin.setHasAdminExpired(false);
console.log(admin.register()); // Admin Joe has registered.
console.log(admin.login()); // Admin Joe has logged in.
console.log(admin.getHasAdminExpired()); // false
console.log(admin.postJob()); // Job posting added to site
console.log(admin.logout()); // Admin Joe has logged out