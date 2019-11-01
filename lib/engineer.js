const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, githubuser) {
        super(name, email);
        this.github = githubuser;
        this.name = name;
        this.email = email;
        this.role = "Engineer";
        this.id = Math.floor(Math.random() * 500)
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;