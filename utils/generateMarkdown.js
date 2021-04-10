// function to creat license badge
const renderLicenseBadge = (answers) => {
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
    {
      name: 'none',
      badge: '',
    },
  ];

  for (let i = 0; i < licenseBadges.length; i++) {
    if (answers === licenseBadges[i].name) {
      return licenseBadges[i].badge;
    } 
  }

}

// function to create license section
const renderLicenseSection = (answers) => {
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

  

## Description
  ${answers.description}



## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#test)
- [Questions](#questions)



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

  [LinkedIn](${answers.linkedin})

  [${answers.email}](mailto:${answers.email})
`;
}

module.exports = generateMarkdown;

