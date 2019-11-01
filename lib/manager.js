const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, email, office) {
        super(name, email);
        this.officeNumber = office;
        // this.name = name;
        // this.email = email;
        this.role = "Manager"
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;