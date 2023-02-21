import inquirer from "inquirer";
import fs from "fs";

// TODO List:
//must get license to generate on readme page!
//how to put two questions and answers under the section questions.
//github and email to become clickable links. 
//must record demo of how it all works


//My License
//[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)


//include *What the app is for. *How to use the app. *How to install it. *How to report issues. *who if any contributed.

//

// let response = await inquirer
const inquirerQuestions = [
    //title
    {
        name: 'title',
        type: 'input',
        message: "What is the title of your project?"

    },
    //Description
    {
        name: 'description',
        type: 'input',
        message: "What is the description of your project?"

    },

    //Table of Contents
    {
        name: 'contents',
        type: 'list',
        message: "We will generate a table of content list for you",
        choices: ['Description', 'Installation', 'Usage', 'License', 'Contributors', 'Tests', 'Questions'],
        filter(val) {
            return val.toLowerCase();
        }
    },

    //Installation Instructions
    {
        name: 'installation',
        type: 'input',
        message: "List any project dependencies",
    },

    //Usage Information
    {
        name: 'usage',
        type: 'input',
        message: "What language is associated with this project?",

    },

    //License
    {
        name: 'license',
        type: 'list',
        message: 'Select a license',
        choices: ['MIT', 'Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License'],
        filter(val) {
            return val.toLowerCase();
        }
    },

    //Contributors
    {
        name: 'contributors',
        type: 'input',
        message: 'Do you have any project contributors?',
    },

    //Test Instructions
    {
        name: 'test',
        type: 'input',
        message: 'What are you testing?',
    },

    //Questions
    {
        name: 'questions',
        type: 'input',
        message: 'What is your GitHub username',
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'

    }



]
// let { title, description, size, license, installation, contributing, test } = await inquirer.prompt([

const { title, description, contents, installation, usage, license, contributors, test, questions } = await inquirer.prompt(inquirerQuestions)

const readmeText = `
# Title
${title}

## Description
${description}

## Contents
${contents}

## Table of Contents
* [Description](#description)
* [Installation-Instructions](#installation) 
* [License](#license)
* [Usage-Information](#usage)
* [Contributors](#contributors)
* [Test-Instructions](#test)
* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributors
${contributors}

## Test
${test}

## Questions
${questions}


`
// Writes a readme file
fs.writeFile("README.md", readmeText, (err) =>
    err ? console.log(err) : console.log('Success!')
)

//         ${renderLicenseBadge(data.license)}
//         ${license}
// ## Table of Contents
// * [Description](#description)
// * [Installation-Instructions](#installation) 
// * [License](#license)
// * [Usage-Information](#usage)
// * [Contributors](#contributing)
// * [Test-Instructions](#test)
// * [Questions](#questions)


// //return a string for generate license 
// let licenseLicense = `# License
//         ${generateLicense(license)}
//         `


// fs.writeFile("README.md", readmeText)

// function generateLicense(license) {
//     console.log(license);

//     if (license === "Apache 2.0 License") {



//         return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"

//     }

// }

