const inquirer = require('inquirer');
const fs = require("fs");


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
        type: 'intput',
        message: 'Enter office number',
        name: 'officeNumber',
    }
]

const engineerQuestions = [
    {
        type: 'intput',
        message: 'Enter GitHub username',
        name: 'gitHub',
    }
]

const internQuestions = [
    {
        type: 'intput',
        message: 'Enter school affiliation.',
        name: 'school',
    }
]

function init() {
    inquirer.prompt(employeeQuestions)
        .then(response => {
            console.log(response)
            if (response.title == 'Manager')
            {
                inquirer.prompt(managerQuestions)
                    .then(response => {
                        console.log(response)
                    })
            } 
            else if (response.title == 'Engineer')
            {
                inquirer.prompt(engineerQuestions)
                    .then(response => {
                        console.log(response)
                    })
            } 
            else (repsonse.title === 'Intern');
            {
                inquirer.prompt(internQuestions)
                .then(response => {
                    console.log(response)
                })
            }

        })
}

init();



// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
//