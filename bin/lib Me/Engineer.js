const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Enter Engineer's name: ",
                    name: 'name'
                },
                {
                    type: 'input',
                    message: "Enter Engineer's employee ID: ",
                    name: 'id'
                },
                {
                    type: 'input',
                    message: "Enter Engineer's email address: ",
                    name: 'email'
                },
                {
                    type: 'input',
                    message: "Enter Engineer's GitHub username: ",
                    name: 'github'
                }
            ])
            .then((data) => {
                data = new Engineer(data.name, data.id, data.email, data.github)
                console.log(data);
                
            }) 
        return Engineer;
    }
}

module.exports = Engineer;