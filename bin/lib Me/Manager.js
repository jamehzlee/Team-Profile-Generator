const inquirer = require('inquirer');
const Employee = require("./Employee.js");
const Intern = require('./Intern.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        
        // inquirer
        // .prompt([
        //     {
        //         type: 'input',
        //         message: 'Enter Team Manager name: ',
        //         name: 'name'
        //     },
        //     {
        //         type: 'input',
        //         message: 'Enter Team Manager ID: ',
        //         name: 'id'
        //     },
        //     {
        //         type: 'input',
        //         message: 'Enter Team Manager email: ',
        //         name: 'email'
        //     },
        //     {
        //         type: 'input',
        //         message: 'Enter Team Manager office number: ',
        //         name: 'officeNumber'
        //     }
        // ])
        // .then((data) => {
        //     data = new Manager(data.name, data.id, data.email, data.officeNumber);
        //     console.log(data);
   
        //     inquirer
        //         .prompt([
        //             {
        //                 type: 'list',
        //                 message: 'Choose employee type: ',
        //                 choices: ['Engineer', 'Intern', 'Finish'],
        //                 name: 'employee'
        //             }
        //         ])
        //         .then(data => {
        //             if (data.employee === 'Engineer') {
        //                 console.log('engi');
        //                 let engineer = new Engineer();
        //                 engineer.getRole();
        //             }
        //             if (data.employee === 'Intern') {
        //                 console.log('inter');
        //                 let intern = new Intern();
        //                 intern.getRole();
        //             }
        //             if (data.employee === 'Finish') {
        //                 console.log('finished');
        //             }
        //             else {
        //                 this.getRole();
        //             }
        //         })
        // })
        return Manager;
    }      
}

module.exports = Manager;