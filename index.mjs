import inquirer from "inquirer";
import fs from "fs";

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
const inquirerQuestions = [
    //title
    {
        name: 'title',
        type: 'input',
        message: "What is the title of your project?"
        
        // "My README generator homework assignment is like having a personal assistant for your software documentation needs. Instead of spending time crafting a polished README file, you can simply input your project information and let the generator do the heavy lifting. With just a few clicks, you'll have a professional-looking README. Whether you prefer a command-line interface or a user-friendly web form, the generator can output your README in the format you need, be it Markdown or HTML. ",
    },
    //Description
    {
        name: 'description',
        type: 'input',
        message: "What is the description of your project?"
        
        // "My README generator homework assignment is like having a personal assistant for your software documentation needs. Instead of spending time crafting a polished README file, you can simply input your project information and let the generator do the heavy lifting. With just a few clicks, you'll have a professional-looking README. Whether you prefer a command-line interface or a user-friendly web form, the generator can output your README in the format you need, be it Markdown or HTML. ",
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
        name: 'contents',
        type: 'list',
        message: "Select from the table of contents",
        choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
        filter(val) {
            return val.toLowerCase();
        }
    },

    //Installation Instructions
    {
        name: 'installation',
        type: 'input',
        message: "How do you install?",
    },
    
    //Usage Information
    {
        name: 'usage',
        type: 'input',
        message: "How to use it. Step by step guide",
    
    },

    //License / could this be a list of different licenses?
    {
        name: 'license',
        type: 'input',
        message: "Here, I will say how it was license...",

    },

    //Contribution Guidelines
    {
        name: 'contributions',
        type: '',
        message: 'I am open to contributions for people who want to make changes to the project in terms of usabilty and functionality improvements',
    },

    //Test Instructions
    {
        name: 'test',
        type: '',
        message: '',
    },

    //Questions
    {
        name: 'questions',
        type: '',
        message: '',
    }
]
// let { title, description, size, license, installation, contributing, test } = await inquirer.prompt([

const { title, description, size, contents, usage, installation, license, contributions, test, questions } = await inquirer.prompt(inquirerQuestions)

const readmeText = `# ${title}
## Description
${description}

## Table of Contents
${contents}
`
// put the code all inbetween one ` `
fs.writeFile("README.md", readmeText, (err) => 
    err ? console.log(err) : console.log('Success!')
)
// // *! # Largest
// // *! ## 2nd largest
// // *! ###### The smallest heading

// // console.log(response);

// let readmeText = 

// `# My README Generator
//         ${title}
//         `

// `# Project Description
//         ${description}
//         `

//         //create a function to generate markdown for README

`
        ${renderLicenseBadge(data.license)}
        ${license}
## Table of Contents
* [Description](#description)
* [Installation-Instructions](#installation) 
* [License](#license)
* [Usage-Information](#usage)
* [Contributors](#contributing)
* [Test-Instructions](#test)
* [Questions](#questions)
       

// //         `
// `## Installation Instructions
//         ${installation}
//         `
// `## License
//         ${license}
//         `
// `## Usage Information
//         ${usage}
//         `
// `## Contributors
//         ${contributing}
//         `
// `## Test Instructions
//         ${test}
//         `




// // ## 2nd largest


// //return a string for generate license 
// let licenseSize = `# License Size
//         ${generateLicense(size)}
//         `


// fs.writeFile("README.md", readmeText)

// function generateLicense(license) {
//     console.log(license);


//     //if user selects license Jumbo, then you want to return a different string.
//     if (license === "jumbo") {


    
//         return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"

//     }

//     // return ``


//     if (license === "large") {

//     }
// }

//         //license > badge > github.
//         //example: Boost Sofware License 1.0 *Find yourself a licence and connect it in the *return using "[here]"

//         //EXAMPLE FOR PASSWORD
//         // inquirer
//         // .prompt([

//         //     {
//         //         name: 'password1',
//         //         type: 'password',
//         //         message: 'Enter a password',
//         //         validate: requireLetterAndNumber,
//         //     },
            
//         // ])
//         // .then((answers) => console.log(JSON.stringify(answers, null, '  ')));

