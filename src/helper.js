const Intern = require("../lib/internClass")
const Manager = require('../lib/managerClass')
const Engineer = require('../lib/engineerClass')
const Employee = require('../lib/employeeClass')


const generateProfile = allTeam => {
// console.log('Getting all the members, and putting them in allTeam variable',allTeam)

    // Creating Manager Card

    const generateManager = manager => {
        return `
        <div class="col-sm-3">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h5>${manager.getRole()}</h5>
                <h6>${manager.getName()}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
    }

    // Creating Engineer Card

    const generateEngineer = engineer => {
        return `
        <div class="col-sm-3">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            <h5>${engineer.getRole()}</h5>
            <h6>${engineer.getName()}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github: <a target="_blank" rel="noopener noreferrer" href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
            </ul>
        </div>
    </div>`
    }

    // Creating Intern Card

    const generateIntern = intern => {
        return `
        <div class="col-sm-3">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h5>${intern.getRole()}</h5>
                <h6>${intern.getName()}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`
    }

    const indexHTML = [];
    //looping through all the team members
    indexHTML.push(allTeam
        //filter out only managers
        .filter(teamMember => teamMember.getRole() === "Manager")
        //create manager card by passing information
        .map(manager => generateManager(manager))
        .join("")
    )
    // console.log(indexHTML); 
    indexHTML.push(allTeam
        //filter out only engineer
        .filter(teamMember => teamMember.getRole() === "Engineer")
        //create engineer card by passing information
        .map(engineer => generateEngineer(engineer))
        .join("")
    )
    // console.log(indexHTML); 
    indexHTML.push(allTeam
        //filter out only intern
        .filter(teamMember => teamMember.getRole() === "Intern")
        //create intern card by passing information
        .map(intern => generateIntern(intern))
        .join("")
    )
    // console.log(indexHTML);
     
    
    return indexHTML.join('');
}

module.exports = allTeam => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
            <link rel="stylesheet" href="../src/style.css">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
    
        <header>
            <h1>My Team</h1>
        </header>
    
        <div class="main">
    
            <div class="container-fluid" id="card-container">
            
            <div class="row" id="card-row">
            ${generateProfile(allTeam)}
            
            
            </div>

            </div>
    
        </div>
    
    </body>
    
    </html>
      
    `;
}