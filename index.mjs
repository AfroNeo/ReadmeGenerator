import inquirer from "inquirer";
import fs from "fs/promises";

//My License
//[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)


//include *What the app is for. *How to use the app. *How to install it. *How to report issues. *How to make contributions.

//

// let response = await inquirer

let {description, size} = await inquirer

// let {description, generateLicense} = await inquirer

    .prompt([
        {
            name: 'description',
            message: "Write a description of your project",
            type: 'input',
        },

        {
            name: 'size',
            message: "What size do you need?",
            type: 'list',
            choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
            filter(val) {
                return val.toLowerCase();
            }
            
        },
        
    ])

        // console.log(response);
        
        let readmeText = `# Project Description
        ${description}
        
        ## 2nd largest
        
        //return a string for generate license 
        ${generateLicense(size)}

        
        ###### The smallest heading
        
        `
        
        fs.writeFile("README.md", readmeText )
        // console.log(first_name, last_name);

        function generateLicense(license){
            console.log(license);


            //if user selects license Jumbo, then you want to return a different string.
            if(license === "jumbo"){

                //license should appear on the readme file...video example 23mins in.
                //may need to change Jumbo to jumbo
                return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"

            }

            return ``
        }

        //license > badge > github. 
        //example: Boost Sofware License 1.0 *Find yourself a licence and connect it in the *return using "[here]"


    


