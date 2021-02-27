var inquirer = require('inquirer');
const fs = require('fs');
var repoName = 'readMeBuilder_Week9';
var pagesLink = `https://joedonmalone.github.io/${repoName}/`;



inquirer
.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is your GitHub repository Name?',
    },
    {
      type: 'input',
      name: 'Motivation',
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
      type: 'input',
      name: 'licensing',
      message: "How do you feel your work should be licensed?",
    },
  ])
  .then((data) => {
    const filename = 'README.MD'; //`${data.contact}.md`

    fs.writeFile(filename, readMeText(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

const readMeText = (data) => 
`# ${data.projectTitle}
## Description
- ${data.Motivation}
- Lessons Learned: 
* ${data.problemsSolved}
## Installation
- ${installationSteps}
## Usage
 - ${usage}
## Credits
 - ${creditDue}
## License
 - Licensed under the ${licensing} license.
---
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
## Features
If your project has a lot of features, list them here.
## How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
## Tests`


// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```