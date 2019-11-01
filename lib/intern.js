const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email);
        this.school = school;
        this.name = name;
        this.email = email;
        this.role = "Intern";
        this.id = Math.floor(Math.random() * 500);
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;