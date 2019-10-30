const inquirer = require("inquirer");
const axios = require("axios");

const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

inquirer
    .prompt([{
        message: "Enter employee name:",
        name: "employeeName"
    },
    {
        message: "Enter employee email address:",
        email: "email"
    },
    {
        type: "list",
        message: "Enter employee role:",
        role: "employeeRole",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    }])
    .then(function (employeeName, email, employeeRole) {
        if (employeeRole.toLowerCase == "manager") {
            const Manager = new Manager(employeeName, email);
        }
        else if (employeeRole.toLowerCase == "engineer") {
            const Manager = new Engineer(employeeName, email);
        }
        else if (employeeRole.toLowerCase == "intern") {
            const Manager = new Intern(employeeName, email);
        }
    })