// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  //if license is chosen
  if ((license = "MIT")) {
    return (img.src = "https://img.shields.io/badge/License-MIT-yellow.svg");
  } else if ((license = "GNU GPL v3")) {
    return (img.src = "https://img.shields.io/badge/License-GPLv3-blue.svg");
  } else if ((license = "Mozilla")) {
    return (img.src =
      "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg");
  } else if ((license = "Unlicense")) {
    return (img.src =
      "https://img.shields.io/badge/license-Unlicense-blue.svg");
  } else {
    return "";
  }
  //return the badge image
  // else return empty strang
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //if license is chosen
  //https://opensource.org/licenses/MIT
  //return link to license
  //else return empty string
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //if license is chosen
  //display license text
  //if not return empty string
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
