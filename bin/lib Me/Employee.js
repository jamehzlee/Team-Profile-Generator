const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        // inquirer.prompt([
        //     {
        //         type: 'input',
        //         message: 'Enter Team Manager name: ',
        //         name: 'name'
        //     },
        //     {
        //         type: 'list',
        //         message: 'Enter Team Manager name: ',
        //         choices: ['Manager', 'Engineer', 'Intern'],
        //         name: 'employee'
        //     }
        // ])
        // .then(data => {
        //     console.log(data.employee);
        //     if (data.employee === 'Manager') {
        //         inquirer.prompt([
        //             {
        //                 type: 'input',
        //                 message: 'Enter something name: ',
        //                 name: 'name2'
        //             }
        //         ])
        //     }
        //     else {
        //         console.log('not manager');
        //     }
        // })
        return 'Employee';
    }
}

module.exports = Employee;