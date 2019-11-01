const inquirer = require("inquirer");
// const axios = require("axios");

const Employee = require("./lib/Employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const jest = require("jest");

var lastIdUsed = 0;
var team = [];
let part2 = "";
let part3 = "";
end_condtn = false;

async function getEmp() {
    let part1 = await inquirer
        .prompt([{
            type: "list",
            message: "Enter employee role:",
            name: "employeeRole",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Terminator"
            ]
        }])
    if (part1.employeeRole == "Manager") {
        let mngrObject = await getManagerInfo();
    }
    else if (part1.employeeRole == "Engineer") {
        let engnrObject = await getEngineerInfo();
    }
    else if (part1.employeeRole == "Intern") {
        let intrnObject = await getInternInfo();
    }
    else if (part1.employeeRole == "Terminator") {
        end_condtn = true;
    }
    console.log(team);
}


async function getManagerInfo() {
    if (team.length < 1) {
        let part2 = await inquirer
            .prompt([{
                message: "Enter employee name:",
                name: "employeeName"
            },
            {
                message: "Enter employee email address:",
                name: "email"
            },
            {
                message: "Enter the manager's office number:",
                name: "office"
            }]);
        const Mngr = new Manager(part2.employeeName, part2.email, part2.office);
        team.push(Mngr);
    }
    else if (team[0].role == "Manager") {
        let part2 = await inquirer.prompt({
            type: "list",
            message: "There is already a manager specified, please select a different role:",
            name: "newRole",
            choices: [
                "Engineer",
                "Intern",
                "Terminator"
            ]
        })
        if (part2.newRole == "Engineer") {
            let part3 = await inquirer
                .prompt([{
                    message: "Enter employee name:",
                    name: "employeeName"
                },
                {
                    message: "Enter employee email address:",
                    name: "email"
                },
                {
                    message: "Enter engineer's github username:",
                    name: "githubusrname"
                }]);
            const Engnr = new Engineer(part3.employeeName, part3.email, part3.githubusrname);
            team.push(Engnr);
        }
        else if (part2.employeeRole == "Intern") {
            let part3 = await inquirer
                .prompt([{
                    message: "Enter employee name:",
                    name: "employeeName"
                },
                {
                    message: "Enter employee email address:",
                    name: "email"
                },
                {
                    message: "Enter intern's school:",
                    name: "school"
                }]);
            const Intrn = new Intern(part2.employeeName, part2.email, part2.school);
            team.push(Intrn);
        }
    }
    else {
        let part2 = await inquirer
            .prompt([{
                message: "Enter employee name:",
                name: "employeeName"
            },
            {
                message: "Enter employee email address:",
                name: "email"
            },
            {
                message: "Enter the manager's office number:",
                name: "office"
            }]);
        const Mngr = new Manager(part2.employeeName, part2.email, part2.office);
        team.unshift(Mngr);
    }
};

async function getEngineerInfo() {
    let part2 = await inquirer
        .prompt([{
            message: "Enter employee name:",
            name: "employeeName"
        },
        {
            message: "Enter employee email address:",
            name: "email"
        },
        {
            message: "Enter engineer's github username:",
            name: "githubusrname"
        }]);

    const Engnr = new Engineer(part2.employeeName, part2.email, part2.githubusrname);
    team.push(Engnr);
};

async function getInternInfo() {
    let part2 = await inquirer
        .prompt([{
            message: "Enter employee name:",
            name: "employeeName"
        },
        {
            message: "Enter employee email address:",
            name: "email"
        },
        {
            message: "Enter intern's school:",
            name: "school"
        }])
    const Intrn = new Intern(part2.employeeName, part2.email, part2.school);
    team.push(Intrn);
};

async function build_team() {
    while (!end_condtn) {
        let part1 = "";
        let part2 = "";
        let part3 = "";
        let dummy_hldr = await getEmp();
    }
    console.log(team);
};

build_team();