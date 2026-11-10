// 1. Equipment, Bulldozer, TowerCrane, BackLoader
class Equipment {
    constructor(equipmentType) {
        this.equipmentType = equipmentType;
    }

    printInfo() {
        return `Info: ${this.equipmentType}`;
    }
}

class Bulldozer extends Equipment {
    constructor(equipmentType, model, bladeType) {
        super(equipmentType);
        this.model = model;
        this.bladeType = bladeType;
    }

    printInfo() {
        return `${super.printInfo()}\nThe bulldozer ${this.model} has a ${this.bladeType} blade`;
    }
}

class TowerCrane extends Equipment {
    constructor(equipmentType, model, hookRadius, maxCapacity) {
        super(equipmentType);
        this.model = model;
        this.hookRadius = hookRadius;
        this.maxCapacity = maxCapacity;
    }

    printInfo() {
        return `${super.printInfo()}\nThe tower crane ${this.model} has ${this.hookRadius} cm hook radius and ${this.maxCapacity} kg max capacity`;
    }
}

class BackLoader extends Equipment {
    constructor(equipmentType, model, type, tippingLoad) {
        super(equipmentType);
        this.model = model;
        this.type = type;
        this.tippingLoad = tippingLoad;
    }

    printInfo() {
        return `${super.printInfo()}\nThe loader ${this.model} is a ${this.type} loader and has a tipping load of ${this.tippingLoad} lbs.`;
    }
}

// 2. RegularShape, Triangle, Square Classes

class RegularShape {
    constructor(noSides, length) {
        this.noSides = noSides;
        this.length = length;
    }

    perimeter() {
        return `the perimeter is ${this.noSides * this.length}`;
    }

    area() {
        return `the area is ...`;
    }
}

class Triangle extends RegularShape {
    constructor(noSides, length) {
        super(noSides, length);
    }

    perimeter() {
        let p = this.noSides * this.length;
        return `The perimeter is ${p}`;
    }

    area() {
        // Equilateral triangle area formula: (sqrt(3)/4) * length^2
        let a = (Math.sqrt(3) / 4) * Math.pow(this.length, 2);
        return `The area is ${a}`;
    }
}

class Square extends RegularShape {
    constructor(noSides, length) {
        super(noSides, length);
    }

    perimeter() {
        let p = this.noSides * this.length;
        return `The perimeter is ${p}`;
    }

    area() {
        let a = Math.pow(this.length, 2);
        return `The area is ${a}`;
    }
}

// 3. MessageSender Class

class MessageSender {
    send(destination, message) {
        // Check if destination is an email address (contains '@')
        if (typeof destination === 'string' && destination.includes('@')) {
            return `Sending Email to ${destination}: ${message}`;
        }
        // Check if destination is a phone number (string of digits)
        else if (typeof destination === 'string' && /^\d+$/.test(destination)) {
            return `Sending SMS to ${destination}: ${message}`;
        }
        // Check if destination is a push notification object with deviceId
        else if (typeof destination === 'object' && destination !== null && 'deviceId' in destination) {
            return `Sending Push Notification to device ${destination.deviceId}: ${message}`;
        }
        // return invalid destination
        else {
            return "Invalid destination";
        }
    }
}

// TEST CASES / EXPECTED OUTPUTS

// Bulldozer
let bulldozer1 = new Bulldozer("bulldozer", "Brute", "Shovel");
console.log(bulldozer1.printInfo());

// TowerCrane
let towercrane1 = new TowerCrane("tower crane", "Pelican", 100, 1500);
console.log(towercrane1.printInfo());

// BackLoader
let backLoader1 = new BackLoader("back loader", "Turtle", "hydraulic", 1500);
console.log(backLoader1.printInfo());

// Triangle
let triangle1 = new Triangle(3, 10);
console.log(triangle1.perimeter());
console.log(triangle1.area());

// Square
let square1 = new Square(4, 12);
console.log(square1.perimeter());
console.log(square1.area());

// MessageSender
const sender = new MessageSender();
console.log(sender.send("user@example.com", "Hello via Email!"));
console.log(sender.send("1234567890", "Hello via SMS!"));
console.log(sender.send({ deviceId: "abc123" }, "Hello via Push!"));