const inquirer = require('inquirer');
const fs = require("fs");
const path = require('path')
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const Manager = require('./lib/managerClass')
const Engineer = require('./lib/engineerClass')
const Intern = require('./lib/internClass')
const allTeam = []
const helper = require('./src/helper')

const employeeQuestions = [
    {
        type: 'input',
        message: 'Enter employee name.',
        name: "employeeName",
    },

    {
        type: 'input',
        message: 'Enter employee ID.',
        name: 'employeeId',

    },
    {
        type: 'input',
        message: 'Enter employee email.',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Select employee title',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'title',

    }
]

const managerQuestions = [
    {
        type: 'input',
        message: 'Enter office number',
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: 'Would you like to add another employee?',
        choices: ['Yes', 'No'],
        name: 'addAnother',

    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'Enter GitHub username',
        name: 'gitHub',

    },
    {
        type: 'list',
        message: 'Would you like to add another employee?',
        choices: ['Yes', 'No'],
        name: 'addAnother',

    }
]

const internQuestions = [
    {
        type: 'input',
        message: 'Enter school affiliation.',
        name: 'school',
    },
    {
        type: 'list',
        message: 'Would you like to add another employee?',
        choices: ['Yes', 'No'],
        name: 'addAnother',

    }
]

function init() {
    inquirer.prompt(employeeQuestions)
        .then(responseEmployee => {
            console.log(responseEmployee)
            if (responseEmployee.title == 'Manager') {
                inquirer.prompt(managerQuestions)
                    .then(response => {
                        console.log(response)
                        //Creating a manager object using the manager class 
                        const manager = new Manager(responseEmployee.employeeName, responseEmployee.employeeId, responseEmployee.email, response.officeNumber)
                        console.log("Manager Obj Info:", manager)
                        //adding the employee to the allTeam array 
                        allTeam.push(manager)
                        console.log("All team members", allTeam)
                        //Asking if i need to add new member 
                        addAnother(response.addAnother);
                    })
            }
            else if (responseEmployee.title == 'Engineer') {
                inquirer.prompt(engineerQuestions)
                    .then(response => {
                        console.log(response)
                        //Creating an engineer object from engineer class
                        const engineer = new Engineer(responseEmployee.employeeName, responseEmployee.employeeId, responseEmployee.email, response.gitHub)
                        console.log('Engineer Obj Info:', engineer)
                        //Adding the employee to the allTeam array
                        allTeam.push(engineer)
                        console.log("All team members", allTeam)
                        addAnother(response.addAnother);
                    })
            }
            else {
                inquirer.prompt(internQuestions)
                    .then(response => {
                        console.log(response)
                        // Creating intern object from Intern class
                        const intern = new Intern (responseEmployee.employeeName, responseEmployee.employeeId, responseEmployee.email, response.school)
                        console.log('Intern Obj Info:', intern)
                        //Adding the employee to the allTeam array
                        allTeam.push(intern)
                        console.log("All team members", allTeam)
                        addAnother(response.addAnother);
                    })

            }

        })
}

init();


function addAnother(response) {

    if (response === 'Yes') {
        init();
    }
    else {
        console.log('No new emplpoyees to add.')
        generateHTML();
    }
}


function generateHTML() {
    fs.writeFile(outputPath, helper(allTeam), (err) => {
        if (err) throw err; 
        console.log("Created HTML Successfully"); 
    })
}

