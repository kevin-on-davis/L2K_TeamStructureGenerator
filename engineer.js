const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, githubuser) {
        this.githubuser = githubuser;
        super(name, email);
        this.role = "Engineer";
    }

    getGitHub() {
        return this.githubuser;
    }
}

module.exports = Engineer;