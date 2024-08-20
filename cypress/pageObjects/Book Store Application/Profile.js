class profile {
    elements = {
        username_label: () => cy.get('[id="userName-label"]'),
        username_value: () => cy.get('[id="userName-value"]'),

    }
}
export default new profile;