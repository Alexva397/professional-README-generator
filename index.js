// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMD = require('./utils/generateMarkdown.js');
const util = require('util');

// // Creating a promise to write file
const writeFileAsync = util.promisify(fs.writeFile);

// // TODO: Create an array of questions for user input
const promptUser = () => {
 return inquirer.prompt([
// inquirer
//     .prompt([
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
        choices: ['MIT', 'GPLv3', 'GPLv2', 'Apache', 'BSD 3', 'Other'],
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

const generateMD = (answers) => 
`# ${answers.title}
    
    
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#test)
- [Questions](#questions)


## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## License
${answers.license}

## Tests
${answers.tests}

## Questions

  If you have any questions regarding the repo, please contact me at one of the following:
    [Github](https://github.com/${answers.github})
    [Email](mailto:${answers.email})
    [LinkedIn](${answers.linkedin})
`;

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {};

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((answers) => console.log(answers))
    .then((answers) => writeFileAsync('./generated/README.md', generateMD(answers)))
    .then(() => console.log('README.md successfully generated!'))
    .catch((err) => console.error(err))
};


// Function call to initialize app
init();
