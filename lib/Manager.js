const inquirer = require('inquirer');
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter Team Manager name: ',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Enter Team Manager ID: ',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Enter Team Manager email: ',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Enter Team Manager office number: ',
                name: 'officeNumber'
            }
        ])
        .then((data) => {
            data = new Manager(data.name, data.id, data.email, data.officeNumber);
            console.log(data);
        })
        return Manager;
    }
}

module.exports = Manager;