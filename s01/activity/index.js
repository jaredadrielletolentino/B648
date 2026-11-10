// 1. Create the Contractor class
class Contractor {
    constructor(name, email, contactNo) {
        this.name = name;
        this.email = email;
        this.contactNo = contactNo;
    }

    // Method to display contractor details
    getContractorDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Contact No: ${this.contactNo}`);
    }
}

// 2. Create the Subcontractor class that inherits from Contractor
class Subcontractor extends Contractor {
    constructor(name, email, contactNo, specializations) {
        // Use super() to inherit properties from the Contractor parent class
        super(name, email, contactNo);
        this.specializations = specializations;
    }

    // Method to display all information of the subcontractor including specializations
    getSubConDetails() {
        this.getContractorDetails();
        console.log(`${this.specializations}`);
    }
}

// Create a Contractor instance
let contractorA = new Contractor(
    "Ultra Manpower Services",
    "ultra@manpower.com",
    "09167890123"
);

contractorA.getContractorDetails();

// Create Subcontractor instance 
let subContractorA = new Subcontractor(
    "Ace Bros",
    "acebros@mail.com",
    "09151234567",
    ["gardens", "industrial"]
);

subContractorA.getSubConDetails();

let subContractorB = new Subcontractor(
    "LitC corp",
    "litc@mail.com",
    "091512456789",
    ["schools", "hospitals", "bakeries", "libraries"]
);

subContractorB.getSubConDetails();