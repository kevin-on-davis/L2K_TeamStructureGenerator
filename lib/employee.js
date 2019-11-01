class employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.role = "Employee";
        this.id = Math.floor(Math.random() * 500);
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.lastIdUsed;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    };

}

module.exports = employee;