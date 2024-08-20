class login {
    elements = {
        bookstore_label: () => cy.contains('Book Store Application'),
        login_label: () => cy.get('.menu-list').eq(5).find('li').eq(0),

        login_form: () => cy.get('[id="userForm"]'),
        username_label: () => cy.get('[id="userName-label"]'),
        username: () => cy.get('[id="userName"]'),

        password_label: () => cy.get('[id="password-label"]'),
        password: () => cy.get('[id="password"]'),
        login_btn: () => cy.get('[id="login"]'),
        newuser_btn: () => cy.get('[id="newUser"]'),

    }
}
export default new login;