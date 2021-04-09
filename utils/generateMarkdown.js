// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = [
    {
      name: 'MIT',
      badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)',
    },
    {
      name: 'Apache',
      badge: '[![License: Apache](https://img.shields.io/badge/License-Apache-blue)](https://www.apache.org/licenses/LICENSE-2.0)',
    },
    {
      name: 'GPL',
      badge: '[![License: GPL](https://img.shields.io/badge/License-GPL-blue)](https://www.gnu.org/licenses/licenses.html)',
    },
    {
      name: 'BSD 3',
      badge: '[![License: BSD3](https://img.shields.io/badge/License-BSD3-blue)](https://opensource.org/licenses/BSD-3-Clause)',
    },
    {
      name: 'BSD 2',
      badge: '[![License: BSD2](https://img.shields.io/badge/License-BSD2-blue)](https://opensource.org/licenses/BSD-2-Clause)',
    },
  ];

  for (let i = 0; i < licenseBadges.length; i++) {
    if (license === licenseBadges[i].name) {
      return licenseBadges[i].badge;
    } 
    // else {
    //   return "";
    // }
  }

}


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(answers) {
  if (answers.license === 'none') {
    return "";
} else {
  return `
## License
${renderLicenseBadge(answers.license)}
`;
}
}

// Function to write MD with user input
const generateMarkdown = (answers) => {
  return `# ${answers.title}
  
${renderLicenseBadge(answers.license)}

  
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
  
${renderLicenseSection(answers)}

## Tests
  ${answers.test}


## Questions

  If you have any questions regarding the repo, please contact me at one of the following:
    
  [Github](https://github.com/${answers.github})
    
  [Email](mailto:${answers.email})
    
  [LinkedIn](${answers.linkedin})
`;
}

module.exports = generateMarkdown;

