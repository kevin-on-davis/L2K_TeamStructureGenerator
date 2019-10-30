const Employee = require("./employee");

class Manager extends Employee() {
    constructor(name, email, office) {
        this.office = office;
        super(name, email);
        this.role = "Manager"
    }
}

module.exports = Manager;