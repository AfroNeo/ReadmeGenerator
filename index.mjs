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
            message: "My README generator homework assignment is like having a personal assistant for your software documentation needs. Instead of spending time crafting a polished README file, you can simply input your project information and let the generator do the heavy lifting. With just a few clicks, you'll have a professional-looking README. Whether you prefer a command-line interface or a user-friendly web form, the generator can output your README in the format you need, be it Markdown or HTML. ",
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

        //Installation Instructions
        {
            name: 'installation_instructions',
            type: 'input',
            message: "How to install project",
        },
        
        //Usage Information
        {
            name: 'installation_instructions',
            type: 'input',
            message: "How to install project",
        
        },

        //License / could this be a list of different licenses?
        {
            name: 'license',
            type: 'input',
            message: '',

        },

        //Contribution Guidelines
        {
            name: 'contributions',
            type: '',
            message: '',
        },

        //Test Instructions
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

let readmeText = 

`# Project Description
        ${description}
        `
`## Installation Instructions
        ${installation}
        `
`## Usage Information
        ${usage}
        `
`## Contributions
        ${contributing}
        `
`## Test Instructions
        ${tests}
        `




// ## 2nd largest


//return a string for generate license 
let licenseSize = `# License Size
        ${generateLicense(size)}
        `


// ###### The smallest heading



fs.writeFile("README.md", readmeText)

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

        //EXAMPLE FOR PASSWORD
        // inquirer
        // .prompt([

        //     {
        //         name: 'password1',
        //         type: 'password',
        //         message: 'Enter a password',
        //         validate: requireLetterAndNumber,
        //     },
            
        // ])
        // .then((answers) => console.log(JSON.stringify(answers, null, '  ')));

