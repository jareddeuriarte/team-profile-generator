const Employee = require('./employeeClass')


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = this.officeNumber
        this.title = "Manager"
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNumber(){
        return this.officeNumber
    }

}

module.exports = Manager;
