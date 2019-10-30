const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, email, school) {
        this.school = school;
        super(name, email);
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;