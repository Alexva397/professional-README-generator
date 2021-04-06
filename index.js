// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// // Creating a promise to write file
// const writeFileAsync = util.promisify(fs.writeFile);

// // TODO: Create an array of questions for user input
// const promptUser = () => {
//  return inquirer.prompt([
inquirer
    .prompt([
    {
        name: 'title',
        type: 'input',
        question: 'What is the title of your project?',
    },
    {
        name: 'description',
        type: 'input',
        question: 'Please provide a breif description of your application and the functionality.',
    },
    {
        name: 'installation',
        type: 'input',
        question: 'Please provide detailed installation instructions for you application.',
    },
    {
        name: 'usage',
        type: 'input',
        question: 'Please provide any usage information for the user.'
    },
    {
        name: 'contributing',
        type: 'input',
        question: 'What are the conritbutor guidlines?',
    },
    {
        name: 'license',
        type: 'list',
        question: 'Please select the license used.',
        choices: ['MIT', 'GPLv3', 'GPLv2', 'Apache', 'BSD 3'],
    },
    {
        name: 'test',
        type: '',
        question: '',
    },
    {
        name: '',
        type: '',
        question: '',
    },
    {
        name: 'github',
        type: 'input',
        question: 'Please provide your Github username(case sensitive).',
    },
 ])
// };
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {};

// // TODO: Create a function to initialize app
// function init = () => {
//     promptUser()
//     .then()

// };

// // Function call to initialize app
// init();
