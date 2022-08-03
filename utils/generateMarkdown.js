// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return `https://choosealicense.com/licenses/apache-2.0/`
  }
  if (license === 'MIT') {
    return `https://choosealicense.com/licenses/mit/`
  }
  if (license === 'Mozilla') {
    return `https://choosealicense.com/licenses/mpl-2.0/` 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `## License
    The application is covered under the following license: ${renderLicenseLink(license)}`;
    } else {
      return ' ';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-blue.png)
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  The application is covered under the following license:
  ${renderLicenseLink(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions}

  Please check out my Github: [${data.username}](https://github.com/${data.username})
  
  If you have questions reach me at my email: ${data.email}.

  `;
}

module.exports = generateMarkdown;
