
// 1 & 2. RegularShape Base Abstract Class
class RegularShape {
    constructor() {
        if (this.constructor === RegularShape) {
            throw new Error("Object can't be instantiated from abstract class RegularShape");
        }
        if (this.getArea === undefined) {
            throw new Error("Method getArea needs to be implemented");
        }
        if (this.getPerimeter === undefined) {
            throw new Error("Method getPerimeter needs to be implemented");
        }
    }
}

// 3. Square Subclass
class Square extends RegularShape {
    constructor(sides, length) {
        super();
        this.sides = sides;
        this.length = length;
    }

    getArea() {
        return `The area of the square is ${this.length * this.length}`;
    }

    getPerimeter() {
        return `The perimeter of the square is ${this.sides * this.length}`;
    }
}



// 4. Food Base Abstract Class
class Food {
    constructor(name, price) {
        if (this.constructor === Food) {
            throw new Error("Object cannot be instantiated from an abstract class Food");
        }
        if (this.getName === undefined) {
            throw new Error("Method getName needs to be implemented");
        }
        this.name = name;
        this.price = price;
    }
}

// 5. Vegetable Subclass
class Vegetable extends Food {
    constructor(name, variety, price) {
        super(name, price);
        this.variety = variety;
    }

    getName() {
        return `${this.name} is of ${this.variety} variety and is priced at ${this.price} pesos.`;
    }
}



// 6. Equipment Base Abstract Class
class Equipment {
    constructor(equipmentType, model) {
        if (this.constructor === Equipment) {
            throw new Error("Object can't be instantiated from abstract class Equipment");
        }
        if (this.printInfo === undefined) {
            throw new Error("printInfo() must be implemented");
        }
        this.equipmentType = equipmentType;
        this.model = model;
    }
}

// 7. Bulldozer Subclass
class Bulldozer extends Equipment {
    constructor(equipmentType, model, bladeType) {
        super(equipmentType, model);
        this.bladeType = bladeType;
    }

    printInfo() {
        return `Info: ${this.equipmentType} The bulldozer ${this.model} has a ${this.bladeType} blade`;
    }
}

// 8. TowerCrane Subclass
class TowerCrane extends Equipment {
    constructor(equipmentType, model, hookRadius, maxCapacity) {
        super(equipmentType, model);
        this.hookRadius = hookRadius;
        this.maxCapacity = maxCapacity;
    }

    printInfo() {
        return `Info: ${this.equipmentType} The tower crane ${this.model} has ${this.hookRadius} cm hook radius and ${this.maxCapacity} kg max capacity`;
    }
}



// 8-10. Appliance Base Class & Subclasses
class Appliance {
    constructor(brand) {
        this.brand = brand;
        this.status = "Off";

        if (this.constructor === Appliance) {
            throw new Error("Object cannot be instantiated from an abstract class Appliance");
        }
        if (this.operate === undefined) {
            throw new Error("Method operate needs to be implemented");
        }
    }

    getStatus() {
        return `The ${this.brand} appliance is currently ${this.status}.`;
    }

    turnOn() {
        this.status = "On";
        console.log(`The ${this.brand} appliance is now turned on.`);
    }

    turnOff() {
        this.status = "Off";
        console.log(`The ${this.brand} appliance is now turned off.`);
    }
}

// 9. Coffeemaker Subclass
class Coffeemaker extends Appliance {
    constructor(brand, cupSize) {
        super(brand);
        this.cupSize = cupSize;
    }

    operate() {
        if (this.status === "On") {
            console.log(`Brewing a ${this.cupSize} cup of coffee with the ${this.brand} CoffeeMaker.`);
        } else {
            console.log(`The ${this.brand} CoffeeMaker is off and cannot operate.`);
        }
    }

    getStatus() {
        return `The ${this.brand} CoffeeMaker is currently ${this.status}. Cup size is set to ${this.cupSize}.`;
    }
}

// 10. Oven Subclass
class Oven extends Appliance {
    constructor(brand, temperature) {
        super(brand);
        this.temperature = temperature;
    }

    operate() {
        if (this.status === "On") {
            console.log(`Baking at ${this.temperature}°C with the ${this.brand} Oven.`);
        } else {
            console.log(`The ${this.brand} Oven is off and cannot operate.`);
        }
    }

    getStatus() {
        return `The ${this.brand} Oven is currently ${this.status} at ${this.temperature}°C.`;
    }
}

// 10. Dishwasher Subclass
class Dishwasher extends Appliance {
    constructor(brand, cycle) {
        super(brand);
        this.cycle = cycle;
    }

    operate() {
        if (this.status === "On") {
            console.log(`Washing dishes using ${this.cycle} cycle with the ${this.brand} Dishwasher.`);
        } else {
            console.log(`The ${this.brand} Dishwasher is off and cannot operate.`);
        }
    }

    getStatus() {
        return `The ${this.brand} Dishwasher is currently ${this.status}. Wash cycle is set to ${this.cycle}.`;
    }
}


// 11. Instantiate objects for coffeemaker, oven, and dishwasher
const coffeeMaker = new Coffeemaker("Breville", "Large");
const oven = new Oven("Samsung", 180);
const dishwasher = new Dishwasher("Bosch", "Eco");

// 12. Check the initial status for each appliance
console.log(coffeeMaker.getStatus());
console.log(oven.getStatus());
console.log(dishwasher.getStatus());

// 13. Turn on the appliances
coffeeMaker.turnOn();
oven.turnOn();
dishwasher.turnOn();

// 14. Operate the appliances
coffeeMaker.operate();
oven.operate();
dishwasher.operate();

// 15. Check the statuses after operation
console.log(coffeeMaker.getStatus());
console.log(oven.getStatus());
console.log(dishwasher.getStatus());