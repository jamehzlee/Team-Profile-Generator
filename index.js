const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const employee = new Employee();
const manager = new Manager();
const engineer = new Engineer();
const intern = new Intern();

manager.getRole();