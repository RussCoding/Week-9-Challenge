// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the product usage information'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe how to test the program'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick the license type for your product',
        choices: [
            "Apache",
            "GNU",
            "ISU",
            "MIT",
            "Mozilla",
            "none"
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email'
    }
    


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
