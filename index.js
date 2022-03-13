const inquirer = require('inquirer');
const fs = require('fs');

fs.appendFile('./dist/index.html', data, (err) => 
    err ? console.log(err) : console.log('Team created!')
);