const Intern = require("../lib/internClass")

const generateProfile = profile => {


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
                <li class="list-group-item">Email: ${manager.getEmail()}</li>
                <li class="list-group-item">Office: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`
    }

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
                <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                <li class="list-group-item">Github: ${engineer.GitHub()}</li>
            </ul>
        </div>
    </div>`
    }

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
                <li class="list-group-item">Email: ${intern.getEmail()}</li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`
    }

    const indexHTML = []
    indexHTML.push(profile.filter)

    
}

