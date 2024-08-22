# Cypress Automation for DemoQA

## Description
This repository contains end-to-end test automation script using Cypress for the [DemoQA website](https://demoqa.com/).
The tests cover various functionalities provided on the site, aiming to ensure that all key features work as expected.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Test Cases](#test-cases)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/cypress-demoqa-automation.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd cypress-demoqa-automation
   ```
3. **Install the dependencies:**
   ```sh
   npm install
   ```
4. **Open Cypress:**
   ```sh
   npx cypress open
   ```
   This will open the Cypress Test Runner, where you can see and run all the test cases.

## Usage

To run the tests in headless mode (without opening the browser UI), use the following command:
```sh
npx cypress run
```

To run a specific test file:
```sh
npx cypress run --spec "cypress/e2e/test-file-name.cy.js"
```

Test reports and screenshots are generated in the `cypress/reports` and `cypress/screenshots` directories respectively.

## Test Cases

The tests in this repository cover the following modules of DemoQA:

- **Elements:** Testing form interactions, text box input, radio buttons, checkboxes, etc.
- **Forms:** Validating form submissions and verifying correct error handling.
- **Alerts, Frames & Windows:** Handling alerts, modals, and verifying correct window behavior.
- **Widgets:** Interacting with widgets such as sliders, progress bars, and date pickers.
- **Interactions:** Testing drag-and-drop functionality, resizable elements, and more.

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

- **Avinabh** - *Initial work* - [Your GitHub Profile](https://github.com/yourusername)

---

Feel free to customize the sections to better suit your specific project setup and needs!
