var inquirer = require('inquirer');
const fs = require('fs');
var repoName = 'README Builder';

function getLicense(license) {
  switch(license){
    case 'MIT':
      return('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)')
  }
}

inquirer
.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your GitHub repository Name?',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation for building this project?',
    },
    {
      type: 'input',
      name: 'problemsSolved',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'installationSteps',
      message: "What are the Steps to Install this project on the User's current Runtime Environment? i.e. (Step 1. 'some Step' Step 2. 'Some Other Step')",
    },
    {
      type: 'input',
      name: 'usage',
      message: "Where/How Can this application be used?",
    },
    {
      type: 'input',
      name: 'creditDue',
      message: "Are there any contributors to this project?",
    },
    {
      type: 'list',
      name: 'licensing',
      message: "How do you feel your work should be licensed? (probably 'MIT')",
      choices: [ "MIT", new inquirer.Separator(), "NONE" ] //Need to copy licenses and create a template literal to write or reference the 'licenses' object:
    },
    {
      type: 'input',
      name: 'badges',
      message: "List your Badges",
    },
    {
      type: 'input',
      name: 'features',
      message: "Particular features you'd like to add?",
    },
    {
      type: 'input',
      name: 'tests',
      message: "Are there any testing methods you'd like to include?",
    },
  ])
  .then((data) => {
    const filename = 'README.md';
    fs.writeFile(filename, readMeText(data), (err) =>
      err ? console.log(err) : console.log('Success!'))
  })
  .catch( error => {
    if(error) {
      console.log(error);
    }
  });

const readMeText = (data) => 
`# ${data.title}
## Description
- ${data.motivation}
## Table of Contents:

- Lessons Learned:
  * ${data.problemsSolved}
## Installation
- ${data.installationSteps}
## Usage
 - ${data.usage}
## Contributions
 - ${data.creditDue}
## License
 - Licensed under the ${getLicense(data.licensing)} license.
## Badges
 - ${data.badges}
## Features
 - ${data.features}
## Tests
 - ${data.tests}
## Questions?
`

// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```