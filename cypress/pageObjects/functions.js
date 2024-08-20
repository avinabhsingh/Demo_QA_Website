class functions {

  // Function to block ads on the website
  ignore_ad() {
    cy.intercept("GET", "https://oajs.openx.net/**", (req) => {
      // Return a response object with status 500 to indicate the request was blocked
      req.reply({
        status: 500,
        body: "Blocked by Cypress",
        headers: {
          "cypress-blocked": "true",
        },
      });
    });
  }
}

export default new functions();
