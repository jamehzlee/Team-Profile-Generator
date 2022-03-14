const inquirer = require('inquirer');
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter Intern name: ',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Enter Intern ID: ',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Enter Intern email: ',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Enter Intern school: ',
                name: 'school'
            }
        ])
        .then((data) => {
            data = new Manager(data.name, data.id, data.email, data.school);
            console.log(data);
        })
        return Intern;
    }
}

module.exports = Intern;