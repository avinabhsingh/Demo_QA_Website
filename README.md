# Cypress Automation for DemoQA website

## Description
This repository contains end-to-end test automation scripts using Cypress for the [DemoQA website](https://demoqa.com/). The tests cover various functionalities provided on the site, ensuring that all key features work as expected. Also, generating detailed reports using Mochawesome.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Test Cases](#test-cases)
- [Libraries Used](#libraries-used)
- [Report Generation](#report-generation)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)

## Installation

### Prerequisites
- **Node.js and npm**: Ensure that Node.js (version 12 or higher) and npm are installed on your machine. You can download them from [Node.js](https://nodejs.org/).
- **Cypress**: Cypress is a JavaScript-based end-to-end testing framework. It’s installed via npm.

### Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/avinabhsingh/Demo_QA_Website.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd Demo_QA_Website
   ```
3. **Install cypress:**
   ```sh
   npx cypress install
   ```
   This will install Cypress.
4. **Open Cypress:**
   ```sh
   npx cypress open
   ```
   This will open the Cypress Test Runner, where you can see and run all the test cases.
5. **Additional Dependencies**
To install specific libraries used in this project, you may need to manually install them if they are not listed in package.json:

   1. ***Iframe Handling Library:***
      ```sh
      npm install cypress-iframe
      ```
   2. ***Drag-Drop Library:***
      ```sh
      npm install @4tw/cypress-drag-drop
      ```
   3. ***Mochawesome and Report Generator Library:***
      ```sh
      npm install mochawesome mochawesome-report-generator --save-dev
      ```


## Usage

1.	To run the tests in headless mode (without opening the browser UI), use: 
   ```sh
   npx cypress run
   ```

2. To run the tests with specific browser type in headless mode, use:
   ```sh
   npx cypress run --browser chrome
   ```

3. To run a specific test file:
   ```sh
   npx cypress run --spec "cypress/e2e/test-file-name.cy.js"
   ```

4. To run the tests in headed mode (with the browser UI), use:
   ```sh
   npx cypress run --headed
   ``` 

## Test Cases

The tests in this repository cover the following modules of DemoQA:

- **Elements:** Testing textboxes, checkboxes, radio buttons, web tables and links etc.
- **Forms:** Validating form submissions and verifying correct error handling.
- **Alerts, Frames & Windows:** Handling alerts, modals, and verifying correct window behavior etc.
- **Widgets:** Interacting with widgets such as sliders, progress bars, and date pickers etc.
- **Interactions:** Testing drag-and-drop functionality, resizable elements, and more.

## Libraries Used

- **iframe:** For handling iframe elements within the application.
- **drag-and-drop:** For simulating drag-and-drop actions on elements.
- **mochawesome-report-generator:** For generating comprehensive test reports.

## Report Generation

After writing the tests, you can generate a detailed html report using Mochawesome:
```sh
npx cypress run
```

The generated report will be available in the `cypress/reports` directory and can be viewed in a browser.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Authors

- **Avinabh** - *Initial work* - [avinabhsingh](https://github.com/avinabhsingh)
