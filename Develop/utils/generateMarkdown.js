// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') { 
      return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
      return `## License
      This project is licensed under the ${license} license.`;
  }
  return '';    
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.creator}  
  ${renderLicenseBadge(data.license)} 
  ## Table of Contents
  * [Description](#description)
  * [Requirements](#requirements)
  * [Features](#features) 
  * [Usage](#usage) 
  * [Contributors](#contributors) 
  * [Test](#test) 
  * [Questions](#questions) 
  * [License](#license) 
  * [Link](#link) 
  * [Screenshot](#screenshot) 
  ## Description
  ${data.description}
  ## Requirements
  ${data.require}
  ## Features
  ${data.features}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Test
  ${data.test}
  ## Questions
  Please send your questions [here]${data.email} or visit my [Github]
  ## License
  ${renderLicenseSection(data.license)}
  ## Link
  ${data.link}
  ## Screenshot
  ${data.screenshot}


`;
}

module.exports = generateMarkdown;
