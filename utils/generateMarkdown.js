// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      response =
        "[![Licenses](https://img.shields.io/badge/Licene-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Creative":
      response =
        "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Eclipse":
      response =
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GNU":
      response =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "ISC":
      response =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case "MIT":
      response =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla":
      response =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "SIL":
      response =
        "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
      break;
    case "":
      response = "";
      break;
  }
  return response
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      response =
        `[!${license}](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "Creative":
      response =
        `[!${license}: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case "Eclipse":
      response =
        `[!${license}](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case "GNU":
      response =
        `[!${license}: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "ISC":
      response =
        `[!${license}: ISC](https://opensource.org/licenses/ISC)`;
      break;
    case "MIT":
      response =
        `[!${license}: MIT](https://opensource.org/licenses/MIT)`;
      break;
    case "Mozilla":
      response =
        `[!${license}: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case "SIL":
      response =
        `[!${license}: Open Font-1.1](https://opensource.org/licenses/OFL-1.1)`;
      break;
    case "":
      response = "";
      break;
  }
  return response
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `To learn more about ${license} click the following link`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Badges

${renderLicenseBadge(data.license)}

## Table of Contents

* [License](#license)
* [Deployment](#deloyment)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Demonstration](#demonstration)

## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Deployment

* [GitHub Repo](${data.githubRepo})
* [GitHub deployment](${data.deploy})

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributors

${data.contributors}

## Demonstration

${data.demonstration}
`;
}

module.exports = generateMarkdown;
