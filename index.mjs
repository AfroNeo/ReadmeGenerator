import inquirer from "inquirer";
import fs from "fs/promises";


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

            //if user selects license Jumbo, then you want to return a different string.
            if(license === "Jumbo"){

                //license should appear on the readme file...video example 23mins in.
                //may need to change Jumbo to jumbo
                return 

            }
        }

        //license > badge > github. 
        //example: Boost Sofware License 1.0

    


