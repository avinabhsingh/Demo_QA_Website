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

// Global before block to apply to all describe blocks in this file
before(() => {
  // Call a custom function to ignore ads
  //functions.ignore_ad();

  // Set the browser screen size to 1920x1080
  cy.viewport(1920, 1080);

  // Visit the demoQA website
  cy.visit("https://demoqa.com/");
});

// Describing the test suite for Text Box functionality
describe("Text Box Functionality", function () {
  // Hook to run before each test in this suite
  beforeEach(() => {
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
describe("Check Box Functionality", () => {
  // Hook to run before each test in this suite
  beforeEach(() => {
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

describe("Radio Button Functionality", () => {
  beforeEach(() => {
    //Click on ELEMENTS section
    textbox.elements.elements_label().should("be.visible").click();

    //Click on Radio Button option
    radiobutton.elements.radiobutton_label().should("be.visible").click();
  });

  it("TC - 01 Verify Radio button UI", () => {
    //Assertion to check Header
    textbox.elements
      .header_label()
      .should("be.visible")
      .and("have.text", "Radio Button");

    //Assertion to check clickable options
    radiobutton.elements.enabled_option().should("be.visible");

    //Assertion to check non-clickable options
    radiobutton.elements.disbaled_option().should("be.visible");
  });

  it("TC - 02 Verify click all radio buttons", () => {
    //Assertion to check no result exists
    radiobutton.elements.result().should("not.exist");

    //Click on YES radiobutton
    radiobutton.elements.yes().click({ force: true });
    //Assertion to check YES radiobutton is checked
    radiobutton.elements.yes().should("be.checked");
    //Assertion to check IMPRESSIVE radiobutton is not checked
    radiobutton.elements.impressive().should("not.be.checked");
    //Assertion to check result should contain "YES"
    radiobutton.elements.result().should("be.visible").and("contain", "Yes");

    //Click on IMPRESSIVE radiobutton
    radiobutton.elements.impressive().click({ force: true });
    //Assertion to check YES radiobutton is not checked
    radiobutton.elements.yes().should("not.be.checked");
    //Assertionto check IMPRESSIVE radiobutton is checked
    radiobutton.elements.impressive().should("be.checked");
    //Assertion to check result should contain "IMPRESSIVE"
    radiobutton.elements
      .result()
      .should("be.visible")
      .and("contain", "Impressive");

    //Click on non-Clickable option "NO" forcefully
    radiobutton.elements.no().click({ force: true });
  });
});

describe("DemoQA -> Web Tables", () => {
  beforeEach(() => {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on ELEMENTS section
    textbox.elements.elements_label().should("be.visible").click();

    //Click on Web Tables option
    webtables.elements.webtable_label().should("be.visible").click();
  });

  it("TC - 01 Verify Web Tables UI", () => {
    //Assertion to check Header
    textbox.elements
      .header_label()
      .should("be.visible")
      .and("have.text", "Web Tables");

    //Assertion to check add record button visible & clickable
    webtables.elements.addrecord_btn().should("be.visible").and("be.enabled");

    //Assertion to check searchbar is visible
    webtables.elements.searchbar().should("be.visible");

    // webtables.elements.col_headers().each(($element, index) => {
    //     if(index == 0 ){
    //         cy.wrap($element).should('have.text','First Name'); }

    //     else if(index == 1 ){
    //         cy.wrap($element).should('have.text','Last Name'); }

    //     else if(index == 2 ){
    //         cy.wrap($element).should('have.text','Age'); }

    //     else if(index == 3 ){
    //         cy.wrap($element).should('have.text','Email'); }

    //     else if(index == 4 ){
    //         cy.wrap($element).should('have.text','Salary'); }

    //     else if(index == 5 ){
    //         cy.wrap($element).should('have.text','Department'); }

    //     else if(index == 6 ){
    //         cy.wrap($element).should('have.text','Action'); }

    //     else{
    //         cy.fail("Test case failed");
    //     }
    // });

    //list to store column header names
    const column_names = [
      "First Name",
      "Last Name",
      "Age",
      "Email",
      "Salary",
      "Department",
      "Action",
    ];
    //Assertion to check column headers
    webtables.elements.col_headers().each(($element, index) => {
      cy.wrap($element).should(
        "have.text",
        column_names[index] || "Test case failed"
      );
    });

    //Assertion to check pagination visibility
    webtables.elements.pagination().should("be.visible");
  });

  it("TC - 02 Verify adding records in a table", () => {
    //Click on add record button
    webtables.elements.addrecord_btn().click();

    //Assertion to check Header
    webtables.elements
      .form_header()
      .should("be.visible")
      .and("have.text", "Registration Form");

    //list to store field labels
    const label_names = [
      "First Name",
      "Last Name",
      "Email",
      "Age",
      "Salary",
      "Department",
    ];
    //Assertion to check field labels
    webtables.elements.form_fields().each(($element, index) => {
      //text content of the element matches the expected value stored in label_names[index], If label_names[index] is falsy, it will display 'Test case failed' instead.
      cy.wrap($element).should(
        "have.text",
        label_names[index] || "Test case failed"
      );
    });

    //Assertion to check submit button vibile & clickable
    webtables.elements.submit_btn().should("be.visible").and("be.enabled");

    //Enter details in fields
    webtables.elements.firstname().type("Avinabh");
    webtables.elements.lastname().type("Singh");
    webtables.elements.age().type("25");
    webtables.elements.email().type("Avi@gmail.com");
    webtables.elements.salary().type("9999999");
    webtables.elements.dept().type("IT");

    //Click on submit button
    webtables.elements.submit_btn().click();

    //Assertion to check filled value in table
    webtables.elements.table_rows().each(($element, index) => {
      if (index == 3) {
        cy.wrap($element).should("contain", "Avinabh");
      }
    });
  });

  it("TC - 03 Verify Register dialog for blank inputs", function () {
    //Click on add record button
    webtables.elements.addrecord_btn().click();

    //Click on submit button
    webtables.elements.submit_btn().click();

    //Assertion to check for class changed to 'was-validated'
    webtables.elements.register_form().should("have.class", "was-validated");
  });

  it("TC - 04 Verify adding values after validation", function () {
    //Click on add record button
    webtables.elements.addrecord_btn().click();

    //Click on submit button
    webtables.elements.submit_btn().click();

    //Assertion to check for class changed to 'was-validated'
    webtables.elements.register_form().should("have.class", "was-validated");

    //Type & Check firstname field is filled
    webtables.elements.firstname().should("have.attr", "value", "");
    webtables.elements.firstname().type("Avinabh");
    webtables.elements
      .firstname()
      .should("have.attr", "value")
      .and("not.be.empty");

    //Type & Check lastname field is filled
    webtables.elements.lastname().should("have.attr", "value", "");
    webtables.elements.lastname().type("Singh");
    webtables.elements
      .lastname()
      .should("have.attr", "value")
      .and("not.be.empty");

    //Type & Check age field is filled
    webtables.elements.age().should("have.attr", "value", "");
    webtables.elements.age().type(34);
    webtables.elements.age().should("have.attr", "value").and("not.be.empty");

    //Type & Check email field is filled
    webtables.elements.email().should("have.attr", "value", "");
    webtables.elements.email().type("Avi@gmail.com");
    webtables.elements.email().should("have.attr", "value").and("not.be.empty");

    //Type & Check salary field is filled
    webtables.elements.salary().should("have.attr", "value", "");
    webtables.elements.salary().type(354784);
    webtables.elements
      .salary()
      .should("have.attr", "value")
      .and("not.be.empty");

    //Type & Check department field is filled
    webtables.elements.dept().should("have.attr", "value", "");
    webtables.elements.dept().type("ECE");
    webtables.elements.dept().should("have.attr", "value").and("not.be.empty");
  });

  it("TC - 05 Verify validation for firstname", function () {
    //Click on add record button
    webtables.elements.addrecord_btn().click();
    //Get the 'maxlength' attribute
    webtables.elements
      .firstname()
      .type("ASKNDASDAJSDKJAKSDJ")
      .invoke("attr", "maxlength")
      .then((maxlength) => {
        //Pass the retrieved value of maxlength from input to value variable
        webtables.elements
          .firstname()
          .invoke("val")
          .then((value) => {
            const inputValueLength = value.length; // Get the length of the input value
            if (inputValueLength <= parseInt(maxlength)) {
              //parseInt() is commonly used to convert Strings to Integers
              cy.log(
                "Test case passed - Value length is less than or equal to maxlength"
              );
            } else {
              cy.fail("Test case failed - Value length exceeds maxlength");
            }
          });
      });
  });

  it("TC - 06 Verify Email RegEX", function () {
    //Click on add record button
    webtables.elements.addrecord_btn().click();

    //Type email address
    webtables.elements.email().type("avi123@gmail.com");

    //Assertion to validated invalid email address
    webtables.elements
      .email()
      .invoke("val")
      .then((email) => {
        if (
          !email.match(
            /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
          )
        ) {
          cy.fail("Invalid email");
        }
      });
  });

  it("TC - 07 Verify Salary RegEX", function () {
    //Click on add record button
    webtables.elements.addrecord_btn().click();

    //Type salary
    webtables.elements.salary().type("9999999");

    //Assertion to validated invalid salary
    webtables.elements
      .salary()
      .invoke("val")
      .then((salary) => {
        if (!salary.match(/^\d*$/)) {
          cy.fail("Invalid salary");
        }
      });
  });

  it("TC - 08 Verify Age RegEX", function () {
    //Click on add record button
    webtables.elements.addrecord_btn().click();

    //Type Age
    webtables.elements.age().type("42");

    //Assertion to validated invalid Age
    webtables.elements
      .age()
      .invoke("val")
      .then((age) => {
        if (!age.match(/^\d*$/)) {
          cy.fail("Invalid age");
        }
      });
  });

  it("TC - 09 Verify searchbar functionality", function () {
    //Declare a constant that stores searched data
    const search_data = "Vega";

    //Type data to be searched in searchbar
    webtables.elements.searchbar().type(search_data);
    cy.wait(3000);
    //Assertion to be checked only on 1st row of the table
    webtables.elements
      .table_rows()
      .eq(0)
      .invoke("text")
      .then((text) => {
        if (text.trim() == "") {
          cy.log("Table body is empty");
          webtables.elements.empty_table().should("contain", "No rows found");
        } else {
          //Iterate over each row
          webtables.elements.table_rows().each((row) => {
            //Invoke text present inside each row
            cy.wrap(row)
              .invoke("text")
              .then((text) => {
                //Take rows(childern) one by one that are present inside table body, check for length
                //if (Cypress.$('.rt-tbody').find('.rt-tr').length > 0 && Cypress.$('.rt-tbody').text().trim() === '')

                //text.trim() === '' is used to check if the text content of the row is empty after removing any leading or trailing whitespace characters.
                if (text.includes(search_data) || text.trim() === "") {
                  //Valid result found
                  cy.log("Valid search result or blank row");
                } else {
                  //Fail test if the condition is not met
                  cy.fail("Invalid search results");
                }
              });
          });
        }
      });
  });

  it("TC - 10 Verify Pagination functionality", () => {
    //Add Multiple records - function called
    webtables.addMultiRecords();

    //Click on dropdown for number of rows
    webtables.elements.pagination_dropdown().select("5");

    //Assertion to check page number
    webtables.elements.page_number().should("have.attr", "value", 1);

    //Click on Next Button
    webtables.elements.next_btn().click();

    //Assertion to check page number
    webtables.elements.page_number().should("have.attr", "value", 2);

    //Click on Previous Button
    webtables.elements.previous_btn().click();

    //Assertion to check page number
    webtables.elements.page_number().should("have.attr", "value", 1);
  });

  it("TC - 11 Verify editing a particular record", function () {
    //Click on edit icon for particular record
    webtables.elements.edit_record().click();

    //Assert Register dialog should open
    webtables.elements.register_form().should("be.visible");

    //Enter details in fields
    webtables.elements.firstname().clear().type("Avinabh");
    webtables.elements.lastname().clear().type("Singh");
    webtables.elements.age().clear().type("25");
    webtables.elements.email().clear().type("Avi@gmail.com");
    webtables.elements.salary().clear().type("9999999");
    webtables.elements.dept().clear().type("IT");

    //Click on submit button
    webtables.elements.submit_btn().click();

    //Assertion to check filled value is displayed in table
    webtables.elements.table_rows().each(($element, index) => {
      if (index == 2) {
        cy.wrap($element).should("contain", "Avinabh");
      }
    });
  });

  it("TC - 12 Verify deleting a particular record", function () {
    //Click on delete icon for a record
    webtables.elements.delete_record().click();

    //Assertion to check row removed from table
    webtables.elements.delete_record().should("not.exist");
  });
});

describe("DemoQA -> Buttons", () => {
  beforeEach(() => {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on ELEMENTS section
    textbox.elements.elements_label().should("be.visible").click();

    //Click on Buttons option
    button.elements.button_label().should("be.visible").click();

    //Assertion to check header label
    textbox.elements
      .header_label()
      .should("be.visible")
      .and("contain", "Buttons");
  });

  it("TC - 01 Verify double click functionality", () => {
    //Perform Double Click
    button.elements.dbclick_btn().dblclick();

    //Assertion to check result for double click
    button.elements.dbclick_msg().should("contain", "double click");
  });

  it("TC - 02 Verify right click functionality", () => {
    //Perform right click
    button.elements.rightclick_btn().rightclick();

    //Assertion to check result of right click
    button.elements.rightclick_msg().should("contain", "right click");
  });

  it("TC - 03 Verify dynamic click functionality", () => {
    //Perform click on dynamic element
    button.elements.clickme_btn().eq(2).click(); // Clicks the second child

    //Assertion to check result of click
    button.elements.clickme_msg().should("contain", "dynamic click");
  });
});

describe("DemoQA -> Links", () => {
  beforeEach(() => {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on ELEMENTS section
    textbox.elements.elements_label().should("be.visible").click();

    //Click on Links option
    links.elements.links_label().should("be.visible").click();
  });

  it("TC - 01 Verify user is redirected by passing assertion on HTML attributes", () => {
    //Assertion to check Header Label
    textbox.elements
      .header_label()
      .should("be.visible")
      .and("contain", "Links");

    //Click on 1st - HOME link
    //(target="_blank") this is used to indicate that it opens in a new tab.
    links.elements.home_link1().should("have.attr", "target", "_blank").click();
  });

  it("TC - 02 Verify user is redirected by passing assertion on URL", () => {
    //Click on 2nd - HOME link
    //The target attribute specifies where to open the linked document. By removing it, we ensure that the link opens in the same tab.
    links.elements.home_link2().invoke("removeAttr", "target").click();

    //cy.window() is used to access properties and methods of the browser's window object, such as location, localStorage, sessionStorage, etc.
    cy.window().then((win) => {
      //Assertion to check if a new tab is opened
      expect(win.location.href).to.not.equal("https://demoqa.com/links");
    });
  });

  it('TC - 03 API call for "Created" link -- 201', () => {
    //Used to intercept URL requests made
    cy.intercept({
      method: "GET",
      url: "https://demoqa.com/*",
      hostname: "demoqa.com",
    }).as("api_response_details"); //as is used to pass an alias name. which stores the reponse of API call

    //Click on link
    links.elements.created_link().click();

    //Wait for the intercepted request and perform assertions using alias name
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        expect(interception.response.statusCode).to.equal(201);
        expect(interception.response.statusMessage).to.equal("Created");
        expect(interception.request.method).to.equal("GET");
      }
    );
  });

  it('TC - 04 API call for "No Content" link -- 204', () => {
    //Used to intercept URL requests made
    cy.intercept({
      method: "GET",
      url: "https://demoqa.com/*",
      hostname: "demoqa.com",
    }).as("api_response_details");

    //Click on link
    links.elements.nocontent_link().click();

    //Wait for the intercepted request and perform assertions
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        expect(interception.response.statusCode).to.equal(204);
        expect(interception.response.statusMessage).to.equal("No Content");
        expect(interception.request.method).to.equal("GET");
      }
    );
  });

  it('TC - 05 API call for "Moved" link -- 301', () => {
    //Used to intercept URL requests made
    cy.intercept({
      method: "GET",
      url: "https://demoqa.com/*",
      hostname: "demoqa.com",
    }).as("api_response_details");

    //Click on link
    links.elements.moved_link().click();

    //Wait for the intercepted request and perform assertions
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        expect(interception.response.statusCode).to.equal(301);
        expect(interception.response.statusMessage).to.equal(
          "Moved Permanently"
        );
        expect(interception.request.method).to.equal("GET");
      }
    );
  });

  it('TC - 06 API call for "Bad Request" link -- 400', () => {
    //Used to intercept URL requests made
    cy.intercept({
      method: "GET",
      url: "https://demoqa.com/*",
      hostname: "demoqa.com",
    }).as("api_response_details");

    //Click on link
    links.elements.badrequest_link().click();

    //Wait for the intercepted request and perform assertions
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        expect(interception.response.statusCode).to.equal(400);
        expect(interception.response.statusMessage).to.equal("Bad Request");
        expect(interception.request.method).to.equal("GET");
      }
    );
  });

  it('TC - 07 API call for "Unauthorized" link -- 401', () => {
    //Used to intercept URL requests made
    cy.intercept({
      method: "GET",
      url: "https://demoqa.com/*",
      hostname: "demoqa.com",
    }).as("api_response_details");

    //Click on link
    links.elements.unautho_link().click();

    //Wait for the intercepted request and perform assertions
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        expect(interception.response.statusCode).to.equal(401);
        expect(interception.response.statusMessage).to.equal("Unauthorized");
        expect(interception.request.method).to.equal("GET");
      }
    );
  });

  it('TC - 08 API call for "Forbidden" link -- 403', () => {
    //Used to intercept URL requests made
    cy.intercept({
      method: "GET",
      url: "https://demoqa.com/*",
      hostname: "demoqa.com",
    }).as("api_response_details");

    //Click on link
    links.elements.forbid_link().click();

    //Wait for the intercepted request and perform assertions
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        expect(interception.response.statusCode).to.equal(403);
        expect(interception.response.statusMessage).to.equal("Forbidden");
        expect(interception.request.method).to.equal("GET");
      }
    );
  });

  it('TC - 09 API call for "Not Found" link -- 404', () => {
    //Used to intercept URL requests made
    cy.intercept({
      method: "GET",
      url: "https://demoqa.com/*",
      hostname: "demoqa.com",
    }).as("api_response_details");

    //Click on link
    links.elements.notfound().click();

    //Wait for the intercepted request and perform assertions
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        expect(interception.response.statusCode).to.equal(404);
        expect(interception.response.statusMessage).to.equal("Not Found");
        expect(interception.request.method).to.equal("GET");
      }
    );
  });
});

describe("DemoQA -> Broken Links & Images", () => {
  beforeEach(() => {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on ELEMENTS section
    textbox.elements.elements_label().should("be.visible").click();

    //Click on Broken Links & Images option
    broken.elements.broken_label().should("be.visible").click();

    //Assertion to check header label
    textbox.elements.header_label().should("be.visible");
  });

  it("TC - 01 Verify UI ", () => {
    //Assertion to check Header Label
    textbox.elements.header_label().should("contain", "Broken Links - Images");

    //Assertion to check valid image is visible
    broken.elements.valid_img().should("be.visible");

    //Assertion to check default broken image is visible
    broken.elements.broken_img().should("be.visible");
  });

  it("TC - 02 Verify valid Image", () => {
    //Assertion for valid image
    //have.prop yields the value of passed attribute i.e. nautralWidth
    broken.elements
      .valid_img()
      .should("be.visible")
      .and("have.prop", "naturalWidth")
      .should("be.greaterThan", 0);
  });

  it("TC - 03 Verify broken Image", () => {
    //Assertion for broken image
    broken.elements
      .broken_img()
      .should("be.visible")
      .and("have.prop", "naturalWidth")
      .should("be.equal", 0);
  });
});

describe("Tools QA -> Upload and Download", () => {
  beforeEach(() => {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on ELEMENTS section
    textbox.elements.elements_label().should("be.visible").click();

    //Click on Upload and Download option
    up_down.elements.broken_label().should("be.visible").click();
  });

  it("TC - 01 Verify UI", () => {
    //Assertion to check Header Label
    textbox.elements.header_label().should("contain", "Upload and Download");

    //Assertion to check download button is visible
    up_down.elements.download_btn().should("be.visible");

    //Assertion to check upload button is visible
    up_down.elements.upload_btn().should("be.visible");
  });

  it("TC - 02 Verify Download functionality", () => {
    //Assertion to check download button is visible
    up_down.elements.download_btn().should("be.visible");

    //Click on download button
    up_down.elements.download_btn().click();

    //Assertion to check user is redirected using _blank attribute
    up_down.elements.download_btn().should("have.attr", "target", "_blank");
  });

  it("TC - 03 Verify Upload functionality", () => {
    //Assertion to check upload button is visible
    up_down.elements.upload_btn().should("be.visible");

    //Upload a valid file
    up_down.elements
      .upload_btn()
      .selectFile("C:/Users/avinabh.s/Pictures/img.jpg");

    //Assertion to check file is uploaded successfully
    up_down.elements.file_path().should("contain", "img.jpg");
  });
});

describe("Demo QA -> Dynamic Properties", () => {
  beforeEach(() => {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on ELEMENTS section
    textbox.elements.elements_label().should("be.visible").click();

    //Click on Upload and Download option
    dynamic.elements.dynamic_label().should("be.visible").click();

    //Assertion to check header label
    textbox.elements
      .header_label()
      .should("be.visible")
      .and("contain", "Dynamic Properties");
  });

  it("TC - 01 Enables button after 5 seconds", () => {
    //Assert that the button is initially disabled
    dynamic.elements.before_enable().should("be.disabled");

    //Wait for 5 seconds
    cy.wait(5000);

    //Assert that the button is enabled after 5 seconds
    dynamic.elements.before_enable().should("not.be.disabled");
  });

  it("TC - 02 Changes text color after 5 seconds wait", () => {
    //Wait for color to change after 5 seconds
    cy.wait(5000);

    // Assert that the text color has changed to red
    dynamic.elements
      .color_change()
      .should("have.css", "color", "rgb(220, 53, 69)");
  });

  it("TC - 03 New element is visible after 5 seconds", () => {
    // Assert that the element is initially not visible
    dynamic.elements.after_visible().should("not.exist");

    // Wait for 5 seconds
    cy.wait(5000);

    // Assert that the element is visible after 5 seconds
    dynamic.elements.after_visible().should("be.visible");
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe("Demo QA -> Forms", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on FORM section
    practice_form.elements.form_label().should("be.visible").click();

    //Click on Practice Form
    practice_form.elements.practice_form_label().click();
  });

  it("TC - 01 Verify Practice Form UI", function () {
    //Assertion to check header label
    textbox.elements
      .header_label()
      .should("be.visible")
      .and("have.text", "Practice Form");

    //Assertion on visiblity of all the labels
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
    practice_form.elements.submit_btn().should("be.visible").and("be.enabled");
  });

  it("TC - 02 Verify Practice Form Functionality", function () {
    //Storing values inside variables
    const firstname = "Aaksh";
    const lastname = "Yadav";
    const emailid = "aaksh123@gmail.com";
    const mobilenumber = 8745547896;
    const subjects = ["Maths", "Physics", "Computer Science", "Accounting"];
    //dob
    const yr = "2000";
    const mon = "September";
    const day = "17";
    //Hobbies
    const hobbies = ["Sports", "Music"];
    //Choose picture
    const fileloc = "C:/Users/avinabh.s/Pictures/";
    const filename = "img.jpg";
    //Address
    const addr = "A-5094, D2/Block, Agastya Flats, Mumbai - 380097";
    //State and city
    const state = "Rajasthan";
    const city = "Jaipur";

    //Enter first name
    practice_form.elements.first_name().type(firstname);

    //Enter last name
    practice_form.elements.last_name().type(lastname);

    //Enter email
    practice_form.elements.email().type(emailid);

    //Choose Gender
    practice_form.elements.male().check({ force: true });

    //Enter Mobile number
    practice_form.elements.number().type(mobilenumber);

    //Choose Date of Birth
    practice_form.elements.dob().click();
    //Select Year
    practice_form.elements.year().select(yr);
    //Select Month
    practice_form.elements.month().select(mon);
    //Select Day
    practice_form.elements.day().click();

    //Choose Subjects
    //Loop through the list
    subjects.forEach((element) => {
      //Type the current element into the text field and press enter
      practice_form.elements.subject().type(`${element}{enter}`);
    });

    //Choose Hobbies
    practice_form.elements.sports().check({ force: true });
    practice_form.elements.music().check({ force: true });

    //Choose Picture
    practice_form.elements.picture_choose().selectFile(fileloc + filename);

    //Enter current address
    practice_form.elements.address().type(addr);

    //Select State
    practice_form.elements.state().click();
    practice_form.elements.rj().click();

    //Select City
    practice_form.elements.city().click();
    practice_form.elements.jaipur().click();

    //Click on submit button
    practice_form.elements.submit_btn().click();

    //Asserting the label and value pairs inside the table
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe("Demo QA -> Browser Windows", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Alerts, Frame & Windows section
    browserwindows.elements.alertsframewindows().should("be.visible").click();

    //Click on Browser Windows
    browserwindows.elements.browserwindows_label().click();

    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Browser Windows");
  });

  it("TC - 01 Verify New Tab Functionality", function () {
    //Intercept the window.open method
    cy.window().then((win) => {
      //cy.stub(object, methodName) - instead of the original method being executed, the stub function is called instead.
      cy.stub(win, "open").as("newtabcall");
    });

    //Click on New Tab button
    browserwindows.elements.newtab().click();

    //Assert that the window.open method was called
    //This is a Chai assertion that checks if the stub has been called exactly once.
    cy.get("@newtabcall").should("have.been.calledOnce");
  });

  it("TC - 02 Verify New Window Functionality", function () {
    //Intercept the window.open method
    cy.window().then((win) => {
      cy.stub(win, "open").as("newwincall");
    });

    //Click on New Window button
    browserwindows.elements.newwindow().click();

    //Cypress.sinon.match is a utility provided by Cypress, which are used to specify the expected arguments when stubbing or spying on functions.
    //Cypress.sinon.match.string asserts that the stubbed window.open() method has been called at least once with a string argument.
    cy.get("@newwincall").should(
      "be.calledWith",
      Cypress.sinon.match("/sample")
    );
  });

  it("TC - 03 Verify New Window Message Functionality", function () {
    //Intercept the window.open method
    cy.window().then((win) => {
      cy.stub(win, "open").as("winmsg");
    });

    //Click on New Window button
    browserwindows.elements.winmsg().click();

    //Wait for the window.open call and assert that it was called
    cy.get("@winmsg").should("be.called");
  });
});

describe("Demo QA -> Alerts", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Alerts, Frame & Windows section
    browserwindows.elements.alertsframewindows().should("be.visible").click();

    //Click on Alerts
    alert.elements.alerts_label().click();

    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Alerts");
  });

  it("TC - 01 Verify Alert Functionality", function () {
    //Set the uncaught expection which is declared globally as true before running this testcase(only for negative when testcase should fail)
    //Click on Alert button
    alert.elements.alert_msg().click();

    cy.on("window:alert", (message) => {
      // Assertion on the alert message
      expect(message).to.equal("You clicked a button");
    });
  });

  // it('TC - 02 Verify Alert after 5 second wait Functionality', function () {
  //     // Click on Alert button
  //     alert.elements.wait_alert().click();

  //     // Wait for 5 seconds
  //     cy.wait(5000);

  //     // Set a flag to track if the expected alert message is received
  //     let flag = false;

  //     // Set up an event listener to catch the alert
  //     cy.on('window:alert', (message) => {
  //         // Assertion or custom logic based on the alert message
  //         if (message == 'This walert appeared after 5 seconds') {
  //             cy.log('The alert message is correct')
  //             flag = true;
  //         } else {
  //             //expect(message).to.equal('This alert appeared after 5 seconds');
  //             // Fail the test case if the expected alert message does not match
  //             cy.fail('Incorrect alert message: ' + message);
  //         }
  //     }).then(() => {
  //         // Fail the test case if the expected alert message was not received
  //         if (!flag) {
  //             cy.fail('Expected alert message was not received');
  //         }
  //     });
  // })

  it("TC - 02 Verify Alert after 5 second wait Functionality", function () {
    // Stub the network for alerts generated
    cy.window().then((win) => {
      cy.stub(win, "alert").as("alertmsg");
    });

    //Click on alert button
    alert.elements.wait_alert().click();
    cy.wait(5000);

    // Assertion to check for alert result
    cy.get("@alertmsg").should(
      "be.calledWith",
      "This alert appeared after 5 seconds"
    );
  });

  it("TC - 03 Verify OK button for Confirm Alert", function () {
    // Click on confirm button
    alert.elements.confirm_btn().click();

    // Verify that the confirm alert is displayed and contains the expected message
    cy.on("window:confirm", (confirmMessage) => {
      expect(confirmMessage).to.equal("Do you confirm action?");
      //Click on OK button in prompt
      return true;
    });

    //Assertion to check - click on OK button
    alert.elements
      .confirm_result()
      .should("be.visible")
      .and("have.text", "You selected Ok");
  });

  it("TC - 04 Verify Cancel button for Confirm Alert", function () {
    // Click on confirm button
    alert.elements.confirm_btn().click();

    // Verify that the confirm alert is displayed and contains the expected message
    cy.on("window:confirm", (confirmMessage) => {
      expect(confirmMessage).to.equal("Do you confirm action?");
      //Click on cancel button in prompt
      return !true;
    });

    //Assertion to check - Click on Cancel button
    alert.elements
      .confirm_result()
      .should("be.visible")
      .and("have.text", "You selected Cancel");
  });

  it("TC - 05 Verify Prompt Alert Functionality", function () {
    //cy.window() command is used to access the global window object of the application under test.
    //This command allows you to interact with properties and methods of the window object that are not directly accessible via DOM elements.
    cy.window().then((win) => {
      //Stub the window.prompt method to return a fixed value
      cy.stub(win, "prompt").returns("Avinabh");
    });

    // Click on the prompt button
    alert.elements.prompt_btn().click();

    //Assertion to check prompt result
    alert.elements
      .prompt_result()
      .should("be.visible")
      .and("have.text", "You entered Avinabh");
  });
});

describe("Demo QA -> Frames", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Alerts, Frame & Windows section
    browserwindows.elements.alertsframewindows().should("be.visible").click();

    //Click on Frames
    frame.elements.frames_label().click();

    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Frames");
  });

  it("TC 01 - Verify Frames functionality", function () {
    cy.wait(3000);

    //Assert on width and height of first frame
    frame.elements
      .frame1()
      .should("have.attr", "width", "500px")
      .and("have.attr", "height", "350px");

    // Switch to the first iframe
    frame.elements.frame1().then((iframe1) => {
      cy.wrap(iframe1)
        .should("have.prop", "contentDocument")
        .and("exist")
        .then((Doc_Content) => {
          // Assert on the content inside the body of the iframe
          cy.wrap(Doc_Content)
            .find("body")
            .should("contain.text", "This is a sample page");
        });
    });

    //Assert on width and height of second frame
    frame.elements
      .frame2()
      .should("have.attr", "width", "100px")
      .and("have.attr", "height", "100px");

    //Switch to the second iframe
    frame.elements.frame2().then((iframe2) => {
      cy.wrap(iframe2)
        .should("have.prop", "contentDocument")
        .and("exist")
        .then((Doc_Content) => {
          //Assert on the content inside the body of the iframe
          cy.wrap(Doc_Content)
            .find("body")
            .should("contain.text", "This is a sample page");
        });
    });
  });
});

describe("Demo QA -> Nested Frames", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Alerts, Frame & Windows section
    browserwindows.elements.alertsframewindows().should("be.visible").click();

    //Click on Nested Frames
    nested_frames.elements.nested_frames_label().click();

    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Nested Frames");
  });

  it("TC 01 - Verify Nested Frames functionality", function () {
    cy.wait(3000);

    // Assert on first frame (parent)
    nested_frames.elements
      .parent_frame()
      .should("contain.text", "Parent frame");

    // Assert that child frame is present inside the body of the parent frame
    //nested_frames.elements.parent_frame().find('iframe[srcdoc="<p>Child Iframe</p>"]').should('be.visible');

    nested_frames.elements
      .parent_frame()
      .find('iframe[srcdoc="<p>Child Iframe</p>"]')
      .should("be.visible")
      .then((cframe) => {
        // Assert that the body of the child frame contains a Document
        cy.wrap(cframe)
          .should("have.prop", "contentDocument")
          .and("exist")
          .then((Doc_Content) => {
            // Assert on the content inside the Document
            cy.wrap(Doc_Content)
              .find("body")
              .should("contain.text", "Child Iframe");
          });
      });
  });
});

describe("Demo QA -> Modal Dialogs", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Alerts, Frame & Windows section
    browserwindows.elements.alertsframewindows().should("be.visible").click();

    //Click on Modal Dialogs
    modal_dialogs.elements.modal_dialog_label().click();

    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Modal Dialogs");
  });

  it("TC 01 - Verify Small Modal Dialog functionality", function () {
    //Click on small modal dialog
    modal_dialogs.elements.small_modal_dialog_btn().click();

    //Assertion to check modal dialog is visible
    modal_dialogs.elements.small_modal_dialog().should("be.visible");

    // Assertion to check small dialog heading
    modal_dialogs.elements
      .small_dialog_head()
      .should("have.text", "Small Modal");

    // Assertion to check small dialog content
    modal_dialogs.elements
      .dialog_content()
      .should("have.text", "This is a small modal. It has very less content");

    //Click on Close button
    modal_dialogs.elements.close_small_btn().click();

    // Assertion to check small modal dialog is closed
    modal_dialogs.elements.small_modal_dialog().should("not.exist");
  });

  it("TC 02 - Verify Large Modal Dialog functionality", function () {
    //Click on large modal dialog
    modal_dialogs.elements.large_modal_dialog_btn().click();

    //Assertion to check modal dialog is visible
    modal_dialogs.elements.large_modal_dialog().should("be.visible");

    // Assertion to check large dialog heading
    modal_dialogs.elements
      .large_dialog_head()
      .should("have.text", "Large Modal");

    // Assertion to check large dialog content
    modal_dialogs.elements.dialog_content().should("contain", "Lorem Ipsum");

    //Click on Close button
    modal_dialogs.elements.close_large_btn().click();

    // Assertion to check large modal dialog is closed
    modal_dialogs.elements.large_modal_dialog().should("not.exist");
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe("Demo QA -> Accordian", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Widgets section
    accordian.elements.widgets_label().should("be.visible").click();

    //Click on Accordian
    accordian.elements.accordian_label().click();

    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Accordian");
  });

  it("TC 01 - Verify first Accordian functionality", function () {
    //Assertion to check first section
    accordian.elements
      .section1_head()
      .should("be.visible")
      .and("have.text", "What is Lorem Ipsum?");
    accordian.elements
      .section1_body()
      .should("be.visible")
      .and(
        "contain",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      );
  });

  it("TC 02 - Verify second Accordian functionality", function () {
    //Click on second accordian
    accordian.elements.section2_head().click();

    //First section should collapse
    accordian.elements.section1_body().should("not.be.visible");

    //Assertion to check second section
    accordian.elements
      .section2_head()
      .should("be.visible")
      .and("have.text", "Where does it come from?");
    accordian.elements
      .section2_body()
      .should("be.visible")
      .and(
        "contain",
        "Contrary to popular belief, Lorem Ipsum is not simply random text."
      );
  });

  it("TC 03 - Verify third Accordian functionality", function () {
    //Click on third accordian
    accordian.elements.section3_head().click();

    //First section should collapse
    accordian.elements.section1_body().should("not.be.visible");

    //Assertion to check second section
    accordian.elements
      .section3_head()
      .should("be.visible")
      .and("have.text", "Why do we use it?");
    accordian.elements
      .section3_body()
      .should("be.visible")
      .and("contain", "(injected humour and the like).");
  });
});

describe("Demo QA -> Auto Complete", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Widgets section
    accordian.elements.widgets_label().should("be.visible").click();

    //Click on Auto Complete
    autocomplete.elements.autocomplete_label().click();

    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Auto Complete");
  });

  it("TC 01 - Enter multiple Colors using autocomplete", function () {
    //Enter multiple colors
    autocomplete.elements
      .multiple()
      .should("contain", "Type multiple color names");

    //Call to add multiple colors function
    autocomplete.add_multi_colors();
  });

  it("TC 02 - Verify removing added multiple colors", function () {
    //Call to add multiple colors function
    autocomplete.add_multi_colors();

    //variable to store number of added colors
    const totalcolors = 5;

    //Loop through to remove each color
    for (let i = 0; i < totalcolors; i++) {
      autocomplete.elements.close_multi().eq(0).click();
    }

    //Assert to check textbox is empty
    autocomplete.elements.suggestions().should("not.exist");

    // Assert that the textbox is empty
    autocomplete.elements.multi_textbox().should("have.value", "");
  });

  it("TC 03 - Enter single color", function () {
    //Assert to check single color label
    autocomplete.elements.single().should("contain", "Type single color name");

    //Enter single color
    autocomplete.elements.single().type("g");

    //Assert to check single color label
    autocomplete.elements
      .suggestions()
      .contains("Magenta")
      .should("exist")
      .type("{enter}");

    //Assert to check single color label contains entered color
    autocomplete.elements.single().should("contain", "Magenta");

    //Enter anothersingle color
    autocomplete.elements.single().type("b");

    //Assert to check single color label
    autocomplete.elements
      .suggestions()
      .contains("Black")
      .should("exist")
      .type("{enter}");

    //Assert to check single color label contains entered color
    autocomplete.elements.single().should("contain", "Black");

    //Assert to check single color label does not contain previous color
    autocomplete.elements.single().should("not.contain", "Magenta");
  });
});

describe("Demo QA -> Date Picker", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Widgets section
    accordian.elements.widgets_label().should("be.visible").click();

    //Click on Date Picker
    datepicker.elements.datepicker_label().click();

    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Date Picker");
  });

  it("TC 01 - Verify Date Functionality", function () {
    const yr = "2003";
    const mon = "March";
    const day = "16";

    //Choose Date
    datepicker.elements.date().click();

    //Select Year
    datepicker.elements.year().select(yr);

    //Select Month
    datepicker.elements.month().select(mon);

    //Click on Day
    datepicker.elements.day().click();

    datepicker.elements.date().should("have.value", "03/16/2003");
  });

  it("TC 02 - Verify Date and Time Functionality", function () {
    const yr = "2015";
    const mon = "October";
    const day = "18";

    //Choose Date and time field
    datepicker.elements.dateandtime().click();

    //Click on year dropdown
    datepicker.elements.year_dropdown().click();

    //Click on scroll button for number of times
    const clicks = 4;

    //Click the navigation button the specified number of times
    for (let i = 0; i < clicks; i++) {
      datepicker.elements.year_scroll().click();
    }

    //Click on the specific year from the dropdown list
    datepicker.elements.year_select().contains(yr).click();

    //Click on Month dropdown
    datepicker.elements.month_dropdown().click();

    //Click on the specific month from the dropdown list
    datepicker.elements.month_select().contains(mon).click();

    //Click on Day
    datepicker.elements.day().click();

    datepicker.elements.time().contains("4:45").click();

    datepicker.elements
      .dateandtime()
      .should("have.value", "October 18, 2015 4:45 AM");
  });
});

describe("Demo QA -> Slider", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Widgets section
    accordian.elements.widgets_label().should("be.visible").click();

    //Click on Slider
    slider.elements.slider_label().click();

    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Slider");
  });

  it("TC 01 - Verify Slider Functionality", function () {
    // Move the slider by setting its value
    //slider.elements.range_slider().click();
    cy.wait(2000);

    // Find the slider input element
    //const sliderInput = cy.get('.range-slider');

    // Set the value of the slider directly using invoke
    slider.elements.range_slider().invoke("val", 75).trigger("change");

    cy.wait(3000);

    // Get the value attribute of the slider input element
    slider.elements
      .range_slider()
      .invoke("val")
      .then((value) => {
        // Assert that the value retrieved matches 75
        expect(value).to.equal("75");
      });

    // Assert that the same value is visible in the slider result textbox
    //slider.elements.silder_result().should('have.value', '75', { timeout: 5000 });
  });
});

describe("Demo QA -> Progress Bar", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Widgets section
    accordian.elements.widgets_label().should("be.visible").click();

    //Click on Progress Bar
    progressbar.elements.progressbar_label().click();
  });

  it("TC 01 - Verify Progress Bar UI", function () {
    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Progress Bar");

    //Assert that progress bar is visible
    progressbar.elements.bar().should("be.visible");

    //Assert that start stop button is clickable
    progressbar.elements.bar_btn().should("be.enabled");
  });

  it("TC 02 - Verify Progress Bar Functionality", function () {
    //Get the initial text of the progress bar
    let initialText;
    progressbar.elements
      .bar()
      .invoke("text")
      .then((text) => {
        initialText = text;

        //Assert that progress is at 0% initially
        progressbar.elements.bar().should("have.text", text);
      });

    //Click on start button
    progressbar.elements.bar_btn().click();
    //Assert 'Start' button is changed to 'Stop' button
    progressbar.elements.bar_btn().should("have.text", "Stop");

    //Wait for 2.5 seconds
    cy.wait(2500);

    //Click on stop button
    progressbar.elements.bar_btn().click();

    // Get the text of the progress bar again
    progressbar.elements
      .bar()
      .invoke("text")
      .then((text) => {
        // Assert that the text has changed, indicating that the progress bar is moving
        expect(text).to.not.equal(initialText);
      });
  });

  it("TC 03 - Verify Reset Progress Bar Functionality", function () {
    //Get the initial text of the progress bar
    let initialText;
    progressbar.elements
      .bar()
      .invoke("text")
      .then((text) => {
        initialText = text;
      });

    //Click on start button
    progressbar.elements.bar_btn().click();

    cy.wait(12000);

    // Get the text of the progress bar again
    progressbar.elements
      .bar()
      .invoke("text")
      .then((text) => {
        // Assert that the text has changed, indicating that the progress bar is moving
        expect(text).to.equal("100%");
      });

    //Assert 'Start' button is changed to 'Reset' button
    progressbar.elements
      .reset_btn()
      .should("be.visible")
      .and("have.text", "Reset");

    //Click on reset button
    progressbar.elements.reset_btn().click();

    //Assert that progress is reset to 0%
    progressbar.elements.bar().should("have.text", "0%");
  });
});

describe("Demo QA -> Tabs", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Widgets section
    accordian.elements.widgets_label().should("be.visible").click();

    //Click on Tabs
    tab.elements.tab_label().click();
  });

  it("TC 01 - Verify Tabs UI", function () {
    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Tabs");

    //Assert only 'What' tab is visible
    tab.elements.what_tab().should("have.attr", "aria-selected", "true");
    //Assert 'What' tab content is visible
    tab.elements.what_content().should("be.visible");

    //Assert only 'origin' tab is not visible
    tab.elements.origin_tab().should("have.attr", "aria-selected", "false");
    //Assert 'origin' tab content is not visible
    tab.elements.origin_content().should("not.be.visible");

    //Assert only 'use' tab is not visible
    tab.elements.use_tab().should("have.attr", "aria-selected", "false");
    //Assert 'use' tab content is not visible
    tab.elements.use_content().should("not.be.visible");

    //Assert only 'more' tab is disabled
    tab.elements.more_tab().should("have.attr", "aria-disabled", "true");
    //Assert 'more' tab content is not visible
    tab.elements.more_content().should("not.be.visible");
  });

  it("TC 02 - Verify Tabs Functionality", function () {
    //Click on 'Origin'tab
    tab.elements.origin_tab().click();

    //Assert 'origin' tab is visible
    tab.elements.origin_tab().should("have.attr", "aria-selected", "true");
    //Assert 'origin' tab content is visible
    tab.elements.origin_content().should("be.visible");

    //Assert only 'What' tab is not visible
    tab.elements.what_tab().should("have.attr", "aria-selected", "false");
    //Assert 'What' tab content is not visible
    tab.elements.what_content().should("not.be.visible");
  });
});

describe("Demo QA -> Tool Tips", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Widgets section
    accordian.elements.widgets_label().should("be.visible").click();

    //Click on Tool Tips
    tooltips.elements.tooltip_label().click();
  });

  it("TC 01 - Verify Tool Tips UI", function () {
    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Tool Tips");

    //Assert button is visible
    tooltips.elements.tip_btn().should("be.visible");

    //Assert tetxfield is visible
    tooltips.elements.tip_textfield().should("be.visible");

    //Assert text is visible
    tooltips.elements.tip_text().find("a[href]").should("have.length", 2); //Check there are exactly two links in text
  });

  it("TC 02 - Verify Tool Tip function for button", function () {
    //Hover mouse over the button
    tooltips.elements.tip_btn().trigger("mouseover").invoke("show");

    //Assert tooltip is visible for button
    tooltips.elements
      .tooltip_result()
      .should("be.visible")
      .and("have.text", "You hovered over the Button");
  });

  it("TC 03 - Verify Tool Tip function for textfield", function () {
    //Hover mouse over the textfield
    tooltips.elements.tip_textfield().trigger("mouseover").invoke("show");

    //Assert tooltip is visible for tetxfield
    tooltips.elements
      .tooltip_result()
      .should("be.visible")
      .and("have.text", "You hovered over the text field");
  });

  it("TC 04 - Verify Tool Tip function for text", function () {
    //Hover mouse over the first link in text
    tooltips.elements
      .tip_text()
      .find("a[href]")
      .eq(0)
      .trigger("mouseover")
      .invoke("show");

    //Assert tooltip is visible for first link in text
    tooltips.elements
      .tooltip_result()
      .should("be.visible")
      .and("have.text", "You hovered over the Contrary");

    //Hover mouse over the second link in text
    tooltips.elements
      .tip_text()
      .find("a[href]")
      .eq(1)
      .trigger("mouseover")
      .invoke("show");

    //Assert tooltip is visible for second link in text
    //contain is only used because both tooltips are visible together
    tooltips.elements
      .tooltip_result()
      .should("be.visible")
      .and("contain.text", "You hovered over the 1.10.32");
  });
});

describe("Demo QA -> Menu", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Widgets section
    accordian.elements.widgets_label().should("be.visible").click();

    //Click on Menu
    menu.elements.menu_label().click();

    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Menu");
  });

  it("TC 01 - Verify Menu Functionality", function () {
    cy.wait(2000);

    menu.elements
      .menu_id()
      .contains("a", "Main Item 2") //Locate the element containing "Sub Sub Item 1"
      .parent() // Move up to the parent <li> element
      .find("a") // Find the child <a> elements within the parent <li>
      .contains("SUB SUB LIST »") //Locate the element containing "SUB SUB LIST"
      .parent() // Move up to the parent <li> element
      .find("a") // Find the child <a> elements within the parent <li>
      .contains("Sub Sub Item 1") // Locate the link for "Sub Sub Item 1"
      .should("exist") //Assert to check sub sub item 1 exists
      .click({ force: true }); // Click on the link
  });
});

describe("Demo QA -> Select Menu", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Widgets section
    accordian.elements.widgets_label().should("be.visible").click();

    //Click on Select Menu
    selectmenu.elements.selectmenu_label().click();
  });

  it("TC 01 - Verify Select Menu UI", function () {
    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Select Menu");

    //Assert Label names are correctly visible in menu section
    selectmenu.elements
      .entire_menu()
      .should("contain", "Select Value")
      .and("contain", "Select One")
      .and("contain", "Old Style Select Menu")
      .and("contain", "Multiselect drop down")
      .and("contain", "Standard multi select");

    //Assertion on Group-value dropdown
    selectmenu.elements.group_opt().should("be.visible");

    //Assertion on select one dropdown
    selectmenu.elements.select_one().should("be.visible");

    //Assertion on Old Style Select Menu
    selectmenu.elements.old_select().should("be.visible");

    //Assertion on Multiselect dropdown
    selectmenu.elements.multi_select().should("be.visible");

    //Assertion on Standard Multiselect
    selectmenu.elements.standard_select().should("be.visible");
  });

  it("TC 02 - Verify Select Value dropdown functionality", function () {
    //Click on select value dropdown
    selectmenu.elements
      .group_opt()
      .invoke("css", "overflow", "visible")
      .click();

    //Assert select value dropdown menu is visible
    selectmenu.elements.dropdown_menu().should("be.visible");

    //Assert dropdown itself contains two groups
    selectmenu.elements
      .dropdown_group1()
      .should("be.visible")
      .and("contain", "Group 1");
    selectmenu.elements
      .dropdown_group2()
      .should("be.visible")
      .and("contain.text", "Group 2");

    //Click on an option in dropdown menu
    selectmenu.elements.dropdown_menu().contains("A root option").click();

    //Assert selected option visible in select value dropdown
    selectmenu.elements.group_opt().should("contain", "A root option");
  });

  it("TC 03 - Verify Select One dropdown functionality", function () {
    //Click on select one dropdown
    selectmenu.elements.select_one().click();

    //Assert select one dropdown menu is visible
    selectmenu.elements.dropdown_menu().should("be.visible");

    //Assert dropdown itself contains two groups
    selectmenu.elements
      .select_dropdown_heading()
      .should("be.visible")
      .and("contain", "Pick one title");

    //Click on an option in dropdown menu
    selectmenu.elements.dropdown_menu().contains("Prof.").click();

    //Assert selected option visible in select one dropdown
    selectmenu.elements.select_one().should("contain", "Prof.");
  });

  it("TC 04 - Verify Old Style Select Menu functionality", function () {
    //Click on Old Style Select Menu
    selectmenu.elements.old_select().select("White");

    //Assert selected option visible in Old Style Select Menu
    selectmenu.elements.old_select().should("contain", "White");
  });

  it("TC 05 - Verify Multiselect dropdown functionality", function () {
    //Click on Multiselect dropdown
    selectmenu.elements.multi_select().click();

    //Assert Multiselect dropdown menu is visible
    selectmenu.elements.dropdown_menu().should("be.visible");

    //list for colors select
    const colors = ["Red", "Blue", "Black", "Green"];

    //Run loop to slect multiple options from dropdown
    colors.forEach((elements) => {
      selectmenu.elements.dropdown_menu().contains(elements).click();
    });

    //Assert each color is selected
    cy.wrap(colors).each((color) => {
      selectmenu.elements.multi_select().should("contain", color);
    });
  });

  it("TC 06 - Verify Standard Multiselect functionality", function () {
    //Select multiple options by using select
    selectmenu.elements
      .standard_select()
      .select(["Volvo", "Saab", "Audi"], { multiple: true });
  });
});

//\\\\\\\\\\\\\\\\//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//\\\\\\\\\\\\\\\\\\\\\\\\\//\\\\\\\\\\\\\\\\\\\//\\\\\\\\\\\\\\\\\\\

describe("Demo QA -> Sortable", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Interactions section
    sortable.elements.interactions_label().should("be.visible").click();

    //Click on Sortable
    sortable.elements.sortable_label().click();
  });

  it("TC 01 - Verify Sortable UI", function () {
    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Sortable");

    //Assert List Tab is visible
    sortable.elements.list_tab().should("be.visible");

    //Assert Grid Tab is visible
    sortable.elements.gird_tab().should("be.visible");

    //Assert List is visible
    sortable.elements.sort_list().should("be.visible");

    //Define list of all numbers
    const numbers = ["One", "Two", "Three", "Four", "Five", "Six"];

    //Assert List contains One to Six elements
    cy.wrap(numbers).each((num) => {
      sortable.elements.sort_list().should("contain", num);
    });
  });

  it("TC 02 - Verify Sortable List Functionality", function () {
    //Define list of all numbers
    const numbers = ["One", "Two", "Three", "Four", "Five", "Six"];

    //Rearrange elements in reverse order
    for (let i = 0; i < numbers.length - 1; i++) {
      //Drag the current element to the last position
      sortable.elements.sort_list().contains(numbers[i]).trigger("mousedown"); //Mouse down on the current element
      sortable.elements
        .sort_list()
        .contains("Six")
        .trigger("mousemove")
        .trigger("mouseup"); //Mouse move and mouse up on the last element

      //Assert that the order of elements has been rearranged
      sortable.elements
        .list_num()
        .eq(0)
        .should("contain", numbers[i + 1]);
    }
  });

  it("TC 03 - Verify Sortable Grid Functionality", function () {
    //Switch the tab to Grid section
    sortable.elements.gird_tab().click();
    cy.wait(1000);

    //Define list of all numbers
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

    //Rearrange elements in reverse order
    for (let i = 0; i < numbers.length - 1; i++) {
      //Drag the current element to the last position
      sortable.elements
        .sort_grid()
        .contains(numbers[i])
        .trigger("mousedown", { which: 1 }); //Mouse down on the current element
      sortable.elements
        .sort_grid()
        .contains("Nine")
        .trigger("mousemove")
        .trigger("mouseup"); //Mouse move and mouse up on the last element

      cy.wait(500);
      //Assert that the order of elements has been rearranged
      sortable.elements
        .list_num()
        .eq(6)
        .should("contain", numbers[i + 1]); //eq is set to 6 because it contains total 15 elements(including list & grid)
    }
  });
});

describe("Demo QA -> Selectable", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Interactions section
    sortable.elements.interactions_label().should("be.visible").click();

    //Click on Selectable
    selectable.elements.selectable_label().click();
  });

  it("TC 01 - Verify Selectable UI", function () {
    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Selectable");

    //Assert List Tab is visible
    selectable.elements.list_tab().should("be.visible");

    //Assert Grid Tab is visible
    selectable.elements.gird_tab().should("be.visible");

    //Assert List is visible
    selectable.elements.sort_list().should("be.visible");
  });

  it("TC 02 - Verify Selectable List Functionality", function () {
    //Loop through to select elements in list
    for (let i = 1; i <= 3; i++) {
      selectable.elements
        .options_list()
        .eq(i)
        .click()
        .should("have.css", "background-color", "rgb(0, 123, 255)");
    }

    //Loop through again to deselect elements in list
    for (let i = 1; i <= 3; i++) {
      selectable.elements
        .options_list()
        .eq(i)
        .click()
        .should("have.css", "background-color", "rgb(255, 255, 255)");
    }
  });

  it("TC 03 - Verify Selectable Grid Functionality", function () {
    //Switch the tab to Grid section
    sortable.elements.gird_tab().click();
    cy.wait(1000);

    //Loop through to select elements in list
    for (let i = 6; i < 12; i++) {
      selectable.elements
        .options_list()
        .eq(i)
        .click()
        .should("have.css", "background-color", "rgb(0, 123, 255)");
    }

    //Loop through again to deselect elements in list
    for (let i = 6; i < 12; i++) {
      selectable.elements
        .options_list()
        .eq(i)
        .click()
        .should("have.css", "background-color", "rgb(255, 255, 255)");
    }
  });
});

describe("Demo QA -> Resizable", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Interactions section
    sortable.elements.interactions_label().should("be.visible").click();

    //Click on Resizable
    resize.elements.resizable_label().click();
  });

  it("TC 01 - Verify Resizable UI", function () {
    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Resizable");

    //Assert restricted resizable box is visible
    resize.elements.restrict_box().should("be.visible");

    //Assert no restriction box is visible
    resize.elements.unrestricted_box().should("be.visible");
  });

  it("TC 02 - Verify restricted resizable functionality", function () {
    //Assert to check current width and height
    resize.elements
      .restrict_box()
      .should("have.css", "width", "200px")
      .and("have.css", "height", "200px");

    //Resize the element to its minimum width and height
    resize.elements
      .resize_cursor()
      .eq(0)
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { clientX: 0, clientY: 0 })
      .trigger("mouseup");

    //Assert to check width and height set to minimum
    resize.elements
      .restrict_box()
      .should("have.css", "width", "150px")
      .and("have.css", "height", "150px");

    //Resize the element to its maximum width and height
    resize.elements
      .resize_cursor()
      .eq(0)
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { clientX: 9999, clientY: 9999 })
      .trigger("mouseup");

    //Assert to check width and height set to minimum
    resize.elements
      .restrict_box()
      .should("have.css", "width", "500px")
      .and("have.css", "height", "300px");
  });

  it("TC 03 - Verify unrestricted resizable functionality", function () {
    //Assert to check current width and height
    resize.elements
      .unrestricted_box()
      .should("have.css", "width", "200px")
      .and("have.css", "height", "200px");

    //Resize the element to any width and height
    resize.elements
      .resize_cursor()
      .eq(1)
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { clientX: 951, clientY: 1423 })
      .trigger("mouseup")
      .then((values) => {
        //Assert to check width and height is changed/not same
        expect(values).to.have.css("width").not.eq("200px");
        expect(values).to.have.css("height").not.eq("200px");
      });
  });
});

describe("Demo QA -> Droppable", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Interactions section
    sortable.elements.interactions_label().should("be.visible").click();

    //Click on Droppable
    dropp.elements.droppable_label().click();
  });

  it("TC 01 - Verify Droppable UI", function () {
    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Droppable");

    //Assert to check all tab labels
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

    //Assert Drag box
    dropp.elements.dragbox().should("be.visible").and("contain", "Drag me");

    //Assert Drop box
    dropp.elements.dropbox().should("be.visible").and("contain", "Drop here");
  });

  it("TC 02 - Verify Single droppable functionality", function () {
    //Drag and drop the element into dropbox
    dropp.elements.dragbox().trigger("mousedown", { which: 1 });
    dropp.elements
      .dropbox()
      .eq(0)
      .trigger("mousemove")
      .trigger("mouseup", { force: true });

    cy.wait(2000);

    //Assert box is dropped into box and color is changed
    dropp.elements
      .dropbox()
      .eq(0)
      .should("have.text", "Dropped!")
      .and("have.css", "background-color", "rgb(70, 130, 180)");
  });

  it("TC 03 - Verify Acceptable box functionality", function () {
    //Switch to accept tab
    dropp.elements.accept_tab().click();
    cy.wait(1000);

    //Drag and drop the Acceptbox into dropbox
    dropp.elements.acceptbox().trigger("mousedown", { which: 1 });
    dropp.elements
      .dropbox()
      .eq(1)
      .trigger("mousemove")
      .trigger("mouseup", { force: true });

    //Assert box is dropped into box and color is changed
    dropp.elements
      .dropbox()
      .eq(1)
      .should("have.text", "Dropped!")
      .and("have.css", "background-color", "rgb(70, 130, 180)");
  });

  it("TC 04 - Verify not acceptable box functionality", function () {
    //Switch to accept tab
    dropp.elements.accept_tab().click();
    cy.wait(1000);

    //Drag and drop the Acceptbox into dropbox
    dropp.elements.noacceptbox().trigger("mousedown", { which: 1 });
    dropp.elements
      .dropbox()
      .eq(1)
      .trigger("mousemove")
      .trigger("mouseup", { force: true });

    //Assert element is not accepted in drop box
    dropp.elements
      .dropbox()
      .eq(1)
      .should("not.have.text", "Dropped!")
      .and("not.have.css", "background-color", "rgb(70, 130, 180)");
  });

  it("TC 05 - Verify no greed prevent propogation functionality", function () {
    //Switch to prevent propogation tab
    dropp.elements.prevent_tab().click();
    cy.wait(1000);

    //Drag and drop box into No greed dropbox
    dropp.elements.greed_dragbox().trigger("mousedown", { which: 1 });
    dropp.elements
      .nogreed_innerbox()
      .trigger("mousemove")
      .trigger("mouseup", { force: true });

    //Assert box is dropped in no greed(parent and inner both) dropbox and color & text is changed
    dropp.elements
      .nogreedbox()
      .should("contain", "Dropped!")
      .and("have.css", "background-color", "rgb(70, 130, 180)");
    dropp.elements
      .nogreed_innerbox()
      .should("have.text", "Dropped!")
      .and("have.css", "background-color", "rgb(70, 130, 180)");
  });

  it("TC 06 - Verify Revert Draggable functionality", function () {
    //Switch to Revert Draggable tab
    dropp.elements.revert_tab().click();
    cy.wait(1000);

    //Get the initial position of the draggable element
    dropp.elements.revertbox().then((box) => {
      const initial_pos = box.position();

      //Drag and drop revert box into dropbox
      dropp.elements.revertbox().trigger("mousedown", { which: 1 });
      dropp.elements
        .dropbox()
        .eq(2)
        .trigger("mousemove")
        .trigger("mouseup", { force: true });

      cy.wait(1000);

      //Assert box is dropped in dropbox
      dropp.elements
        .dropbox()
        .eq(2)
        .should("have.text", "Dropped!")
        .and("have.css", "background-color", "rgb(70, 130, 180)");

      //Assert that the draggable element has reverted back to its initial position
      dropp.elements.revertbox().then((box) => {
        expect(box.position()).to.deep.equal(initial_pos); //deep.equal is used to deeply compare two objects to check if their contents are equal.
      });
    });
  });

  it("TC 07 - Verify No Revert Draggable functionality", function () {
    //Switch to Revert Draggable tab
    dropp.elements.revert_tab().click();
    cy.wait(1000);

    //Get the initial position of the draggable element
    dropp.elements.norevertbox().then((box) => {
      const initial_pos = box.position();

      //Drag and drop revert box into dropbox
      dropp.elements.norevertbox().trigger("mousedown", { which: 1 });
      dropp.elements
        .dropbox()
        .eq(2)
        .trigger("mousemove")
        .trigger("mouseup", { force: true });

      cy.wait(1000);

      //Assert box is dropped in dropbox
      dropp.elements
        .dropbox()
        .eq(2)
        .should("have.text", "Dropped!")
        .and("have.css", "background-color", "rgb(70, 130, 180)");

      //Assert that the draggable element has not reverted back to its initial position
      dropp.elements.norevertbox().then((box) => {
        expect(box.position()).not.to.deep.equal(initial_pos); //deep.equal is used to deeply compare two objects to check if their contents are equal.
      });
    });
  });
});

describe("Demo QA -> Dragabble", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Interactions section
    sortable.elements.interactions_label().should("be.visible").click();

    //Click on Dragabble
    dragg.elements.dragabble_label().click();
  });

  it("TC 01 - Verify Dragabble UI", function () {
    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Dragabble");

    //Assert to check all tab labels
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

    //Assert Drag box
    dragg.elements.dragbox().should("be.visible").and("have.text", "Drag me");
  });

  it("TC 02 - Verify Simple Dragabble functionality", function () {
    cy.wait(2000);

    //Get the initial position of the draggable element
    dragg.elements.dragbox().then((initial) => {
      const initial_pos = initial.position();

      //Print in log the initial position of drag box
      cy.log("Initial Position:", initial_pos);

      //Variable to store new position
      const left_move = 300;
      const top_move = 475;

      //Drag the dragabble element.
      dragg.elements
        .dragbox()
        .move({ deltaX: left_move, deltaY: top_move, force: true });

      cy.wait(2000);

      //Assert that dropbox is moved by the same values of left and top
      dragg.elements.dragbox().then((final) => {
        const final_pos = final.position();
        cy.log("Final Position", final_pos);
        expect(final_pos.left).to.deep.equal(initial_pos.left + left_move);
        expect(final_pos.top).to.deep.equal(initial_pos.top + top_move);
      });
    });

    // //Get the initial position of the draggable element
    // dragg.elements.dragbox().then(box_ipos => {
    //     const initial_pos = box_ipos.position();
    //     cy.log('Initial Position:', initial_pos);

    //     //Calculate the new coordinates
    //     const newX = initial_pos.left + 200;
    //     const newY = initial_pos.top + 100;

    //     //Drag and move the dragbox
    //     dragg.elements.dragbox().click() //to set focus on it
    //         .trigger('mousedown', { which: 1, pageX: initial_pos.left, pageY: initial_pos.top })
    //         .trigger('mousemove', { clientX: newX, clientY: newY })
    //         .trigger('mouseup', { force: true });

    //     cy.wait(2000);

    //     //Assert that the dragbox is moved to a new position
    //     dragg.elements.dragbox().then(box_fpos => {
    //         const final_pos = box_fpos.position();
    //         expect(final_pos).not.to.deep.equal(initial_pos);
    //         cy.log('Final Position:', final_pos);
    //         //expect(final_pos.left).to.equal(newX);    //top is variable as scrollable event affects its position
    //         //expect(final_pos.top).to.equal(newY);     //left is restricted to 566
    //     })
    // })
  });

  it("TC 03 - Verify X - Axis restricted Dragabble functionality", function () {
    //Switch Tabs
    dragg.elements.axis_restrict_tab().click();
    cy.wait(2000);

    //Get the initial position of the draggable element
    dragg.elements.x_restrictbox().then((initial) => {
      const initial_pos = initial.position();

      //Print in log the initial position of drag box
      cy.log("Initial Position:", initial_pos);

      //Variable to store new position
      const left_move = 450;
      const top_move = 500;

      //Drag the dragabble element.
      dragg.elements
        .x_restrictbox()
        .move({ deltaX: left_move, deltaY: top_move, force: true });

      cy.wait(2000);

      //Assert that dropbox is moved by the same values of left and top
      dragg.elements.x_restrictbox().then((final) => {
        const final_pos = final.position();
        cy.log("Final Position", final_pos);
        expect(final_pos.left).to.deep.equal(initial_pos.left + left_move);
        expect(final_pos.top).not.to.deep.equal(initial_pos.top + top_move);
      });
    });
  });

  it("TC 04 - Verify Y - Axis restricted Dragabble functionality", function () {
    //Switch Tabs
    dragg.elements.axis_restrict_tab().click();
    cy.wait(2000);

    //Get the initial position of the draggable element
    dragg.elements.y_restrictbox().then((initial) => {
      const initial_pos = initial.position();

      //Print in log the initial position of drag box
      cy.log("Initial Position:", initial_pos);

      //Variable to store new position
      const left_move = 911;
      const top_move = 365;

      //Drag the dragabble element.
      dragg.elements
        .y_restrictbox()
        .move({ deltaX: left_move, deltaY: top_move, force: true });

      cy.wait(2000);

      //Assert that dropbox is moved by the same values of left and top
      dragg.elements.y_restrictbox().then((final) => {
        const final_pos = final.position();
        cy.log("Final Position", final_pos);
        expect(final_pos.left).not.to.deep.equal(initial_pos.left + left_move);
        expect(final_pos.top).to.deep.equal(initial_pos.top + top_move);
      });
    });
  });

  it("TC 05 - Verify Container Restricted Dragabble functionality", function () {
    //Switch Tabs
    dragg.elements.container_restrict_tab().click();
    cy.wait(2000);

    //Get the parent box values
    dragg.elements.parent_block().then((parent) => {
      const parent_box = parent[0].getBoundingClientRect();

      cy.log("Parent Values top:", parent_box.top);
      cy.log("Parent Values bottom:", parent_box.bottom);
      cy.log("Parent Values left:", parent_box.left);
      cy.log("Parent Values right:", parent_box.right);

      //Get the drag box initial values
      dragg.elements.dragbox_restrict().then((child) => {
        const drag_box_initial = child[0].getBoundingClientRect();

        cy.log("Child Values top:", drag_box_initial.top);
        cy.log("Child Values bottom:", drag_box_initial.bottom);
        cy.log("Child Values left:", drag_box_initial.left);
        cy.log("Child Values right:", drag_box_initial.right);

        //Assert that initially dragbox is inside parent
        expect(parent_box.top).to.be.deep.lessThan(drag_box_initial.top);
        expect(parent_box.left).to.be.deep.lessThan(drag_box_initial.left);
        expect(drag_box_initial.right).to.be.deep.lessThan(parent_box.right);
        expect(drag_box_initial.bottom).to.be.deep.lessThan(parent_box.bottom);

        //Drag the box to the maximum position
        dragg.elements
          .dragbox_restrict()
          .move({ deltaX: 9999, deltaY: 9999, force: true });

        cy.wait(2000);

        //Get the values after dragbox is moved to the maximum position
        dragg.elements.dragbox_restrict().then((final) => {
          const drag_box_final = final[0].getBoundingClientRect();

          //Assert that final dragbox position is still inside parent
          expect(parent_box.top).to.be.deep.lessThan(drag_box_final.top);
          expect(parent_box.left).to.be.deep.lessThan(drag_box_final.left);
          expect(drag_box_final.right).to.be.deep.lessThan(parent_box.right);
          expect(drag_box_final.bottom).to.be.deep.lessThan(parent_box.bottom);
        });
      });
    });
  });

  it("TC 06 - Verify Text Restricted Dragabble functionality", function () {
    //Switch Tabs
    dragg.elements.container_restrict_tab().click();
    cy.wait(2000);

    //Get the parent box values
    dragg.elements.text_restrict_parent().then((parent) => {
      const parent_box = parent[0].getBoundingClientRect();

      //Get the text initial values
      dragg.elements.text_restrict().then((child) => {
        const text_box_initial = child[0].getBoundingClientRect();

        //Assert that initially text is inside parent
        expect(parent_box.top).to.be.deep.lessThan(text_box_initial.top);
        expect(parent_box.left).to.be.deep.lessThan(text_box_initial.left);
        expect(text_box_initial.right).to.be.deep.lessThan(parent_box.right);
        expect(text_box_initial.bottom).to.be.deep.lessThan(parent_box.bottom);

        //Drag the text to the maximum position
        dragg.elements
          .text_restrict()
          .move({ deltaX: 9999, deltaY: 9999, force: true });

        cy.wait(2000);

        //Get the values after text is moved to the maximum position
        dragg.elements.text_restrict().then((final) => {
          const text_box_final = final[0].getBoundingClientRect();

          //Assert that final text position is still inside parent
          expect(parent_box.top).to.be.deep.lessThan(text_box_final.top);
          expect(parent_box.left).to.be.deep.lessThan(text_box_final.left);
          expect(text_box_final.right).to.be.deep.lessThan(parent_box.right);
          expect(text_box_final.bottom).to.be.deep.lessThan(parent_box.bottom);
        });
      });
    });
  });

  it("TC 07 - Verify Cursor Style Dragabble functionality", function () {
    //Switch Tabs
    dragg.elements.cursor_style_tab().click();

    //     cy.wait(2000);
    //     // Store initial cursor style
    //     let initialCursorStyle

    //     // Get the draggable element and store its initial cursor style
    //     dragg.elements.topleft_cursor().should('have.css', 'cursor').then(cursorStyle => {
    //         initialCursorStyle = cursorStyle
    //     })

    //     // Drag the draggable element
    //     dragg.elements.topleft_cursor().trigger('mousedown', { which: 1 ,pageX: 0, pageY: 0})
    //         .trigger('mousemove', { clientX: 500, clientY: 600 }).then(() => {
    //         //.trigger('mouseup', { force: true })

    //     cy.wait(2000);

    //     // Verify cursor style change after drag
    //     dragg.elements.topleft_cursor().should('have.css', 'cursor').then(newCursorStyle => {
    //         expect(newCursorStyle).not.to.equal(initialCursorStyle)
    //     })
    // })

    cy.wait(1000);

    //Move the second box
    dragg.elements
      .topleft_cursor()
      .move({ deltaX: 380, deltaY: -60, force: true })
      .then(($element) => {
        const cursorStyle = $element.css("cursor");

        // Assert that the cursor style matches the expected value
        expect(cursorStyle).to.equal("move");
      });

    cy.wait(1000);

    //Move the third box
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe("Demo QA -> Book Store Application (Register)", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Book Store Application section
    login.elements
      .bookstore_label()
      .scrollIntoView()
      .should("be.visible")
      .click();

    //Click on Login
    login.elements.login_label().click();

    //Click on New User button
    login.elements.newuser_btn().click();
  });

  it("TC 01 - Verify Book Store Application Register Page UI", function () {
    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Register");

    //Assert login form contains welcome text
    register.elements
      .register_form()
      .should("contain", "Register to Book Store");

    //Assert that all labels are visible
    register.elements
      .firtname_label()
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

    //Assert on all input texfields
    register.elements.firstname().should("be.visible");
    register.elements.lastname().should("be.visible");
    register.elements.username().should("be.visible");
    register.elements.password().should("be.visible");

    //Assert on register button
    register.elements.register_btn().should("be.visible").and("be.enabled");

    //Assert on back to login button
    register.elements.backtologin_btn().should("be.visible").and("be.enabled");

    //Assert captcha is visible
    register.elements.captcha().should("be.visible");
  });

  it("TC 02 - Verify Book Store Application Register Functionality", function () {
    //Intercept URL request made for 'Created' account
    cy.intercept({
      method: "POST",
      url: "https://demoqa.com/Account/v1/User",
    }).as("api_response_details"); //as is used to pass an alias name. which stores the reponse of API call

    //Intercept when windows generate an alert message
    cy.on("window:alert", (message) => {
      // Assert on the alert message
      expect(message).to.equal("User Register Successfully.");
    });

    //Enter user details
    register.elements.firstname().type("Avi");
    register.elements.lastname().type("Singh");
    register.elements.username().type("avinh@1234");
    register.elements.password().type("Avinabh@1234");

    //Verify the captcha box manually
    cy.pause();
    //Click on Resume button manually after this

    //Click on Register button
    register.elements.register_btn().click();

    //Wait for the intercepted request and perform assertions using alias name
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        expect(interception.response.statusCode).to.equal(201);
        expect(interception.response.statusMessage).to.equal("Created");
      }
    );
  });

  it('TC 03 - Verify validation message for blank input in "Register" page', function () {
    //Click on Register button
    register.elements.register_btn().click();

    //Assert validation message is visible
    register.elements.invalid_input().should("be.visible");
    register.elements.invalid_input().should("have.length", 4); //ensures that there are four objects with the specified class.
  });

  it("TC 04 - Verify validation message for already registered user", function () {
    //Intercept URL request made for 'User Exists'
    cy.intercept({
      method: "POST",
      url: "https://demoqa.com/Account/v1/User",
    }).as("api_response_details");

    //Enter user details
    register.elements.firstname().type("Avi");
    register.elements.lastname().type("Singh");
    register.elements.username().type("avinabh@1234");
    register.elements.password().type("Avinabh@1234");

    //Verify the captcha box manually
    cy.pause();
    //Click on Resume button manually after this

    //Click on Register button
    register.elements.register_btn().click();

    //Wait for the intercepted request and perform assertions using alias name
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        expect(interception.response.statusCode).to.equal(406);
        expect(interception.response.statusMessage).to.equal("Not Acceptable");
      }
    );

    //Assert validation message is displayed
    register.elements
      .validationmsg()
      .should("be.visible")
      .and("have.text", "User exists!");
  });

  it("TC 05 - Verify validation message for invalid input in password field", function () {
    //Intercept URL request made for 'Invalid password'
    cy.intercept({
      method: "POST",
      url: "https://demoqa.com/Account/v1/User",
    }).as("api_response_details");

    //Enter user details
    register.elements.firstname().type("Avi");
    register.elements.lastname().type("Singh");
    register.elements.username().type("avinabh@1234");

    //Enter invalid password
    register.elements.password().type("123");

    //Verify the captcha box manually
    cy.pause();
    //Click on Resume button manually after this

    //Click on Register button
    register.elements.register_btn().click();

    //Wait for the intercepted request and perform assertions using alias name
    cy.wait("@api_response_details", { timeout: 10000 }).then(
      (interception) => {
        expect(interception.response.statusCode).to.equal(400);
        expect(interception.response.statusMessage).to.equal("Bad Request");
      }
    );

    //Assert validation message is displayed
    register.elements
      .validationmsg()
      .should("be.visible")
      .and(
        "have.text",
        "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer."
      );
  });

  it("TC 06 - Verify validation message for blank input in captcha verification", function () {
    //Enter user details
    register.elements.firstname().type("Avi");
    register.elements.lastname().type("Singh");
    register.elements.username().type("avinabh@1234");
    register.elements.password().type("1234@Avinabh");

    //Click on Register button
    register.elements.register_btn().click();

    //Assert validation message is displayed
    register.elements
      .validationmsg()
      .should("be.visible")
      .and("have.text", "Please verify reCaptcha to register!");
  });

  it("TC 07 - Verify Back to Login functionality in Register Page", function () {
    //Click on Back to login button
    register.elements.backtologin_btn().click();

    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Login");
  });
});

describe("Demo QA -> Book Store Application (Login)", () => {
  beforeEach(function () {
    //call to ignore_ad function
    functions.ignore_ad();

    //Set screen size
    cy.viewport(1920, 1080);

    //Visit the demoQA website
    cy.visit("https://demoqa.com/");

    //Click on Book Store Application section
    login.elements
      .bookstore_label()
      .scrollIntoView()
      .should("be.visible")
      .click();

    //Click on Login
    login.elements.login_label().click();
  });

  it("TC 01 - Verify Book Store Application Login Page UI", function () {
    //Assertion to check Header
    textbox.elements.header_label().should("have.text", "Login");

    //Assert login form contains welcome text
    login.elements.login_form().should("contain", "Welcome");

    //Assert that username and password label is visible
    login.elements
      .username_label()
      .should("be.visible")
      .and("contain", "UserName");
    login.elements
      .password_label()
      .should("be.visible")
      .and("contain", "Password");

    //Assert on username and password textfield
    login.elements.username().should("be.visible");
    login.elements.password().should("be.visible");

    //Assert on login button
    login.elements.login_btn().should("be.visible").and("be.enabled");

    //Assert on new user button
    login.elements.newuser_btn().should("be.visible").and("be.enabled");
  });

  it("TC 02 - Verify Book Store Application Login Functionality", function () {
    //Enter valid username and password
    login.elements.username().type("Avi@1234");
    login.elements.password().type("Avi@1234");

    //Click on login button
    login.elements.login_btn().click();

    //Assert user is logged in successfully
    profile.elements.username_label().should("be.visible");
    profile.elements
      .username_value()
      .should("be.visible")
      .and("have.text", "Avi@1234");
  });

  it("TC 03 - Verify blank input in Login Page", function () {
    //Click on login button
    login.elements.login_btn().click();

    //Assert validation message is visible
    register.elements.invalid_input().should("be.visible");
    register.elements.invalid_input().should("have.length", 2); //ensures that there are four objects with the specified class.
  });
});
