class employee {
    constructor(name, email) {
        if (!name) {
            throw new Error("You are missing the employee name.");
        }
        if (!email) {
            throw new Error("You are missing the employee email address..");
        }

        if (!role) {
            throw new Error("You are missing the employee role.");
        }

        this.name = name;
        this.email = email;
        this.role = "Employee";
        employee.lastIdUsed++;
        this.id = employee.lastIdUsed;
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.lastIdUsed;
    };

    getEmail() {
        return this.email;
    }

}
employee.lastIdUsed = 0;

module.exports = employee;