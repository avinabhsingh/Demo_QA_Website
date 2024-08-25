// Importing all necessary page object files initially
import functions from "../pageObjects/functions";
import textbox from "../pageObjects/Elements/Textbox";
import checkbox from "../pageObjects/Elements/Checkbox";
import radiobutton from "../pageObjects/Elements/Radiobutton";
import webtables from "../pageObjects/Elements/Webtables";
import button from "../pageObjects/Elements/Button";
import links from "../pageObjects/Elements/Links";
import broken from "../pageObjects/Elements/Broken_Img&Links";
import up_down from "../pageObjects/Elements/Up_Down";
import dynamic from "../pageObjects/Elements/Dynamic";
import practice_form from "../pageObjects/Form/Practice_form";
import browserwindows from "../pageObjects/Alerts_Frames_Windows/BrowserWindows";
import alert from "../pageObjects/Alerts_Frames_Windows/Alerts";
import frame from "../pageObjects/Alerts_Frames_Windows/Frames";
import nested_frames from "../pageObjects/Alerts_Frames_Windows/Nested_frames";
import modal_dialogs from "../pageObjects/Alerts_Frames_Windows/Modal_Dialogs";
import accordian from "../pageObjects/Widgets/Accordian";
import autocomplete from "../pageObjects/Widgets/Auto_Complete";
import datepicker from "../pageObjects/Widgets/DatePicker";
import slider from "../pageObjects/Widgets/Slider";
import progressbar from "../pageObjects/Widgets/Progress_Bar";
import tab from "../pageObjects/Widgets/Tabs";
import tooltips from "../pageObjects/Widgets/Tool_Tips";
import menu from "../pageObjects/Widgets/Menu";
import selectmenu from "../pageObjects/Widgets/Select_Menu";
import sortable from "../pageObjects/Interactions/Sortable";
import selectable from "../pageObjects/Interactions/Selectable";
import resize from "../pageObjects/Interactions/Resizable";
import dropp from "../pageObjects/Interactions/Droppable";
import dragg from "../pageObjects/Interactions/Dragabble";
import login from "../pageObjects/Book Store Application/Login";
import register from "../pageObjects/Book Store Application/Register";
import profile from "../pageObjects/Book Store Application/Profile";

// Setting Cypress to not fail test cases when uncaught exceptions occur
Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // Prevents Cypress from failing the test
});

// Global beforeEach block to apply to all describe blocks in this file
beforeEach(function () {
  // Call a custom function to ignore ads
  functions.ignore_ad();

  // Set the browser screen size to 1920x1080
  cy.viewport(1920, 1080);

  // Visit the demoQA website
  cy.visit("https://demoqa.com/", { timeout: 120000 });
});

// Describing the test suite for Text Box functionality
describe("Text Box Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the ELEMENTS section to expand the menu
    textbox.elements.elements_label().should("be.visible").click();

    // Assertion to ensure the section heading is visible
    textbox.elements.elements_label().should("be.visible");

    // Click on the Textbox option to navigate to the Textbox page
    textbox.elements.textbox_label().should("be.visible").click();

    // Assertion to ensure the Textbox page header label is visible
    textbox.elements.header_label().should("be.visible");
  });

  // Test case to verify the UI elements of the Textbox page
  it("Verify Textbox UI", () => {
    // Verify the label of the Full Name textbox
    textbox.elements.full_name_label().should("have.text", "Full Name");

    // Verify the label of the Email textbox
    textbox.elements.email_label().should("have.text", "Email");

    // Verify the label of the Current Address textbox
    textbox.elements.current_add_label().should("have.text", "Current Address");

    // Verify the label of the Permanent Address textbox
    textbox.elements
      .permanent_add_label()
      .should("have.text", "Permanent Address");
  });

  // Test case to verify the functionality of the Text Box
  it("Verify Text Box Functionality", () => {
    // Store data to be entered inside variables
    const name = "Avi";
    const email = "Avi@gmail.com";
    const cur_add = "Sikkim";
    const per_add = "Mumbai";

    // Type the data into the respective text fields
    textbox.elements.full_name().type(name);
    textbox.elements.email().type(email);
    textbox.elements.current_add().type(cur_add);
    textbox.elements.permanent_add().type(per_add);

    // Click on the submit button
    textbox.elements.submit_btn().should("be.visible").click();

    // Verify that the result dialog box is visible
    textbox.elements.result_box().should("be.visible");

    // Execute wait command to ensure stability before assertions
    cy.wait(2000);

    // Assert that the result dialog contains the correct data entered
    textbox.elements.result_name().should("contain.text", name);
    textbox.elements.result_email().should("contain.text", email);
    textbox.elements.result_curr_add().should("contain.text", cur_add);
    textbox.elements.result_perm_add().should("contain.text", per_add);
  });
});

// Describing the test suite for Check Box functionality
describe("Check Box Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the ELEMENTS section to expand the menu
    textbox.elements.elements_label().should("be.visible").click();

    // Click on the Checkbox option to navigate to the Checkbox page
    checkbox.elements.checkbox_label().should("be.visible").click();
  });

  // Test case to verify the functionality of selecting all checkboxes
  it("Verify checking all the checkboxes", () => {
    // Click on the "Expand All" button to reveal all checkboxes
    checkbox.elements.expand().click();

    // List of checkbox indices that should not be clicked
    const noclick = [0, 1, 4, 5, 9, 14];

    // Iterate over all checkboxes and click each one, except those in the `noclick` list
    checkbox.elements.all_boxes().each(($element, index) => {
      if (!noclick.includes(index)) {
        cy.wrap($element).click(); // Wrap the DOM element to perform actions or assertions on it
      }
    });
  });

  // Test case to verify the functionality of the "Home" checkbox
  it("Verify 'Home' Checkbox functionality", () => {
    // Click on the "Home" checkbox with force to ensure the click occurs even if the element is hidden or overlapped
    checkbox.elements.home_box().check({ force: true });

    // Verify that the result dialog appears after the "Home" checkbox is selected
    checkbox.elements.result().should("exist");

    // Assert that the "Home" checkbox is indeed checked
    checkbox.elements.home_box().should("be.checked");

    // Uncheck the "Home" checkbox with force
    checkbox.elements.home_box().uncheck({ force: true });

    // Verify that the result dialog disappears after the "Home" checkbox is unchecked
    checkbox.elements.result().should("not.exist");

    // Assert that the "Home" checkbox is no longer checked
    checkbox.elements.home_box().should("not.be.checked");
  });

  // Test case to verify the functionality of clicking on dropdowns and checking specific checkboxes
  it("Verify click on all dropdowns & check checkboxes", () => {
    // Click on the first dropdown icon to expand the parent checkbox list
    checkbox.elements.dropdown_icon().eq(0).click();

    // Click on the second dropdown icon to expand the child checkbox list
    checkbox.elements.dropdown_icon().eq(2).click();

    // Click on the third dropdown icon to expand the grandchild checkbox list
    checkbox.elements.dropdown_icon().eq(4).click();

    // Check the checkbox labeled "Classified" with force
    checkbox.elements.classified_checkbox().check({ force: true });

    // Assertion to verify that the result section contains the name "Classified" after it is selected
    checkbox.elements.result().should("contain", "classified");
  });

  // Test case to verify the functionality of expanding and collapsing all dropdowns
  it("Verify Expand all & collapse dropdowns", () => {
    // Click on the "+" (expand all) icon to expand all dropdowns
    checkbox.elements.expand().click();

    // Assertion to verify that all checkboxes are expanded
    checkbox.elements.all_expanded().should("exist");
    cy.wait(3000); // Wait for 3 seconds to ensure all elements have fully expanded

    // Click on the "-" (collapse all) icon to collapse all dropdowns
    checkbox.elements.collapse().click();

    // Assertion to verify that all checkboxes are collapsed
    checkbox.elements.all_expanded().should("not.exist");
  });
});

// Describing the test suite for Radio Button functionality
describe("Radio Button Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the ELEMENTS section
    textbox.elements.elements_label().should("be.visible").click();

    // Click on the Radio Button option
    radiobutton.elements.radiobutton_label().should("be.visible").click();
  });

  it("Verify Radio button UI", () => {
    // Assertion to check the Header visibility and text
    textbox.elements
      .header_label()
      .should("be.visible")
      .and("have.text", "Radio Button");

    // Assertion to check the visibility of clickable options
    radiobutton.elements.enabled_option().should("be.visible");

    // Assertion to check the visibility of non-clickable options
    radiobutton.elements.disbaled_option().should("be.visible");
  });

  it("Verify clicking on all radio buttons", () => {
    // Assertion to ensure no result exists initially
    radiobutton.elements.result().should("not.exist");

    // Click on YES radio button with force and verify it is checked
    radiobutton.elements.yes().click({ force: true });
    radiobutton.elements.yes().should("be.checked");

    // Verify IMPRESSIVE radio button is not checked
    radiobutton.elements.impressive().should("not.be.checked");

    // Verify result contains "Yes"
    radiobutton.elements.result().should("be.visible").and("contain", "Yes");

    // Click on IMPRESSIVE radio button with force and verify it is checked
    radiobutton.elements.impressive().click({ force: true });
    radiobutton.elements.yes().should("not.be.checked");
    radiobutton.elements.impressive().should("be.checked");

    // Verify result contains "Impressive"
    radiobutton.elements
      .result()
      .should("be.visible")
      .and("contain", "Impressive");

    // Click on non-Clickable option "NO" forcefully (though it may not work)
    radiobutton.elements.no().click({ force: true });
  });
});

// Describing the test suite for Web Tables functionality
describe("Web Tables Functionality", function () {
  // Describing the test suite for Text Box functionality
  beforeEach(function () {
    // Click on the ELEMENTS section
    textbox.elements.elements_label().should("be.visible").click();

    // Click on Web Tables option
    webtables.elements.webtable_label().should("be.visible").click();
  });

  it("Verify Web Tables UI", () => {
    // Assertion to check the Header visibility and text
    textbox.elements
      .header_label()
      .should("be.visible")
      .and("have.text", "Web Tables");

    // Assertion to check the visibility and enabled state of the add record button
    webtables.elements.addrecord_btn().should("be.visible").and("be.enabled");

    // Assertion to check the visibility of the search bar
    webtables.elements.searchbar().should("be.visible");

    // List to store column header names
    const column_names = [
      "First Name",
      "Last Name",
      "Age",
      "Email",
      "Salary",
      "Department",
      "Action",
    ];

    // Assertion to check if each column header matches expected text
    webtables.elements.col_headers().each(($element, index) => {
      cy.wrap($element).should(
        "have.text",
        column_names[index] || "Test case failed"
      );
    });

    // Assertion to check the visibility of pagination controls
    webtables.elements.pagination().should("be.visible");
  });

  it("Verify adding records in a table", () => {
    // Click on the add record button
    webtables.elements.addrecord_btn().click();

    // Assertion to check the Registration Form header visibility and text
    webtables.elements
      .form_header()
      .should("be.visible")
      .and("have.text", "Registration Form");

    // List to store field labels
    const label_names = [
      "First Name",
      "Last Name",
      "Email",
      "Age",
      "Salary",
      "Department",
    ];

    // Assertion to check if each field label matches expected text
    webtables.elements.form_fields().each(($element, index) => {
      cy.wrap($element).should(
        "have.text",
        label_names[index] || "Test case failed"
      );
    });

    // Assertion to check the visibility and enabled state of the submit button
    webtables.elements.submit_btn().should("be.visible").and("be.enabled");

    // Enter details in the form fields
    webtables.elements.firstname().type("Avinabh");
    webtables.elements.lastname().type("Singh");
    webtables.elements.age().type("25");
    webtables.elements.email().type("Avi@gmail.com");
    webtables.elements.salary().type("9999999");
    webtables.elements.dept().type("IT");

    // Click on the submit button
    webtables.elements.submit_btn().click();

    // Assertion to verify that the new record is present in the table
    webtables.elements.table_rows().each(($element, index) => {
      if (index == 3) {
        cy.wrap($element).should("contain", "Avinabh");
      }
    });
  });

  it("Verify Register dialog for blank inputs", () => {
    // Click on the add record button
    webtables.elements.addrecord_btn().click();

    // Click on the submit button without filling in any inputs
    webtables.elements.submit_btn().click();

    // Assertion to check if the form is validated (class changes to 'was-validated')
    webtables.elements.register_form().should("have.class", "was-validated");
  });

  it("Verify adding values after validation", () => {
    // Click on the add record button
    webtables.elements.addrecord_btn().click();

    // Click on the submit button without filling in any inputs
    webtables.elements.submit_btn().click();

    // Assertion to check if the form is validated (class changes to 'was-validated')
    webtables.elements.register_form().should("have.class", "was-validated");

    // Enter and verify that the first name field is filled
    webtables.elements.firstname().should("have.attr", "value", "");
    webtables.elements.firstname().type("Avinabh");
    webtables.elements
      .firstname()
      .should("have.attr", "value")
      .and("not.be.empty");

    // Enter and verify that the last name field is filled
    webtables.elements.lastname().should("have.attr", "value", "");
    webtables.elements.lastname().type("Singh");
    webtables.elements
      .lastname()
      .should("have.attr", "value")
      .and("not.be.empty");

    // Enter and verify that the age field is filled
    webtables.elements.age().should("have.attr", "value", "");
    webtables.elements.age().type(34);
    webtables.elements.age().should("have.attr", "value").and("not.be.empty");

    // Enter and verify that the email field is filled
    webtables.elements.email().should("have.attr", "value", "");
    webtables.elements.email().type("Avi@gmail.com");
    webtables.elements.email().should("have.attr", "value").and("not.be.empty");

    // Enter and verify that the salary field is filled
    webtables.elements.salary().should("have.attr", "value", "");
    webtables.elements.salary().type(354784);
    webtables.elements
      .salary()
      .should("have.attr", "value")
      .and("not.be.empty");

    // Enter and verify that the department field is filled
    webtables.elements.dept().should("have.attr", "value", "");
    webtables.elements.dept().type("ECE");
    webtables.elements.dept().should("have.attr", "value").and("not.be.empty");
  });

  it("Verify validation for firstname", () => {
    // Click on the add record button
    webtables.elements.addrecord_btn().click();

    // Type a long string in the firstname field and check if it exceeds maxlength
    webtables.elements
      .firstname()
      .type("ASKNDASDAJSDKJAKSDJ")
      .invoke("attr", "maxlength")
      .then((maxlength) => {
        webtables.elements
          .firstname()
          .invoke("val")
          .then((value) => {
            const inputValueLength = value.length; // Get the length of the input value
            if (inputValueLength <= parseInt(maxlength)) {
              cy.log(
                "Test case passed - Value length is less than or equal to maxlength"
              );
            } else {
              cy.fail("Test case failed - Value length exceeds maxlength");
            }
          });
      });
  });

  it("Verify Email RegEX", () => {
    // Click on the add record button to open the form for adding a new record
    webtables.elements.addrecord_btn().click();

    // Type a valid email address in the email input field
    webtables.elements.email().type("avi123@gmail.com");

    // Assertion to validate that the email address follows the correct format
    webtables.elements
      .email()
      .invoke("val") // Get the value from the email input field
      .then((email) => {
        // Check if the email matches the regular expression for valid emails
        if (
          !email.match(
            /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
          )
        ) {
          // Fail the test if the email format is invalid
          cy.fail("Invalid email");
        }
      });
  });

  it("Verify Salary RegEX", () => {
    // Click on the add record button to open the form for adding a new record
    webtables.elements.addrecord_btn().click();

    // Type a salary value in the salary input field
    webtables.elements.salary().type("9999999");

    // Assertion to validate that the salary contains only digits
    webtables.elements
      .salary()
      .invoke("val") // Get the value from the salary input field
      .then((salary) => {
        // Check if the salary matches the regular expression for digits only
        if (!salary.match(/^\d*$/)) {
          // Fail the test if the salary contains non-digit characters
          cy.fail("Invalid salary");
        }
      });
  });

  it("Verify Age RegEX", () => {
    // Click on the add record button to open the form for adding a new record
    webtables.elements.addrecord_btn().click();

    // Type an age value in the age input field
    webtables.elements.age().type("42");

    // Assertion to validate that the age contains only digits
    webtables.elements
      .age()
      .invoke("val") // Get the value from the age input field
      .then((age) => {
        // Check if the age matches the regular expression for digits only
        if (!age.match(/^\d*$/)) {
          // Fail the test if the age contains non-digit characters
          cy.fail("Invalid age");
        }
      });
  });

  it("Verify searchbar functionality", () => {
    // Declare a constant to store the search data
    const search_data = "Vega";

    // Type the search data in the search bar input field
    webtables.elements.searchbar().type(search_data);
    cy.wait(3000); // Wait for 3 seconds to allow the search results to load

    // Assertion to validate that the search results are correct
    webtables.elements
      .table_rows()
      .eq(0) // Check the first row of the table
      .invoke("text") // Get the text content of the row
      .then((text) => {
        if (text.trim() == "") {
          // If the first row is empty, log that the table body is empty
          cy.log("Table body is empty");

          // Check that the empty table message is displayed
          webtables.elements.empty_table().should("contain", "No rows found");
        } else {
          // Iterate over each row in the table to check the search results
          webtables.elements.table_rows().each((row) => {
            // Get the text content of each row
            cy.wrap(row)
              .invoke("text")
              .then((text) => {
                // Check if the row contains the search data or is blank
                if (text.includes(search_data) || text.trim() === "") {
                  // Log that a valid search result or blank row was found
                  cy.log("Valid search result or blank row");
                } else {
                  // Fail the test if the search results are invalid
                  cy.fail("Invalid search results");
                }
              });
          });
        }
      });
  });

  it("Verify Pagination functionality", () => {
    // Add multiple records to the table by calling a function
    webtables.addMultiRecords();

    // Click on the dropdown to select the number of rows displayed per page
    webtables.elements.pagination_dropdown().select("5");

    // Assertion to check that the page number is set to 1
    webtables.elements.page_number().should("have.attr", "value", 1);

    // Click on the Next Button to go to the next page
    webtables.elements.next_btn().click();

    // Assertion to check that the page number is set to 2
    webtables.elements.page_number().should("have.attr", "value", 2);

    // Click on the Previous Button to go back to the previous page
    webtables.elements.previous_btn().click();

    // Assertion to check that the page number is set back to 1
    webtables.elements.page_number().should("have.attr", "value", 1);
  });

  it("Verify editing a particular record", () => {
    // Click on the edit icon for a specific record to open the edit form
    webtables.elements.edit_record().click();

    // Assert that the register form dialog is visible
    webtables.elements.register_form().should("be.visible");

    // Clear and enter new details in the first name input field
    webtables.elements.firstname().clear().type("Avinabh");

    // Clear and enter new details in the last name input field
    webtables.elements.lastname().clear().type("Singh");

    // Clear and enter new details in the age input field
    webtables.elements.age().clear().type("25");

    // Clear and enter new details in the email input field
    webtables.elements.email().clear().type("Avi@gmail.com");

    // Clear and enter new details in the salary input field
    webtables.elements.salary().clear().type("9999999");

    // Clear and enter new details in the department input field
    webtables.elements.dept().clear().type("IT");

    // Click on the submit button to save the edited record
    webtables.elements.submit_btn().click();

    // Assertion to check that the edited value is displayed in the table
    webtables.elements.table_rows().each(($element, index) => {
      if (index == 2) {
        cy.wrap($element).should("contain", "Avinabh");
      }
    });
  });

  it("Verify deleting a particular record", () => {
    // Click on the delete icon for a specific record
    webtables.elements.delete_record().click();

    // Assertion to check that the deleted record is removed from the table
    webtables.elements.delete_record().should("not.exist");
  });
});

// Describing the test suite for Button functionality
describe("Buttons Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the ELEMENTS section in the sidebar
    textbox.elements.elements_label().should("be.visible").click();

    // Click on the Buttons option in the ELEMENTS section
    button.elements.button_label().should("be.visible").click();

    // Assert that the header label is visible and contains the text "Buttons"
    textbox.elements
      .header_label()
      .should("be.visible")
      .and("contain", "Buttons");
  });

  it("Verify double click functionality", () => {
    // Perform a double-click action on the button
    button.elements.dbclick_btn().dblclick();

    // Assert that the result message for double-click action is displayed and contains "double click"
    button.elements.dbclick_msg().should("contain", "double click");
  });

  it("Verify right click functionality", () => {
    // Perform a right-click action on the button
    button.elements.rightclick_btn().rightclick();

    // Assert that the result message for right-click action is displayed and contains "right click"
    button.elements.rightclick_msg().should("contain", "right click");
  });

  it("Verify dynamic click functionality", () => {
    // Perform a click action on the dynamic button element (third button)
    button.elements.clickme_btn().eq(2).click(); // Clicks the second child

    // Assert that the result message for dynamic click action is displayed and contains "dynamic click"
    button.elements.clickme_msg().should("contain", "dynamic click");
  });
});

// Describing the test suite for Links functionality
describe("Links Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the ELEMENTS section in the sidebar
    textbox.elements.elements_label().should("be.visible").click();

    // Click on the Links option in the ELEMENTS section
    links.elements.links_label().should("be.visible").click();
  });

  it("Verify user is redirected by passing assertion on HTML attributes", () => {
    // Assert that the header label is visible and contains the text "Links"
    textbox.elements
      .header_label()
      .should("be.visible")
      .and("contain", "Links");

    // Click on the first HOME link, which opens in a new tab (target="_blank")
    links.elements.home_link1().should("have.attr", "target", "_blank").click();
  });

  it("Verify user is redirected by passing assertion on URL", () => {
    // Click on the second HOME link, removing the target attribute to ensure it opens in the same tab
    links.elements.home_link2().invoke("removeAttr", "target").click();

    // Access the browser's window object to verify the URL
    cy.window().then((win) => {
      // Assert that the new URL is not equal to the previous one
      expect(win.location.href).to.not.equal("https://demoqa.com/links");
    });
  });

  it('API call for "Created" link -- 201', () => {
    // Intercept the API request made by the link
    cy.intercept({
      method: "GET",
      url: "https://demoqa.com/*",
      hostname: "demoqa.com",
    }).as("api_response_details"); // Alias the intercepted request for later reference

    // Click on the "Created" link to trigger the API call
    links.elements.created_link().click();

    // Wait for the intercepted request and perform assertions
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        // Assert that the API response has a status code of 201 and status message "Created"
        expect(interception.response.statusCode).to.equal(201);
        expect(interception.response.statusMessage).to.equal("Created");
        expect(interception.request.method).to.equal("GET");
      }
    );
  });

  it('API call for "No Content" link -- 204', () => {
    // Intercept the API request made by the link
    cy.intercept({
      method: "GET",
      url: "https://demoqa.com/*",
      hostname: "demoqa.com",
    }).as("api_response_details");

    // Click on the "No Content" link to trigger the API call
    links.elements.nocontent_link().click();

    // Wait for the intercepted request and perform assertions
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        // Assert that the API response has a status code of 204 and status message "No Content"
        expect(interception.response.statusCode).to.equal(204);
        expect(interception.response.statusMessage).to.equal("No Content");
        expect(interception.request.method).to.equal("GET");
      }
    );
  });

  it('API call for "Moved" link -- 301', () => {
    // Intercept the API request made by the link
    cy.intercept({
      method: "GET",
      url: "https://demoqa.com/*",
      hostname: "demoqa.com",
    }).as("api_response_details");

    // Click on the "Moved" link to trigger the API call
    links.elements.moved_link().click();

    // Wait for the intercepted request and perform assertions
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        // Assert that the API response has a status code of 301 and status message "Moved Permanently"
        expect(interception.response.statusCode).to.equal(301);
        expect(interception.response.statusMessage).to.equal(
          "Moved Permanently"
        );
        expect(interception.request.method).to.equal("GET");
      }
    );
  });

  it('API call for "Bad Request" link -- 400', () => {
    // Intercept the API request made by the link
    cy.intercept({
      method: "GET",
      url: "https://demoqa.com/*",
      hostname: "demoqa.com",
    }).as("api_response_details");

    // Click on the "Bad Request" link to trigger the API call
    links.elements.badrequest_link().click();

    // Wait for the intercepted request and perform assertions
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        // Assert that the API response has a status code of 400 and status message "Bad Request"
        expect(interception.response.statusCode).to.equal(400);
        expect(interception.response.statusMessage).to.equal("Bad Request");
        expect(interception.request.method).to.equal("GET");
      }
    );
  });

  it('API call for "Unauthorized" link -- 401', () => {
    // Intercept the API request made by the link
    cy.intercept({
      method: "GET",
      url: "https://demoqa.com/*",
      hostname: "demoqa.com",
    }).as("api_response_details");

    // Click on the "Unauthorized" link to trigger the API call
    links.elements.unautho_link().click();

    // Wait for the intercepted request and perform assertions
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        // Assert that the API response has a status code of 401 and status message "Unauthorized"
        expect(interception.response.statusCode).to.equal(401);
        expect(interception.response.statusMessage).to.equal("Unauthorized");
        expect(interception.request.method).to.equal("GET");
      }
    );
  });

  it('API call for "Forbidden" link -- 403', () => {
    // Intercept the API request made by the link
    cy.intercept({
      method: "GET",
      url: "https://demoqa.com/*",
      hostname: "demoqa.com",
    }).as("api_response_details");

    // Click on the "Forbidden" link to trigger the API call
    links.elements.forbid_link().click();

    // Wait for the intercepted request and perform assertions
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        // Assert that the API response has a status code of 403 and status message "Forbidden"
        expect(interception.response.statusCode).to.equal(403);
        expect(interception.response.statusMessage).to.equal("Forbidden");
        expect(interception.request.method).to.equal("GET");
      }
    );
  });

  it('API call for "Not Found" link -- 404', () => {
    // Intercept the API request made by the link
    cy.intercept({
      method: "GET",
      url: "https://demoqa.com/*",
      hostname: "demoqa.com",
    }).as("api_response_details");

    // Click on the "Not Found" link to trigger the API call
    links.elements.notfound().click();

    // Wait for the intercepted request and perform assertions
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        // Assert that the API response has a status code of 404 and status message "Not Found"
        expect(interception.response.statusCode).to.equal(404);
        expect(interception.response.statusMessage).to.equal("Not Found");
        expect(interception.request.method).to.equal("GET");
      }
    );
  });
});

// Describing the test suite for Images functionality
describe("Broken Links & Images Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the ELEMENTS section in the sidebar
    textbox.elements.elements_label().should("be.visible").click();

    // Click on the Broken Links & Images option in the ELEMENTS section
    broken.elements.broken_label().should("be.visible").click();

    // Assert that the header label is visible
    textbox.elements.header_label().should("be.visible");
  });

  it("Verify Broken Links & Images UI", () => {
    // Assert that the header label contains the text "Broken Links - Images"
    textbox.elements.header_label().should("contain", "Broken Links - Images");

    // Assert that a valid image is visible
    broken.elements.valid_img().should("be.visible");

    // Assert that the default broken image is visible
    broken.elements.broken_img().should("be.visible");
  });

  it("Verify valid Image", () => {
    // Assert that the valid image is visible and its natural width is greater than 0
    broken.elements
      .valid_img()
      .should("be.visible")
      .and("have.prop", "naturalWidth")
      .should("be.greaterThan", 0);
  });

  it("Verify broken Image", () => {
    // Assert that the broken image is visible and its natural width is 0
    broken.elements
      .broken_img()
      .should("be.visible")
      .and("have.prop", "naturalWidth")
      .should("be.equal", 0);
  });
});

// Describing the test suite for Upload and Download functionality
describe("Upload and Download Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the ELEMENTS section in the sidebar
    textbox.elements.elements_label().should("be.visible").click();

    // Click on the Upload and Download option in the ELEMENTS section
    up_down.elements.broken_label().should("be.visible").click();
  });

  it("Verify Upload and Download UI", () => {
    // Assert that the header label contains the text "Upload and Download"
    textbox.elements.header_label().should("contain", "Upload and Download");

    // Assert that the download button is visible
    up_down.elements.download_btn().should("be.visible");

    // Assert that the upload button is visible
    up_down.elements.upload_btn().should("be.visible");
  });

  it("Verify Download functionality", () => {
    // Assert that the download button is visible
    up_down.elements.download_btn().should("be.visible");

    // Click on the download button
    up_down.elements.download_btn().click();

    // Assert that the user is redirected using the _blank attribute
    up_down.elements.download_btn().should("have.attr", "target", "_blank");
  });

  it("Verify Upload functionality", () => {
    // Assert that the upload button is visible
    up_down.elements.upload_btn().should("be.visible");

    // Upload a valid file
    up_down.elements
      .upload_btn()
      .selectFile("C:/Users/avinabh.s/Pictures/img.jpg");

    // Assert that the file path contains the uploaded file name
    up_down.elements.file_path().should("contain", "img.jpg");
  });
});

// Describing the test suite for Dynamic Properties functionality
describe("Dynamic Properties Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the ELEMENTS section in the sidebar
    textbox.elements.elements_label().should("be.visible").click();

    // Click on the Dynamic Properties option in the ELEMENTS section
    dynamic.elements.dynamic_label().should("be.visible").click();

    // Assert that the header label is visible and contains the text "Dynamic Properties"
    textbox.elements
      .header_label()
      .should("be.visible")
      .and("contain", "Dynamic Properties");
  });

  it("Enables button after 5 seconds", () => {
    // Assert that the button is initially disabled
    dynamic.elements.before_enable().should("be.disabled");

    // Wait for 5 seconds
    cy.wait(5000);

    // Assert that the button is enabled after 5 seconds
    dynamic.elements.before_enable().should("not.be.disabled");
  });

  it("Changes text color after 5 seconds wait", () => {
    // Wait for the text color to change after 5 seconds
    cy.wait(5000);

    // Assert that the text color has changed to red
    dynamic.elements
      .color_change()
      .should("have.css", "color", "rgb(220, 53, 69)");
  });

  it("New element is visible after 5 seconds", () => {
    // Assert that the element is initially not visible
    dynamic.elements.after_visible().should("not.exist");

    // Wait for 5 seconds
    cy.wait(5000);

    // Assert that the element is visible after 5 seconds
    dynamic.elements.after_visible().should("be.visible");
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////

// Describing the test suite for Forms functionality
describe("Forms Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the FORM section in the sidebar
    practice_form.elements.form_label().should("be.visible").click();

    // Click on the Practice Form within the FORM section
    practice_form.elements.practice_form_label().click();
  });

  it("Verify Practice Form UI", () => {
    // Assert that the header label is visible and contains the text "Practice Form"
    textbox.elements
      .header_label()
      .should("be.visible")
      .and("have.text", "Practice Form");

    // Assert that all the form labels are visible and have the correct text
    practice_form.elements
      .name_label()
      .should("be.visible")
      .and("have.text", "Name");
    practice_form.elements
      .email_label()
      .should("be.visible")
      .and("have.text", "Email");
    practice_form.elements
      .gender_label()
      .should("be.visible")
      .and("contain", "Gender");
    practice_form.elements
      .mobile_label()
      .should("be.visible")
      .and("contain", "Mobile");
    practice_form.elements
      .dob_label()
      .should("be.visible")
      .and("have.text", "Date of Birth");
    practice_form.elements
      .subject_label()
      .should("be.visible")
      .and("have.text", "Subjects");
    practice_form.elements
      .hobbies_label()
      .should("be.visible")
      .and("have.text", "Hobbies");
    practice_form.elements
      .picture_label()
      .should("be.visible")
      .and("have.text", "Picture");
    practice_form.elements
      .address_label()
      .should("be.visible")
      .and("have.text", "Current Address");
    practice_form.elements
      .state_city_label()
      .should("be.visible")
      .and("have.text", "State and City");

    // Assert that the submit button is visible and enabled
    practice_form.elements.submit_btn().should("be.visible").and("be.enabled");
  });

  it("Verify Practice Form Functionality", () => {
    // Storing values inside variables for use in the form
    const firstname = "Aaksh";
    const lastname = "Yadav";
    const emailid = "aaksh123@gmail.com";
    const mobilenumber = 8745547896;
    const subjects = ["Maths", "Physics", "Computer Science", "Accounting"];
    const yr = "2000"; // Year for Date of Birth
    const mon = "September"; // Month for Date of Birth
    const day = "17"; // Day for Date of Birth
    const hobbies = ["Sports", "Music"]; // Selected hobbies
    const fileloc = "C:/Users/avinabh.s/Pictures/"; // Path for picture upload
    const filename = "img.jpg"; // File name for picture upload
    const addr = "A-5094, D2/Block, Agastya Flats, Mumbai - 380097"; // Current address
    const state = "Rajasthan"; // Selected state
    const city = "Jaipur"; // Selected city

    // Enter first name
    practice_form.elements.first_name().type(firstname);

    // Enter last name
    practice_form.elements.last_name().type(lastname);

    // Enter email
    practice_form.elements.email().type(emailid);

    // Select Gender as Male
    practice_form.elements.male().check({ force: true });

    // Enter Mobile number
    practice_form.elements.number().type(mobilenumber);

    // Choose Date of Birth
    practice_form.elements.dob().click();
    practice_form.elements.year().select(yr); // Select Year
    practice_form.elements.month().select(mon); // Select Month
    practice_form.elements.day().click(); // Select Day

    // Choose Subjects by looping through the list
    subjects.forEach((element) => {
      practice_form.elements.subject().type(`${element}{enter}`);
    });

    // Choose Hobbies
    practice_form.elements.sports().check({ force: true });
    practice_form.elements.music().check({ force: true });

    // Choose Picture to upload
    practice_form.elements.picture_choose().selectFile(fileloc + filename);

    // Enter current address
    practice_form.elements.address().type(addr);

    // Select State
    practice_form.elements.state().click();
    practice_form.elements.rj().click();

    // Select City
    practice_form.elements.city().click();
    practice_form.elements.jaipur().click();

    // Click on submit button
    practice_form.elements.submit_btn().click();

    // Assert that the form result table contains the correct values
    practice_form.elements.result_table().within(() => {
      cy.contains("tr", "Student Name")
        .find("td")
        .eq(1)
        .should("contain", firstname + " " + lastname);
      cy.contains("tr", "Student Email")
        .find("td")
        .eq(1)
        .should("contain", emailid);
      cy.contains("tr", "Gender").find("td").eq(1).should("contain", "Male");
      cy.contains("tr", "Mobile")
        .find("td")
        .eq(1)
        .should("contain", mobilenumber);
      cy.contains("tr", "Date of Birth")
        .find("td")
        .eq(1)
        .should("contain", day + " " + mon + "," + yr);
      cy.contains("tr", "Subjects")
        .find("td")
        .eq(1)
        .should("contain", subjects[0])
        .and("contain", subjects[1])
        .and("contain", subjects[2])
        .and("contain", subjects[3]);
      cy.contains("tr", "Hobbies")
        .find("td")
        .eq(1)
        .should("contain", hobbies[0])
        .and("contain", hobbies[1]);
      cy.contains("tr", "Picture").find("td").eq(1).should("contain", filename);
      cy.contains("tr", "Address").find("td").eq(1).should("contain", addr);
      cy.contains("tr", "State and City")
        .find("td")
        .eq(1)
        .should("contain", state + " " + city);
    });
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////
// Describing the test suite for Browser Windows functionality
describe("Browser Windows Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Alerts, Frame & Windows" section to navigate
    browserwindows.elements.alertsframewindows().should("be.visible").click();

    // Click on the "Browser Windows" option to open the correct page
    browserwindows.elements.browserwindows_label().click();

    // Assert that the header label is correct
    textbox.elements.header_label().should("have.text", "Browser Windows");
  });

  it("Verify New Tab Functionality", () => {
    // Intercept the window.open method to prevent the actual opening of a new tab/window
    cy.window().then((win) => {
      // Replace the window.open function with a stub
      cy.stub(win, "open").as("newtabcall");
    });

    // Click on the "New Tab" button
    browserwindows.elements.newtab().click();

    // Assert that the window.open method was called exactly once
    cy.get("@newtabcall").should("have.been.calledOnce");
  });

  it("Verify New Window Functionality", () => {
    // Intercept the window.open method
    cy.window().then((win) => {
      cy.stub(win, "open").as("newwincall");
    });

    // Click on the "New Window" button
    browserwindows.elements.newwindow().click();

    // Assert that the window.open method was called with a URL string that contains "/sample"
    cy.get("@newwincall").should(
      "be.calledWith",
      Cypress.sinon.match("/sample")
    );
  });

  it("Verify New Window Message Functionality", () => {
    // Intercept the window.open method
    cy.window().then((win) => {
      cy.stub(win, "open").as("winmsg");
    });

    // Click on the "New Window Message" button
    browserwindows.elements.winmsg().click();

    // Assert that the window.open method was called
    cy.get("@winmsg").should("be.called");
  });
});

// Describing the test suite for Alerts functionality
describe("Alerts Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Alerts, Frame & Windows" section to navigate
    browserwindows.elements.alertsframewindows().should("be.visible").click();

    // Click on the "Alerts" option to open the correct page
    alert.elements.alerts_label().click();

    // Assert that the header label is correct
    textbox.elements.header_label().should("have.text", "Alerts");
  });

  it("Verify Alert Functionality", () => {
    // Trigger the alert by clicking the alert button
    alert.elements.alert_msg().click();

    // Listen for the alert window and assert the message content
    cy.on("window:alert", (message) => {
      expect(message).to.equal("You clicked a button");
    });
  });

  it("Verify Alert after 5 second wait Functionality", () => {
    // Stub the window alert function to capture and assert the alert
    cy.window().then((win) => {
      cy.stub(win, "alert").as("alertmsg");
    });

    // Click on the button that triggers an alert after 5 seconds
    alert.elements.wait_alert().click();
    cy.wait(5000); // Wait for the alert to appear

    // Assert that the alert was called with the expected message
    cy.get("@alertmsg").should(
      "be.calledWith",
      "This alert appeared after 5 seconds"
    );
  });

  it("Verify OK button for Confirm Alert", () => {
    // Click on the confirm button that triggers a confirmation dialog
    alert.elements.confirm_btn().click();

    // Listen for the confirm window and assert the message content
    cy.on("window:confirm", (confirmMessage) => {
      expect(confirmMessage).to.equal("Do you confirm action?");
      // Click on the OK button in the confirm dialog
      return true;
    });

    // Assert that the confirmation result displays "You selected Ok"
    alert.elements
      .confirm_result()
      .should("be.visible")
      .and("have.text", "You selected Ok");
  });

  it("Verify Cancel button for Confirm Alert", () => {
    // Click on the confirm button that triggers a confirmation dialog
    alert.elements.confirm_btn().click();

    // Listen for the confirm window and assert the message content
    cy.on("window:confirm", (confirmMessage) => {
      expect(confirmMessage).to.equal("Do you confirm action?");
      // Click on the Cancel button in the confirm dialog
      return false;
    });

    // Assert that the confirmation result displays "You selected Cancel"
    alert.elements
      .confirm_result()
      .should("be.visible")
      .and("have.text", "You selected Cancel");
  });

  it("Verify Prompt Alert Functionality", () => {
    // Access the window object and stub the prompt method to return a fixed value
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Avinabh");
    });

    // Click on the prompt button to trigger the prompt dialog
    alert.elements.prompt_btn().click();

    // Assert that the prompt result displays the entered text
    alert.elements
      .prompt_result()
      .should("be.visible")
      .and("have.text", "You entered Avinabh");
  });
});

// Describing the test suite for Frames functionality
describe("Frames Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Alerts, Frame & Windows" section to navigate
    browserwindows.elements.alertsframewindows().should("be.visible").click();

    // Click on the "Frames" option to open the frames page
    frame.elements.frames_label().click();

    // Assert that the header label is correct
    textbox.elements.header_label().should("have.text", "Frames");

    // Wait added to ensure proper wait time for all the frames to load
    cy.wait(3000);
  });

  it("Verify Frames functionality", () => {
    // Assert on the width and height of the first frame
    frame.elements
      .frame1()
      .should("have.attr", "width", "500px")
      .and("have.attr", "height", "350px");

    // Switch to the first iframe and assert on its content
    frame.elements.frame1().then((iframe1) => {
      cy.wrap(iframe1)
        .should("have.prop", "contentDocument")
        .and("exist")
        .then((Doc_Content) => {
          // Assert that the body of the iframe contains the expected text
          cy.wrap(Doc_Content)
            .find("body")
            .should("contain.text", "This is a sample page");
        });
    });

    // Assert on the width and height of the second frame
    frame.elements
      .frame2()
      .should("have.attr", "width", "100px")
      .and("have.attr", "height", "100px");

    // Switch to the second iframe and assert on its content
    frame.elements.frame2().then((iframe2) => {
      cy.wrap(iframe2)
        .should("have.prop", "contentDocument")
        .and("exist")
        .then((Doc_Content) => {
          // Assert that the body of the iframe contains the expected text
          cy.wrap(Doc_Content)
            .find("body")
            .should("contain.text", "This is a sample page");
        });
    });
  });
});

// Describing the test suite for Nested Frames functionality
describe("Nested Frames", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Alerts, Frame & Windows" section to navigate
    browserwindows.elements.alertsframewindows().should("be.visible").click();

    // Click on the "Nested Frames" option to open the nested frames page
    nested_frames.elements.nested_frames_label().click();

    // Assert that the header label is correct
    textbox.elements.header_label().should("have.text", "Nested Frames");

    // Wait added to ensure proper wait time for all the frames to load
    cy.wait(3000);
  });

  it("Verify Nested Frames functionality", () => {
    // Assert that the parent frame contains the expected text
    nested_frames.elements
      .parent_frame()
      .should("contain.text", "Parent frame");

    // Find the child iframe within the parent frame and assert on its content
    nested_frames.elements
      .parent_frame()
      .find('iframe[srcdoc="<p>Child Iframe</p>"]')
      .should("be.visible")
      .then((cframe) => {
        // Assert that the child iframe's document exists and contains the expected text
        cy.wrap(cframe)
          .should("have.prop", "contentDocument")
          .and("exist")
          .then((Doc_Content) => {
            cy.wrap(Doc_Content)
              .find("body")
              .should("contain.text", "Child Iframe");
          });
      });
  });
});

// Describing the test suite for Modal Dialogs functionality
describe("Modal Dialogs Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Alerts, Frame & Windows" section to navigate
    browserwindows.elements.alertsframewindows().should("be.visible").click();

    // Click on the "Modal Dialogs" option to open the modal dialogs page
    modal_dialogs.elements.modal_dialog_label().click();

    // Assert that the header label is correct
    textbox.elements.header_label().should("have.text", "Modal Dialogs");
  });

  it("Verify Small Modal Dialog functionality", () => {
    // Click on the small modal dialog button
    modal_dialogs.elements.small_modal_dialog_btn().click();

    // Assert that the small modal dialog is visible
    modal_dialogs.elements.small_modal_dialog().should("be.visible");

    // Assert that the small dialog heading is correct
    modal_dialogs.elements
      .small_dialog_head()
      .should("have.text", "Small Modal");

    // Assert that the small dialog content is correct
    modal_dialogs.elements
      .dialog_content()
      .should("have.text", "This is a small modal. It has very less content");

    // Click on the Close button
    modal_dialogs.elements.close_small_btn().click();

    // Assert that the small modal dialog is closed
    modal_dialogs.elements.small_modal_dialog().should("not.exist");
  });

  it("Verify Large Modal Dialog functionality", () => {
    // Click on the large modal dialog button
    modal_dialogs.elements.large_modal_dialog_btn().click();

    // Assert that the large modal dialog is visible
    modal_dialogs.elements.large_modal_dialog().should("be.visible");

    // Assert that the large dialog heading is correct
    modal_dialogs.elements
      .large_dialog_head()
      .should("have.text", "Large Modal");

    // Assert that the large dialog content contains "Lorem Ipsum"
    modal_dialogs.elements.dialog_content().should("contain", "Lorem Ipsum");

    // Click on the Close button
    modal_dialogs.elements.close_large_btn().click();

    // Assert that the large modal dialog is closed
    modal_dialogs.elements.large_modal_dialog().should("not.exist");
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Describing the test suite for Accordian functionality
describe("Accordian Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Widgets" section to navigate
    accordian.elements.widgets_label().should("be.visible").click();

    // Click on the "Accordian" option to open the accordian page
    accordian.elements.accordian_label().click();

    // Assert that the header label is correct
    textbox.elements.header_label().should("have.text", "Accordian");
  });

  it("Verify first Accordian functionality", () => {
    // Assert the visibility and text of the first accordion section header
    accordian.elements
      .section1_head()
      .should("be.visible")
      .and("have.text", "What is Lorem Ipsum?");

    // Assert the visibility and content of the first accordion section body
    accordian.elements
      .section1_body()
      .should("be.visible")
      .and(
        "contain",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      );
  });

  it("Verify second Accordian functionality", () => {
    // Click on the second accordion header to expand it
    accordian.elements.section2_head().click();

    // Assert that the first section collapses
    accordian.elements.section1_body().should("not.be.visible");

    // Assert the visibility and text of the second accordion section header
    accordian.elements
      .section2_head()
      .should("be.visible")
      .and("have.text", "Where does it come from?");

    // Assert the visibility and content of the second accordion section body
    accordian.elements
      .section2_body()
      .should("be.visible")
      .and(
        "contain",
        "Contrary to popular belief, Lorem Ipsum is not simply random text."
      );
  });

  it("Verify third Accordian functionality", () => {
    // Click on the third accordion header to expand it
    accordian.elements.section3_head().click();

    // Assert that the first section collapses
    accordian.elements.section1_body().should("not.be.visible");

    // Assert the visibility and text of the third accordion section header
    accordian.elements
      .section3_head()
      .should("be.visible")
      .and("have.text", "Why do we use it?");

    // Assert the visibility and content of the third accordion section body
    accordian.elements
      .section3_body()
      .should("be.visible")
      .and("contain", "(injected humour and the like).");
  });
});

// Describing the test suite for Auto Complete functionality
describe("Auto Complete Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Widgets" section to navigate
    accordian.elements.widgets_label().should("be.visible").click();

    // Click on the "Auto Complete" option to open the auto-complete page
    autocomplete.elements.autocomplete_label().click();

    // Assert that the header label is correct
    textbox.elements.header_label().should("have.text", "Auto Complete");
  });

  it("Enter multiple Colors using autocomplete", () => {
    // Assert the initial instruction for multiple color input
    autocomplete.elements
      .multiple()
      .should("contain", "Type multiple color names");

    // Call the function to add multiple colors
    autocomplete.add_multi_colors();
  });

  it("Verify removing added multiple colors", () => {
    // Call the function to add multiple colors
    autocomplete.add_multi_colors();

    // Variable to store the number of added colors
    const totalcolors = 5;

    // Loop through to remove each color
    for (let i = 0; i < totalcolors; i++) {
      autocomplete.elements.close_multi().eq(0).click();
    }

    // Assert that suggestions are not visible after removal
    autocomplete.elements.suggestions().should("not.exist");

    // Assert that the textbox is empty
    autocomplete.elements.multi_textbox().should("have.value", "");
  });

  it("Enter single color", () => {
    // Assert the initial instruction for single color input
    autocomplete.elements.single().should("contain", "Type single color name");

    // Enter a single color starting with "g"
    autocomplete.elements.single().type("g");

    // Assert that suggestions contain "Magenta" and select it
    autocomplete.elements
      .suggestions()
      .contains("Magenta")
      .should("exist")
      .type("{enter}");

    // Assert that the single color textbox contains "Magenta"
    autocomplete.elements.single().should("contain", "Magenta");

    // Enter another single color starting with "b"
    autocomplete.elements.single().type("b");

    // Assert that suggestions contain "Black" and select it
    autocomplete.elements
      .suggestions()
      .contains("Black")
      .should("exist")
      .type("{enter}");

    // Assert that the single color textbox contains "Black"
    autocomplete.elements.single().should("contain", "Black");

    // Assert that the single color textbox does not contain the previous color
    autocomplete.elements.single().should("not.contain", "Magenta");
  });
});

// Describing the test suite for Date Picker functionality
describe("Date Picker Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Widgets" section to navigate
    accordian.elements.widgets_label().should("be.visible").click();

    // Click on the "Date Picker" option to open the date picker page
    datepicker.elements.datepicker_label().click();

    // Assert that the header label is correct
    textbox.elements.header_label().should("have.text", "Date Picker");
  });

  it("Verify Date Functionality", () => {
    // Constants to store a date
    const yr = "2003";
    const mon = "March";
    const day = "16";

    // Choose the date picker field
    datepicker.elements.date().click();

    // Select Year
    datepicker.elements.year().select(yr);

    // Select Month
    datepicker.elements.month().select(mon);

    // Click on Day
    datepicker.elements.day().click();

    // Assert that the date field shows the selected date
    datepicker.elements.date().should("have.value", "03/16/2003");
  });

  it("Verify Date and Time Functionality", () => {
    // Constants to store a date
    const yr = "2015";
    const mon = "October";
    const day = "18";

    // Choose the date and time picker field
    datepicker.elements.dateandtime().click();

    // Click on the year dropdown
    datepicker.elements.year_dropdown().click();

    // Number of clicks to scroll to the desired year
    const clicks = 4;

    // Click the navigation button to scroll to the desired year
    for (let i = 0; i < clicks; i++) {
      datepicker.elements.year_scroll().click();
    }

    // Click on the specific year from the dropdown list
    datepicker.elements.year_select().contains(yr).click();

    // Click on the month dropdown
    datepicker.elements.month_dropdown().click();

    // Click on the specific month from the dropdown list
    datepicker.elements.month_select().contains(mon).click();

    // Click on Day
    datepicker.elements.day().click();

    // Select the specific time
    datepicker.elements.time().contains("4:45").click();

    // Assert that the date and time field shows the selected date and time
    datepicker.elements
      .dateandtime()
      .should("have.value", "October 18, 2015 4:45 AM");
  });
});

// Describing the test suite for Slider functionality
describe("Slider Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Widgets" section to navigate
    accordian.elements.widgets_label().should("be.visible").click();

    // Click on the "Slider" option to open the slider page
    slider.elements.slider_label().click();

    // Assert that the header label is correct
    textbox.elements.header_label().should("have.text", "Slider");
  });

  it("Verify Slider Functionality", () => {
    // Wait for 2 seconds to ensure all elements are loaded
    cy.wait(2000);

    // Set the value of the slider directly using the 'invoke' command
    slider.elements.range_slider().invoke("val", 75).trigger("change");

    // Wait for 3 seconds to ensure the value is updated
    cy.wait(3000);

    // Get the value attribute of the slider input element
    slider.elements
      .range_slider()
      .invoke("val")
      .then((value) => {
        // Assert that the value retrieved from the slider matches 75
        expect(value).to.equal("75");
      });
  });
});

// Describing the test suite for Progress Bar functionality
describe("Progress Bar Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Widgets" section to navigate
    accordian.elements.widgets_label().should("be.visible").click();

    // Click on the "Progress Bar" option to open the progress bar page
    progressbar.elements.progressbar_label().click();
  });

  it("Verify Progress Bar UI", () => {
    // Assert that the header label is correct
    textbox.elements.header_label().should("have.text", "Progress Bar");

    // Assert that the progress bar element is visible
    progressbar.elements.bar().should("be.visible");

    // Assert that the start/stop button is clickable
    progressbar.elements.bar_btn().should("be.enabled");
  });

  it("Verify Progress Bar Functionality", () => {
    // Get the initial text of the progress bar
    let initialText;
    progressbar.elements
      .bar()
      .invoke("text")
      .then((text) => {
        initialText = text;

        // Assert that the progress bar starts at 0%
        progressbar.elements.bar().should("have.text", text);
      });

    // Click on the start button to begin progress
    progressbar.elements.bar_btn().click();

    // Assert that the start button is now changed to "Stop"
    progressbar.elements.bar_btn().should("have.text", "Stop");

    // Wait for 2.5 seconds to allow progress to move
    cy.wait(2500);

    // Click on the stop button to halt progress
    progressbar.elements.bar_btn().click();

    // Get the text of the progress bar again
    progressbar.elements
      .bar()
      .invoke("text")
      .then((text) => {
        // Assert that the text has changed, indicating progress was made
        expect(text).to.not.equal(initialText);
      });
  });

  it("Verify Reset Progress Bar Functionality", () => {
    // Get the initial text of the progress bar
    let initialText;
    progressbar.elements
      .bar()
      .invoke("text")
      .then((text) => {
        initialText = text;
      });

    // Click on the start button to begin progress
    progressbar.elements.bar_btn().click();

    // Wait for 12 seconds to allow the progress to reach 100%
    cy.wait(12000);

    // Get the text of the progress bar again
    progressbar.elements
      .bar()
      .invoke("text")
      .then((text) => {
        // Assert that the text shows 100%, indicating completion
        expect(text).to.equal("100%");
      });

    // Assert that the start button is now changed to "Reset"
    progressbar.elements
      .reset_btn()
      .should("be.visible")
      .and("have.text", "Reset");

    // Click on the reset button to reset progress
    progressbar.elements.reset_btn().click();

    // Assert that the progress is reset to 0%
    progressbar.elements.bar().should("have.text", "0%");
  });
});

// Describing the test suite for Tabs functionality
describe("Tabs Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Widgets" section to navigate
    accordian.elements.widgets_label().should("be.visible").click();

    // Click on the "Tabs" option to open the tabs page
    tab.elements.tab_label().click();
  });

  it("Verify Tabs UI", () => {
    // Assert that the header label is correct
    textbox.elements.header_label().should("have.text", "Tabs");

    // Assert that the 'What' tab is selected and its content is visible
    tab.elements.what_tab().should("have.attr", "aria-selected", "true");
    tab.elements.what_content().should("be.visible");

    // Assert that the 'origin' tab is not selected and its content is not visible
    tab.elements.origin_tab().should("have.attr", "aria-selected", "false");
    tab.elements.origin_content().should("not.be.visible");

    // Assert that the 'use' tab is not selected and its content is not visible
    tab.elements.use_tab().should("have.attr", "aria-selected", "false");
    tab.elements.use_content().should("not.be.visible");

    // Assert that the 'more' tab is disabled and its content is not visible
    tab.elements.more_tab().should("have.attr", "aria-disabled", "true");
    tab.elements.more_content().should("not.be.visible");
  });

  it("Verify Tabs Functionality", () => {
    // Click on the 'Origin' tab to view its content
    tab.elements.origin_tab().click();

    // Assert that the 'origin' tab is selected and its content is visible
    tab.elements.origin_tab().should("have.attr", "aria-selected", "true");
    tab.elements.origin_content().should("be.visible");

    // Assert that the 'What' tab is not selected and its content is not visible
    tab.elements.what_tab().should("have.attr", "aria-selected", "false");
    tab.elements.what_content().should("not.be.visible");
  });
});

// Describing the test suite for Tool Tips functionality
describe("Tool Tips Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Widgets" section to navigate
    accordian.elements.widgets_label().should("be.visible").click();

    // Click on the "Tool Tips" option to open the tool tips page
    tooltips.elements.tooltip_label().click();
  });

  it("Verify Tool Tips UI", () => {
    // Assert that the header label is correct
    textbox.elements.header_label().should("have.text", "Tool Tips");

    // Assert that the button for tool tips is visible
    tooltips.elements.tip_btn().should("be.visible");

    // Assert that the text field for tool tips is visible
    tooltips.elements.tip_textfield().should("be.visible");

    // Assert that there are exactly two links in the tool tips text
    tooltips.elements.tip_text().find("a[href]").should("have.length", 2);
  });

  it("Verify Tool Tip function for button", () => {
    // Hover over the button to trigger the tool tip
    tooltips.elements.tip_btn().trigger("mouseover").invoke("show");

    // Assert that the tool tip is visible and contains the correct text
    tooltips.elements
      .tooltip_result()
      .should("be.visible")
      .and("have.text", "You hovered over the Button");
  });

  it("Verify Tool Tip function for textfield", () => {
    // Hover over the text field to trigger the tool tip
    tooltips.elements.tip_textfield().trigger("mouseover").invoke("show");

    // Assert that the tool tip is visible and contains the correct text
    tooltips.elements
      .tooltip_result()
      .should("be.visible")
      .and("have.text", "You hovered over the text field");
  });

  it("Verify Tool Tip function for text", () => {
    // Hover over the first link in the tool tips text to trigger the tool tip
    tooltips.elements
      .tip_text()
      .find("a[href]")
      .eq(0)
      .trigger("mouseover")
      .invoke("show");

    // Assert that the tool tip is visible and contains the correct text for the first link
    tooltips.elements
      .tooltip_result()
      .should("be.visible")
      .and("have.text", "You hovered over the Contrary");

    // Hover over the second link in the tool tips text to trigger the tool tip
    tooltips.elements
      .tip_text()
      .find("a[href]")
      .eq(1)
      .trigger("mouseover")
      .invoke("show");

    // Assert that the tool tip is visible and contains the correct text for the second link
    tooltips.elements
      .tooltip_result()
      .should("be.visible")
      .and("contain.text", "You hovered over the 1.10.32");
  });
});

// Describing the test suite for Menu functionality
describe("Menu Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Widgets" section to navigate
    accordian.elements.widgets_label().should("be.visible").click();

    // Click on the "Menu" option to open the menu page
    menu.elements.menu_label().click();

    // Assertion to check the header label
    textbox.elements.header_label().should("have.text", "Menu");
  });

  it("Verify Menu Functionality", () => {
    // Wait for 2 seconds to ensure the page is fully loaded
    cy.wait(2000);

    // Locate and interact with nested menu items
    menu.elements
      .menu_id()
      .contains("a", "Main Item 2") // Locate the element containing "Main Item 2"
      .parent() // Move up to the parent <li> element
      .find("a") // Find the child <a> elements within the parent <li>
      .contains("SUB SUB LIST »") // Locate the element containing "SUB SUB LIST"
      .parent() // Move up to the parent <li> element
      .find("a") // Find the child <a> elements within the parent <li>
      .contains("Sub Sub Item 1") // Locate the link for "Sub Sub Item 1"
      .should("exist") // Assert that "Sub Sub Item 1" exists
      .click({ force: true }); // Click on the link with force to ensure it clicks
  });
});

// Describing the test suite for Select Menu functionality
describe("Select Menu Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Widgets" section to navigate
    accordian.elements.widgets_label().should("be.visible").click();

    // Click on the "Select Menu" option to open the select menu page
    selectmenu.elements.selectmenu_label().click();
  });

  it("Verify Select Menu UI", () => {
    // Assertion to check the header label
    textbox.elements.header_label().should("have.text", "Select Menu");

    // Assert that various label names are correctly visible in the menu section
    selectmenu.elements
      .entire_menu()
      .should("contain", "Select Value")
      .and("contain", "Select One")
      .and("contain", "Old Style Select Menu")
      .and("contain", "Multiselect drop down")
      .and("contain", "Standard multi select");

    // Assert visibility of various dropdown elements
    selectmenu.elements.group_opt().should("be.visible");
    selectmenu.elements.select_one().should("be.visible");
    selectmenu.elements.old_select().should("be.visible");
    selectmenu.elements.multi_select().should("be.visible");
    selectmenu.elements.standard_select().should("be.visible");
  });

  it("Verify Select Value dropdown functionality", () => {
    // Click on the "Select Value" dropdown
    selectmenu.elements
      .group_opt()
      .invoke("css", "overflow", "visible") // Make sure dropdown is visible
      .click();

    // Assert that the dropdown menu is visible
    selectmenu.elements.dropdown_menu().should("be.visible");

    // Assert that the dropdown contains two groups
    selectmenu.elements
      .dropdown_group1()
      .should("be.visible")
      .and("contain", "Group 1");
    selectmenu.elements
      .dropdown_group2()
      .should("be.visible")
      .and("contain.text", "Group 2");

    // Click on an option within the dropdown menu
    selectmenu.elements.dropdown_menu().contains("A root option").click();

    // Assert that the selected option is displayed in the dropdown
    selectmenu.elements.group_opt().should("contain", "A root option");
  });

  it("Verify Select One dropdown functionality", () => {
    // Click on the "Select One" dropdown
    selectmenu.elements.select_one().click();

    // Assert that the dropdown menu is visible
    selectmenu.elements.dropdown_menu().should("be.visible");

    // Assert that the dropdown contains the expected heading
    selectmenu.elements
      .select_dropdown_heading()
      .should("be.visible")
      .and("contain", "Pick one title");

    // Click on an option within the dropdown menu
    selectmenu.elements.dropdown_menu().contains("Prof.").click();

    // Assert that the selected option is displayed in the dropdown
    selectmenu.elements.select_one().should("contain", "Prof.");
  });

  it("Verify Old Style Select Menu functionality", () => {
    // Click on the "Old Style Select Menu" and select an option
    selectmenu.elements.old_select().select("White");

    // Assert that the selected option is displayed in the "Old Style Select Menu"
    selectmenu.elements.old_select().should("contain", "White");
  });

  it("Verify Multiselect dropdown functionality", () => {
    // Click on the "Multiselect" dropdown
    selectmenu.elements.multi_select().click();

    // Assert that the dropdown menu is visible
    selectmenu.elements.dropdown_menu().should("be.visible");

    // List of colors to select
    const colors = ["Red", "Blue", "Black", "Green"];

    // Select multiple options from the dropdown
    colors.forEach((color) => {
      selectmenu.elements.dropdown_menu().contains(color).click();
    });

    // Assert that each color is selected
    cy.wrap(colors).each((color) => {
      selectmenu.elements.multi_select().should("contain", color);
    });
  });

  it("Verify Standard Multiselect functionality", () => {
    // Select multiple options using the standard multiselect
    selectmenu.elements
      .standard_select()
      .select(["Volvo", "Saab", "Audi"], { multiple: true });
  });
});

/////////////////////////////////////////////////////////////////////////////////////////

// Describing the test suite for Sortable functionality
describe("Sortable Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Interactions" section to navigate
    sortable.elements.interactions_label().should("be.visible").click();

    // Click on the "Sortable" option to open the sortable page
    sortable.elements.sortable_label().click();
  });

  it("Verify Sortable UI", () => {
    // Assertion to check the header label
    textbox.elements.header_label().should("have.text", "Sortable");

    // Assert that both List and Grid tabs are visible
    sortable.elements.list_tab().should("be.visible");
    sortable.elements.gird_tab().should("be.visible");

    // Assert that the List section is visible
    sortable.elements.sort_list().should("be.visible");

    // Define list of numbers expected in the sortable list
    const numbers = ["One", "Two", "Three", "Four", "Five", "Six"];

    // Assert that each number from One to Six is present in the list
    cy.wrap(numbers).each((num) => {
      sortable.elements.sort_list().should("contain", num);
    });
  });

  it("Verify Sortable List Functionality", () => {
    // Define list of numbers for testing
    const numbers = ["One", "Two", "Three", "Four", "Five", "Six"];

    // Rearrange elements in reverse order
    for (let i = 0; i < numbers.length - 1; i++) {
      // Drag the current element to the last position
      sortable.elements.sort_list().contains(numbers[i]).trigger("mousedown"); // Mouse down on the current element
      sortable.elements
        .sort_list()
        .contains("Six")
        .trigger("mousemove")
        .trigger("mouseup"); // Mouse move and mouse up on the last element

      // Assert that the order of elements has been rearranged correctly
      sortable.elements
        .list_num()
        .eq(0)
        .should("contain", numbers[i + 1]);
    }
  });

  it("Verify Sortable Grid Functionality", () => {
    // Switch the tab to Grid section
    sortable.elements.gird_tab().click();
    cy.wait(1000); // Wait for the transition to complete

    // Define list of numbers for testing
    const numbers = [
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];

    // Rearrange elements in reverse order
    for (let i = 0; i < numbers.length - 1; i++) {
      // Drag the current element to the last position
      sortable.elements
        .sort_grid()
        .contains(numbers[i])
        .trigger("mousedown", { which: 1 }); // Mouse down on the current element
      sortable.elements
        .sort_grid()
        .contains("Nine")
        .trigger("mousemove")
        .trigger("mouseup"); // Mouse move and mouse up on the last element

      cy.wait(500); // Wait for the rearrangement to complete
      // Assert that the order of elements has been rearranged correctly
      sortable.elements
        .list_num()
        .eq(6)
        .should("contain", numbers[i + 1]); // eq is set to 6 because there are total 15 elements (including list & grid)
    }
  });
});

// Describing the test suite for Selectable functionality
describe("Selectable Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Interactions" section to navigate
    sortable.elements.interactions_label().should("be.visible").click();

    // Click on the "Selectable" option to open the selectable page
    selectable.elements.selectable_label().click();
  });

  it("Verify Selectable UI", () => {
    // Assertion to check the header label
    textbox.elements.header_label().should("have.text", "Selectable");

    // Assert that both List and Grid tabs are visible
    selectable.elements.list_tab().should("be.visible");
    selectable.elements.gird_tab().should("be.visible");

    // Assert that the List section is visible
    selectable.elements.sort_list().should("be.visible");
  });

  it("Verify Selectable List Functionality", () => {
    // Loop through to select elements in the list
    for (let i = 1; i <= 3; i++) {
      selectable.elements
        .options_list()
        .eq(i)
        .click()
        .should("have.css", "background-color", "rgb(0, 123, 255)"); // Assert that the background color changes to blue
    }

    // Loop through again to deselect elements in the list
    for (let i = 1; i <= 3; i++) {
      selectable.elements
        .options_list()
        .eq(i)
        .click()
        .should("have.css", "background-color", "rgb(255, 255, 255)"); // Assert that the background color changes back to white
    }
  });

  it("Verify Selectable Grid Functionality", () => {
    // Switch the tab to Grid section
    sortable.elements.gird_tab().click();
    cy.wait(1000); // Wait for the transition to complete

    // Loop through to select elements in the grid
    for (let i = 6; i < 12; i++) {
      selectable.elements
        .options_list()
        .eq(i)
        .click()
        .should("have.css", "background-color", "rgb(0, 123, 255)"); // Assert that the background color changes to blue
    }

    // Loop through again to deselect elements in the grid
    for (let i = 6; i < 12; i++) {
      selectable.elements
        .options_list()
        .eq(i)
        .click()
        .should("have.css", "background-color", "rgb(255, 255, 255)"); // Assert that the background color changes back to white
    }
  });
});

// Describing the test suite for Resizable functionality
describe("Resizable Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Interactions" section to navigate
    sortable.elements.interactions_label().should("be.visible").click();

    // Click on the "Resizable" option to open the resizable page
    resize.elements.resizable_label().click();
  });

  it("Verify Resizable UI", () => {
    // Assertion to check the header label
    textbox.elements.header_label().should("have.text", "Resizable");

    // Assert that the restricted resizable box is visible
    resize.elements.restrict_box().should("be.visible");

    // Assert that the unrestricted resizable box is visible
    resize.elements.unrestricted_box().should("be.visible");
  });

  it("Verify restricted resizable functionality", () => {
    // Assert initial width and height of the restricted box
    resize.elements
      .restrict_box()
      .should("have.css", "width", "200px")
      .and("have.css", "height", "200px");

    // Resize the element to its minimum width and height
    resize.elements
      .resize_cursor()
      .eq(0)
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { clientX: 0, clientY: 0 })
      .trigger("mouseup");

    // Assert width and height are set to minimum
    resize.elements
      .restrict_box()
      .should("have.css", "width", "150px")
      .and("have.css", "height", "150px");

    // Resize the element to its maximum width and height
    resize.elements
      .resize_cursor()
      .eq(0)
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { clientX: 9999, clientY: 9999 })
      .trigger("mouseup");

    // Assert width and height are set to maximum
    resize.elements
      .restrict_box()
      .should("have.css", "width", "500px")
      .and("have.css", "height", "300px");
  });

  it("Verify unrestricted resizable functionality", () => {
    // Assert initial width and height of the unrestricted box
    resize.elements
      .unrestricted_box()
      .should("have.css", "width", "200px")
      .and("have.css", "height", "200px");

    // Resize the element to any width and height
    resize.elements
      .resize_cursor()
      .eq(1)
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { clientX: 951, clientY: 1423 })
      .trigger("mouseup")
      .then(() => {
        // Assert that the width and height have changed from their initial values
        resize.elements
          .unrestricted_box()
          .should("have.css", "width")
          .not.eq("200px");
        resize.elements
          .unrestricted_box()
          .should("have.css", "height")
          .not.eq("200px");
      });
  });
});

// Describing the test suite for Droppable functionality
describe("Droppable Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Call to ignore_ad function to handle any ads on the page
    functions.ignore_ad();

    // Set the screen size to 1920x1080 for consistency
    cy.viewport(1920, 1080);

    // Visit the DemoQA website
    cy.visit("https://demoqa.com/");

    // Click on the "Interactions" section to navigate
    sortable.elements.interactions_label().should("be.visible").click();

    // Click on the "Droppable" option to open the droppable page
    dropp.elements.droppable_label().click();
  });

  it("Verify Droppable UI", () => {
    // Assertion to check the header label
    textbox.elements.header_label().should("have.text", "Droppable");

    // Assert all tab labels are visible
    dropp.elements.simple_tab().should("be.visible").and("contain", "Simple");
    dropp.elements.accept_tab().should("be.visible").and("contain", "Accept");
    dropp.elements
      .prevent_tab()
      .should("be.visible")
      .and("contain", "Prevent Propogation");
    dropp.elements
      .revert_tab()
      .should("be.visible")
      .and("contain", "Revert Draggable");

    // Assert the drag box is visible with the correct text
    dropp.elements.dragbox().should("be.visible").and("contain", "Drag me");

    // Assert the drop box is visible with the correct text
    dropp.elements.dropbox().should("be.visible").and("contain", "Drop here");
  });

  it("Verify Single droppable functionality", () => {
    // Drag and drop the drag box into the drop box
    dropp.elements.dragbox().trigger("mousedown", { which: 1 });
    dropp.elements
      .dropbox()
      .eq(0)
      .trigger("mousemove")
      .trigger("mouseup", { force: true });

    cy.wait(2000); // Wait for the drop action to complete

    // Assert the drop box text and background color change
    dropp.elements
      .dropbox()
      .eq(0)
      .should("have.text", "Dropped!")
      .and("have.css", "background-color", "rgb(70, 130, 180)");
  });

  it("Verify Acceptable box functionality", () => {
    // Switch to the "Accept" tab
    dropp.elements.accept_tab().click();
    cy.wait(1000);

    // Drag and drop the acceptable box into the drop box
    dropp.elements.acceptbox().trigger("mousedown", { which: 1 });
    dropp.elements
      .dropbox()
      .eq(1)
      .trigger("mousemove")
      .trigger("mouseup", { force: true });

    // Assert the drop box text and background color change
    dropp.elements
      .dropbox()
      .eq(1)
      .should("have.text", "Dropped!")
      .and("have.css", "background-color", "rgb(70, 130, 180)");
  });

  it("Verify not acceptable box functionality", () => {
    // Switch to the "Accept" tab
    dropp.elements.accept_tab().click();
    cy.wait(1000);

    // Drag and drop the non-acceptable box into the drop box
    dropp.elements.noacceptbox().trigger("mousedown", { which: 1 });
    dropp.elements
      .dropbox()
      .eq(1)
      .trigger("mousemove")
      .trigger("mouseup", { force: true });

    // Assert that the non-acceptable box is not accepted in the drop box
    dropp.elements
      .dropbox()
      .eq(1)
      .should("not.have.text", "Dropped!")
      .and("not.have.css", "background-color", "rgb(70, 130, 180)");
  });

  it("Verify prevent propagation functionality", () => {
    // Switch to the "Prevent Propagation" tab
    dropp.elements.prevent_tab().click();
    cy.wait(1000);

    // Drag and drop the greed box into the no-greed drop box
    dropp.elements.greed_dragbox().trigger("mousedown", { which: 1 });
    dropp.elements
      .nogreed_innerbox()
      .trigger("mousemove")
      .trigger("mouseup", { force: true });

    // Assert that the box is dropped in both parent and inner drop boxes and text and color change
    dropp.elements
      .nogreedbox()
      .should("contain", "Dropped!")
      .and("have.css", "background-color", "rgb(70, 130, 180)");
    dropp.elements
      .nogreed_innerbox()
      .should("have.text", "Dropped!")
      .and("have.css", "background-color", "rgb(70, 130, 180)");
  });

  it("Verify Revert Draggable functionality", () => {
    // Switch to the "Revert Draggable" tab
    dropp.elements.revert_tab().click();
    cy.wait(1000);

    // Get the initial position of the revert box
    dropp.elements.revertbox().then((box) => {
      const initial_pos = box.position();

      // Drag and drop the revert box into the drop box
      dropp.elements.revertbox().trigger("mousedown", { which: 1 });
      dropp.elements
        .dropbox()
        .eq(2)
        .trigger("mousemove")
        .trigger("mouseup", { force: true });

      cy.wait(1000); // Wait for the drop action to complete

      // Assert the drop box text and color change
      dropp.elements
        .dropbox()
        .eq(2)
        .should("have.text", "Dropped!")
        .and("have.css", "background-color", "rgb(70, 130, 180)");

      // Assert that the revert box has returned to its initial position
      dropp.elements.revertbox().then((box) => {
        expect(box.position()).to.deep.equal(initial_pos); // Use deep.equal for object comparison
      });
    });
  });

  it("Verify No Revert Draggable functionality", () => {
    // Switch to the "Revert Draggable" tab
    dropp.elements.revert_tab().click();
    cy.wait(1000);

    // Get the initial position of the no-revert box
    dropp.elements.norevertbox().then((box) => {
      const initial_pos = box.position();

      // Drag and drop the no-revert box into the drop box
      dropp.elements.norevertbox().trigger("mousedown", { which: 1 });
      dropp.elements
        .dropbox()
        .eq(2)
        .trigger("mousemove")
        .trigger("mouseup", { force: true });

      cy.wait(1000); // Wait for the drop action to complete

      // Assert the drop box text and color change
      dropp.elements
        .dropbox()
        .eq(2)
        .should("have.text", "Dropped!")
        .and("have.css", "background-color", "rgb(70, 130, 180)");

      // Assert that the no-revert box has not returned to its initial position
      dropp.elements.norevertbox().then((box) => {
        expect(box.position()).not.to.deep.equal(initial_pos); // Use deep.equal for object comparison
      });
    });
  });
});

// Describing the test suite for Draggable functionality
describe("Draggable Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Interactions" section to navigate
    sortable.elements.interactions_label().should("be.visible").click();

    // Click on the "Draggable" option to open the draggable page
    dragg.elements.dragabble_label().click();
  });

  it("Verify Draggable UI", () => {
    // Assertion to check the header label
    textbox.elements.header_label().should("have.text", "Draggable");

    // Assert all tab labels are visible
    dragg.elements.simple_tab().should("be.visible").and("have.text", "Simple");
    dragg.elements
      .axis_restrict_tab()
      .should("be.visible")
      .and("have.text", "Axis Restricted");
    dragg.elements
      .container_restrict_tab()
      .should("be.visible")
      .and("have.text", "Container Restricted");
    dragg.elements
      .cursor_style_tab()
      .should("be.visible")
      .and("have.text", "Cursor Style");

    // Assert the drag box is visible with the correct text
    dragg.elements.dragbox().should("be.visible").and("have.text", "Drag me");
  });

  it("Verify Simple Draggable functionality", () => {
    cy.wait(2000); // Wait for elements to settle

    // Get the initial position of the draggable element
    dragg.elements.dragbox().then((initial) => {
      const initial_pos = initial.position();

      // Print in log the initial position of drag box
      cy.log("Initial Position:", initial_pos);

      // Variables to store movement values
      const left_move = 300;
      const top_move = 475;

      // Drag the draggable element
      dragg.elements
        .dragbox()
        .move({ deltaX: left_move, deltaY: top_move, force: true });

      cy.wait(2000); // Wait for the drag action to complete

      // Assert that the box is moved by the same values of left and top
      dragg.elements.dragbox().then((final) => {
        const final_pos = final.position();
        cy.log("Final Position", final_pos);
        expect(final_pos.left).to.deep.equal(initial_pos.left + left_move);
        expect(final_pos.top).to.deep.equal(initial_pos.top + top_move);
      });
    });
  });

  it("Verify X-Axis Restricted Draggable functionality", () => {
    // Switch to the "Axis Restricted" tab
    dragg.elements.axis_restrict_tab().click();
    cy.wait(2000); // Wait for tab switch

    // Get the initial position of the X-axis restricted draggable element
    dragg.elements.x_restrictbox().then((initial) => {
      const initial_pos = initial.position();

      // Print in log the initial position of drag box
      cy.log("Initial Position:", initial_pos);

      // Variables to store movement values
      const left_move = 450;
      const top_move = 500;

      // Drag the X-axis restricted element
      dragg.elements
        .x_restrictbox()
        .move({ deltaX: left_move, deltaY: top_move, force: true });

      cy.wait(2000); // Wait for the drag action to complete

      // Assert that the element moved horizontally but not vertically
      dragg.elements.x_restrictbox().then((final) => {
        const final_pos = final.position();
        cy.log("Final Position", final_pos);
        expect(final_pos.left).to.deep.equal(initial_pos.left + left_move);
        expect(final_pos.top).not.to.deep.equal(initial_pos.top + top_move);
      });
    });
  });

  it("Verify Y-Axis Restricted Draggable functionality", () => {
    // Switch to the "Axis Restricted" tab
    dragg.elements.axis_restrict_tab().click();
    cy.wait(2000); // Wait for tab switch

    // Get the initial position of the Y-axis restricted draggable element
    dragg.elements.y_restrictbox().then((initial) => {
      const initial_pos = initial.position();

      // Print in log the initial position of drag box
      cy.log("Initial Position:", initial_pos);

      // Variables to store movement values
      const left_move = 911;
      const top_move = 365;

      // Drag the Y-axis restricted element
      dragg.elements
        .y_restrictbox()
        .move({ deltaX: left_move, deltaY: top_move, force: true });

      cy.wait(2000); // Wait for the drag action to complete

      // Assert that the element moved vertically but not horizontally
      dragg.elements.y_restrictbox().then((final) => {
        const final_pos = final.position();
        cy.log("Final Position", final_pos);
        expect(final_pos.left).not.to.deep.equal(initial_pos.left + left_move);
        expect(final_pos.top).to.deep.equal(initial_pos.top + top_move);
      });
    });
  });

  it("Verify Container Restricted Draggable functionality", () => {
    // Switch to the "Container Restricted" tab
    dragg.elements.container_restrict_tab().click();
    cy.wait(2000); // Wait for tab switch

    // Get the parent box values
    dragg.elements.parent_block().then((parent) => {
      const parent_box = parent[0].getBoundingClientRect();

      cy.log("Parent Values top:", parent_box.top);
      cy.log("Parent Values bottom:", parent_box.bottom);
      cy.log("Parent Values left:", parent_box.left);
      cy.log("Parent Values right:", parent_box.right);

      // Get the drag box initial values
      dragg.elements.dragbox_restrict().then((child) => {
        const drag_box_initial = child[0].getBoundingClientRect();

        cy.log("Child Values top:", drag_box_initial.top);
        cy.log("Child Values bottom:", drag_box_initial.bottom);
        cy.log("Child Values left:", drag_box_initial.left);
        cy.log("Child Values right:", drag_box_initial.right);

        // Assert that initially dragbox is inside parent
        expect(parent_box.top).to.be.lessThan(drag_box_initial.top);
        expect(parent_box.left).to.be.lessThan(drag_box_initial.left);
        expect(drag_box_initial.right).to.be.lessThan(parent_box.right);
        expect(drag_box_initial.bottom).to.be.lessThan(parent_box.bottom);

        // Drag the box to the maximum position
        dragg.elements
          .dragbox_restrict()
          .move({ deltaX: 9999, deltaY: 9999, force: true });

        cy.wait(2000); // Wait for the drag action to complete

        // Get the values after dragbox is moved to the maximum position
        dragg.elements.dragbox_restrict().then((final) => {
          const drag_box_final = final[0].getBoundingClientRect();

          // Assert that final dragbox position is still inside parent
          expect(parent_box.top).to.be.lessThan(drag_box_final.top);
          expect(parent_box.left).to.be.lessThan(drag_box_final.left);
          expect(drag_box_final.right).to.be.lessThan(parent_box.right);
          expect(drag_box_final.bottom).to.be.lessThan(parent_box.bottom);
        });
      });
    });
  });

  it("Verify Text Restricted Draggable functionality", () => {
    // Switch to the "Container Restricted" tab
    dragg.elements.container_restrict_tab().click();
    cy.wait(2000); // Wait for tab switch

    // Get the parent box values
    dragg.elements.text_restrict_parent().then((parent) => {
      const parent_box = parent[0].getBoundingClientRect();

      // Get the text box initial values
      dragg.elements.text_restrict().then((child) => {
        const text_box_initial = child[0].getBoundingClientRect();

        // Assert that initially text is inside parent
        expect(parent_box.top).to.be.lessThan(text_box_initial.top);
        expect(parent_box.left).to.be.lessThan(text_box_initial.left);
        expect(text_box_initial.right).to.be.lessThan(parent_box.right);
        expect(text_box_initial.bottom).to.be.lessThan(parent_box.bottom);

        // Drag the text to the maximum position
        dragg.elements
          .text_restrict()
          .move({ deltaX: 9999, deltaY: 9999, force: true });

        cy.wait(2000); // Wait for the drag action to complete

        // Get the values after text is moved to the maximum position
        dragg.elements.text_restrict().then((final) => {
          const text_box_final = final[0].getBoundingClientRect();

          // Assert that final text position is still inside parent
          expect(parent_box.top).to.be.lessThan(text_box_final.top);
          expect(parent_box.left).to.be.lessThan(text_box_final.left);
          expect(text_box_final.right).to.be.lessThan(parent_box.right);
          expect(text_box_final.bottom).to.be.lessThan(parent_box.bottom);
        });
      });
    });
  });

  it("Verify Cursor Style Draggable functionality", () => {
    // Switch to the "Cursor Style" tab
    dragg.elements.cursor_style_tab().click();

    cy.wait(1000); // Wait for tab switch

    // Move the top-left cursor styled box
    dragg.elements
      .topleft_cursor()
      .move({ deltaX: 380, deltaY: -60, force: true })
      .then(($element) => {
        const cursorStyle = $element.css("cursor");

        // Assert that the cursor style matches the expected value
        expect(cursorStyle).to.equal("move");
      });

    cy.wait(1000); // Wait before the next action

    // Move the bottom cursor styled box
    dragg.elements
      .bottom_cursor()
      .move({ deltaX: 380, deltaY: 40, force: true })
      .then(($element) => {
        const cursorStyle = $element.css("cursor");

        // Assert that the cursor style matches the expected value
        expect(cursorStyle).to.equal("move");
      });
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Describing the test suite for Register functionality
describe("Book Store Application -> Register Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Book Store Application" section to navigate to the Book Store page
    login.elements
      .bookstore_label()
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Click on "Login" to proceed to the login page
    login.elements.login_label().click();

    // Click on "New User" to navigate to the registration page
    login.elements.newuser_btn().click();
  });

  it("Verify Book Store Application Register Page UI", () => {
    // Assertion to check the header label text
    textbox.elements.header_label().should("have.text", "Register");

    // Assert that the registration form contains the welcome text
    register.elements
      .register_form()
      .should("contain", "Register to Book Store");

    // Assert that all labels are visible and contain the correct text
    register.elements
      .firstname_label()
      .should("be.visible")
      .and("contain", "First Name");
    register.elements
      .lastname_label()
      .should("be.visible")
      .and("contain", "Last Name");
    register.elements
      .username_label()
      .should("be.visible")
      .and("contain", "UserName");
    register.elements
      .password_label()
      .should("be.visible")
      .and("contain", "Password");

    // Assert that all input text fields are visible
    register.elements.firstname().should("be.visible");
    register.elements.lastname().should("be.visible");
    register.elements.username().should("be.visible");
    register.elements.password().should("be.visible");

    // Assert that the "Register" button is visible and enabled
    register.elements.register_btn().should("be.visible").and("be.enabled");

    // Assert that the "Back to Login" button is visible and enabled
    register.elements.backtologin_btn().should("be.visible").and("be.enabled");

    // Assert that the captcha element is visible
    register.elements.captcha().should("be.visible");
  });

  it("Verify Book Store Application Register Functionality", () => {
    // Intercept the API request for creating a new user and alias it for later use
    cy.intercept({
      method: "POST",
      url: "https://demoqa.com/Account/v1/User",
    }).as("api_response_details");

    // Intercept the window alert and assert its message
    cy.on("window:alert", (message) => {
      expect(message).to.equal("User Register Successfully.");
    });

    // Enter user details into the registration form
    register.elements.firstname().type("Avi");
    register.elements.lastname().type("Singh");
    register.elements.username().type("avinh@1234");
    register.elements.password().type("Avinabh@1234");

    // Pause to manually handle captcha verification
    cy.pause();
    // Click on Resume button manually after completing the captcha verification

    // Click on the "Register" button to submit the registration form
    register.elements.register_btn().click();

    // Wait for the intercepted request to complete and perform assertions on the response
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        expect(interception.response.statusCode).to.equal(201);
        expect(interception.response.statusMessage).to.equal("Created");
      }
    );
  });

  it('Verify validation message for blank input in "Register" page', () => {
    // Click on the "Register" button without entering any details
    register.elements.register_btn().click();

    // Assert that validation messages are visible for all required fields
    register.elements.invalid_input().should("be.visible");
    register.elements.invalid_input().should("have.length", 4); // Ensures there are four validation messages
  });

  it("Verify validation message for already registered user", () => {
    // Intercept the API request for creating a new user and alias it for later use
    cy.intercept({
      method: "POST",
      url: "https://demoqa.com/Account/v1/User",
    }).as("api_response_details");

    // Enter user details into the registration form
    register.elements.firstname().type("Avi");
    register.elements.lastname().type("Singh");
    register.elements.username().type("avinabh@1234");
    register.elements.password().type("Avinabh@1234");

    // Pause to manually handle captcha verification
    cy.pause();
    // Click on Resume button manually after completing the captcha verification

    // Click on the "Register" button to submit the registration form
    register.elements.register_btn().click();

    // Wait for the intercepted request to complete and perform assertions on the response
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        expect(interception.response.statusCode).to.equal(406);
        expect(interception.response.statusMessage).to.equal("Not Acceptable");
      }
    );

    // Assert that validation message for existing user is displayed
    register.elements
      .validationmsg()
      .should("be.visible")
      .and("have.text", "User exists!");
  });

  it("Verify validation message for invalid input in password field", () => {
    // Intercept the API request for creating a new user and alias it for later use
    cy.intercept({
      method: "POST",
      url: "https://demoqa.com/Account/v1/User",
    }).as("api_response_details");

    // Enter user details into the registration form
    register.elements.firstname().type("Avi");
    register.elements.lastname().type("Singh");
    register.elements.username().type("avinabh@1234");

    // Enter an invalid password
    register.elements.password().type("123");

    // Pause to manually handle captcha verification
    cy.pause();
    // Click on Resume button manually after completing the captcha verification

    // Click on the "Register" button to submit the registration form
    register.elements.register_btn().click();

    // Wait for the intercepted request to complete and perform assertions on the response
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        expect(interception.response.statusCode).to.equal(400);
        expect(interception.response.statusMessage).to.equal("Bad Request");
      }
    );

    // Assert that validation message for invalid password is displayed
    register.elements
      .validationmsg()
      .should("be.visible")
      .and(
        "have.text",
        "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer."
      );
  });

  it("Verify validation message for blank input in captcha verification", () => {
    // Enter user details into the registration form
    register.elements.firstname().type("Avi");
    register.elements.lastname().type("Singh");
    register.elements.username().type("avinabh@1234");
    register.elements.password().type("1234@Avinabh");

    // Click on the "Register" button without completing captcha verification
    register.elements.register_btn().click();

    // Assert that validation message for captcha verification is displayed
    register.elements
      .validationmsg()
      .should("be.visible")
      .and("have.text", "Please verify reCaptcha to register!");
  });

  it("Verify Back to Login functionality in Register Page", () => {
    // Click on the "Back to Login" button to navigate back to the login page
    register.elements.backtologin_btn().click();

    // Assertion to check the header label text on the login page
    textbox.elements.header_label().should("have.text", "Login");
  });
});

// Describing the test suite for Login functionality
describe("Book Store Application -> Login Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(function () {
    // Click on the "Book Store Application" section to navigate to the Book Store page
    login.elements
      .bookstore_label()
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Click on "Login" to navigate to the login page
    login.elements.login_label().click();
  });

  it("Verify Book Store Application Login Page UI", () => {
    // Assertion to check the header label text
    textbox.elements.header_label().should("have.text", "Login");

    // Assert that the login form contains the welcome text
    login.elements.login_form().should("contain", "Welcome");

    // Assert that username and password labels are visible and contain the correct text
    login.elements
      .username_label()
      .should("be.visible")
      .and("contain", "UserName");
    login.elements
      .password_label()
      .should("be.visible")
      .and("contain", "Password");

    // Assert that username and password input fields are visible
    login.elements.username().should("be.visible");
    login.elements.password().should("be.visible");

    // Assert that the login button is visible and enabled
    login.elements.login_btn().should("be.visible").and("be.enabled");

    // Assert that the "New User" button is visible and enabled
    login.elements.newuser_btn().should("be.visible").and("be.enabled");
  });

  it("Verify Book Store Application Login Functionality", () => {
    // Enter valid username and password
    login.elements.username().type("Avi@1234");
    login.elements.password().type("Avi@1234");

    // Click on the login button to submit the login form
    login.elements.login_btn().click();

    // Assert that the user is successfully logged in by checking the profile page
    profile.elements.username_label().should("be.visible");
    profile.elements
      .username_value()
      .should("be.visible")
      .and("have.text", "Avi@1234");
  });

  it("Verify blank input in Login Page", () => {
    // Click on the login button without entering any credentials
    login.elements.login_btn().click();

    // Assert that validation messages are visible for the required fields
    register.elements.invalid_input().should("be.visible");
    register.elements.invalid_input().should("have.length", 2); // Ensures that there are two validation messages for username and password
  });
});
