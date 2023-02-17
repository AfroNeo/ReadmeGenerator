import inquirer from "inquirer";
import fs from "fs/promises";

// The tile of my project
//Sections entitled:
// * Description 
// * Table of Contents 
// * Installation 
// * Usage 
// * License 
// * Contributing 
// * Tests 
// * Questions

//My License
//[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)


//include *What the app is for. *How to use the app. *How to install it. *How to report issues. *How to make contributions.

//

// let response = await inquirer

let { description, size } = await inquirer

    // let {description, generateLicense} = await inquirer


    .prompt([
        //Description
        {
            name: 'description',
            type: 'input',
            message: "Write a description of your project",
        },
        // Size (example)
        {
            name: 'size',
            type: 'list',
            message: "What size do you need?",
            choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
            filter(val) {
                return val.toLowerCase();
            }
        },
        //Table of Contents
        {
            name: 'table of contents',
            type: 'list',
            message: "Select from the table of contents",
            choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
            filter(val) {
                return val.toLowerCase();
            }
        },
        //Installation
        {
            name: 'installation',
            type: 'input',
            message: "How to install project",

        },
        //Usage
        {
            name: 'password1',
            type: 'password',
            message: 'Enter a password',
            validate: requireLetterAndNumber,
        },
        //License
        {
            name: 'license',
            type: 'input',
            message: '',

        },
        //Contributions
        {
            name: 'contributions',
            type: '',
            message: '',
        },
        //Tests
        {
            name: 'tests',
            type: '',
            message: '',
        },
        //Questions
        {
            name: 'questions',
            type: '',
            message: '',

        }


    ])

// *! # Largest
// *! ## 2nd largest
// *! ###### The smallest heading

// console.log(response);

let readmeText = `# Project Description
        ${description}
        `

let installation = `## Installation
        ${installationinstructions}
        
        `




// ## 2nd largest


//return a string for generate license 
let licenseSize = `# License Size
        ${generateLicense(size)}
        `


// ###### The smallest heading



fs.writeFile("README.md", readmeText)
// console.log(first_name, last_name);

function generateLicense(license) {
    console.log(license);


    //if user selects license Jumbo, then you want to return a different string.
    if (license === "jumbo") {

        //license should appear on the readme file...video example 23mins in.
        //may need to change Jumbo to jumbo
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"

    }

    // return ``


    if (license === "large") {

    }
}

        //license > badge > github.
        //example: Boost Sofware License 1.0 *Find yourself a licence and connect it in the *return using "[here]"





