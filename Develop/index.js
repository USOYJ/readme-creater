// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');  
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js'); 
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {   type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {   type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },  
    {   type: 'input',
        name: 'link',
        message: 'Please provide a link to your project.'
    },
    {   type: 'input',
        name: 'license',
        message: 'Please provide a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
       type: 'input',
        name: 'require', 
        message: 'List any dependencies required for your project.',
    },
    {
        type: 'input',
        name: 'features',
        message: 'Please list some cool features about this project.',
    },
    {   
        type: 'input',
        name: 'creator',
        message: 'Write your Github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    },  
    {           
        type: 'input',
        name: 'usage',
        message: 'Please provide languages or technologies used for this project.',     
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please provide contributor names. (github user names.)',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project.',
    },
    {   
        type: 'input',
        name: 'screenshot',
        message: 'Please provide a screenshot of your project.',    
    },




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    })  
}

// Function call to initialize app
init();
