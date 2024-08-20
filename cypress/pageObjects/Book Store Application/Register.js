class register {
    elements = {
    
        register_label: () => cy.get('.menu-list').eq(5).find('li').eq(1),
        register_form: () => cy.get('[id="userForm"]'),
        firtname_label: () => cy.get('[id="firstname-label"]'),
        firstname: () => cy.get('[id="firstname"]'),

        lastname_label: () => cy.get('[id="lastname-label"]'),
        lastname: () => cy.get('[id="lastname"]'),

        username_label: () => cy.get('[id="userName-label"]'),
        username: () => cy.get('[id="userName"]'),

        password_label: () => cy.get('[id="password-label"]'),
        password: () => cy.get('[id="password"]'),

        backtologin_btn: () => cy.get('[id="gotologin"]'),
        register_btn: () => cy.get('[id="register"]'),
        captcha: () => cy.get('[id="g-recaptcha"]'),

        invalid_input: () => cy.get('.is-invalid'),
        validationmsg: () => cy.get('[id="name"]'),

    }
}
export default new register;