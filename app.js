const inquirer = require("inquirer");
const axios = require("axios");

const Employee = require("./lib/Employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const jest = require("jest");

var fs = require("fs");


var card_template = `<div class="card">
    < div class="card-header" ></div >
    <div class="card-body"><div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item"></li>
    <li class="list-group-item"></li>
    <li class="list-group-item"></li>
  </ul>
</div></div>
</div >`;

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
                "Terminator - end team selection"
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
    else if (part1.employeeRole == "Terminator - end team selection") {
        end_condtn = true;
    }
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

function teamMember(employee) {
    if (employee.role == "Manager") {
        return {
            "id": employee.id,
            "name": employee.name,
            "email": employee.email,
            "role": employee.role,
            "specific_info": employee.officeNumber,
            "link_val": "",
            "emaillabel": "Email : ",
            "speclabel": "Office : ",
            "empIcon": `<i class="fa fa-coffee" style="font-size:32px;color:red"></i>`
        };
    }
    else if (employee.role == "Engineer") {
        return {
            "id": employee.id,
            "name": employee.name,
            "email": employee.email,
            "role": employee.role,
            "specific_info": employee.github,
            "link_val": `https://api.github.com/users/${employee.github}`,
            "emaillabel": "Email : ",
            "speclabel": "Github : ",
            "empIcon": `<i class= "fas fa-drafting-compass" style="font-size:32px; color: white" ></i>`
        };
    }
    else if (employee.role == "Intern") {
        return {
            "id": employee.id,
            "name": employee.name,
            "email": employee.email,
            "role": employee.role,
            "specific_info": employee.school,
            "link_val": "#",
            "emaillabel": "Email : ",
            "speclabel": "School : ",
            "empIcon": `<i class="fas fa-user-graduate"  style="font-size:32px; color: white"></i>`
        };
    }
};

function displayTeam(team_roster) {
    return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .wrapper {
         background-color: lightgray;
         padding-top: 100px;
         }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
         background-color: #E9EDEE;
         height: auto;
         padding-top: 30px;
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         }
         h3 {
         font-size: 2em;
         }
         h4 {
         font-size: 1.5em;
         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.2em;
         }
         .container {
         padding: 50px;
         padding-left: 100px;
         padding-right: 100px;
         }

        .photo-header img {
         width: 200px;
         height: 200px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -20px;
         border: 6px solid blue;
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         }

         .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           margin-bottom: 20px;
         }

         .card-header {
           padding: 20px;
           border-radius: 6px;
           background-color: blue;
           color: white;
           margin: 20px;
         }
         
         .col {
         flex: 1;
         text-align: center;
         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .75; 
          } 
         }
      </style>
    </head>

    <body>
         <div class="container" style="display:flex; flex-wrap: wrap; align-content: center; justify-content:space-around">
    <p>${team_roster}</p>
    </div>
      </body>`
};

async function build_team() {
    while (!end_condtn) {
        let part1 = "";
        let part2 = "";
        let part3 = "";
        let dummy_hldr = await getEmp();
    }

    var team_roster = "";

    team.forEach((employee) => {
        let empObject = teamMember(employee);
        var profilePic = "";
        if (empObject.speclabel == "Github : ") {
            const githubUrl = `https://api.github.com/users/${empObject.specific_info}`;

            axios.get(githubUrl).then(function (bio, err) {
                profilePic = `<div class="photo-header img"><img id="profilepic" class="photo-header img" src="${bio.data.avatar_url}"></div>`;
                team_roster = team_roster +
                    `   <div class="card" style="width: 18rem;">
                        <div class="card-header">
                            <p class="h1"> ${empObject.name}</p>
                            <p>${empObject.empIcon} ${empObject.role}</p>
                        </div>
                        <div style = "padding:1vw">`+ profilePic +
                    `<ul class="list-group list-group-flush">
                            <li class="list-group-item">ID : ${empObject.id}</li>
                            <li class="list-group-item">Email : <a style="color:blue" href="${empObject.email}">${empObject.email}</a></li>
                            <li class="list-group-item">${empObject.speclabel}<a style="color:blue" href="${bio.data.html_url}">${empObject.specific_info}</a></li>
                        </ul>
                        </div>
                    </div>`;
                fs.writeFile('./output/team.html', displayTeam(team_roster), (err) => {
                    if (err) throw err;
                });
                if (err) return console.log(err);
            });
        }
        else {
            team_roster = team_roster +
                `<div class="card" style="width: 18rem;">
            <div class="card-header">
                <p class="h1">${empObject.name}</p>
                <p>${empObject.empIcon} ${empObject.role}</p>
            </div>
            <div style = "padding:1vw">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID : ${empObject.id}</li>
                <li class="list-group-item">Email : <a style="color:blue" href="${empObject.email}">${empObject.email}</a></li>
                <li class="list-group-item">${empObject.speclabel}<a href="${empObject.link_val}">${empObject.specific_info}</a></li>
            </ul>
            </div>
        </div>`;
            fs.writeFile('./output/team.html', displayTeam(team_roster), (err) => {
                if (err) throw err;
            });

        }
    });
};

build_team();