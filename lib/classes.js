class Employee {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
    }

    getId() {
    }

    getEmail() {
    }

    getRole() {
        return 'Employee'
    }

}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = this.officeNumber
        this.title = "Manager"
    }

    getRole() {
        return this.title;
    }

}

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub
        this.title = "Engineer"
    }

    getGitHub(){
        return this.gitHub

    }

    getRole(){
        return this.title
    }
}

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
    }

    getSchool(){    
        return this.school
    }

    getRole(){
        return this.school
    }

}