// Include packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const util = require('util');

// Creating a promise to write file
const writeFileAsync = util.promisify(fs.writeFile);

// Prompt user for input to generate READMEM.md
const promptUser = () => {
 return inquirer.prompt([
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please provide a breif description of your application and the functionality.',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Please provide detailed installation instructions for you application.',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Please provide any usage information for the user.'
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'What are the conritbutor guidlines?',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please select the license used.',
        choices: ['MIT', 'GPL', 'Apache', 'BSD 3', 'BSD 2', 'none'],
    },
    {
        name: 'test',
        type: 'input',
        message: 'Please provide any information regarding tests on your application.',
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?',
    },
    {
        name: 'linkedin',
        type: 'input',
        message: 'Please provide your LinkedIn URL.',
    },
    {
        name: 'github',
        type: 'input',
        message: 'Please provide your Github username(case sensitive).',
    },
 ])
};


// init to run prompt and return promises
const init = () => {
    promptUser()
    // .then((answers) => console.log(answers.license))
    .then((answers) => writeFileAsync('./generated/README.md', generateMarkdown(answers)))
    .then(() => console.log('README.md successfully generated!'))
    .catch((err) => console.error(err));
};


// Function call to initialize app
init();
