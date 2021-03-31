const generateProfile = profile => {


    // Creating Manager Card

    const generateManager = manager => {
        return `<div class="col-sm-3">
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h5>${manager.getRole()}</h5>
            <h6>${manager.getName()}</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: ${manager.getEmail()}</li>
            <li class="list-group-item">Office:${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>`
    }
    const indexHTML = []
    // indexHTML.push(profile.filter)

}

