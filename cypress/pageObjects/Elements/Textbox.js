class textbox{
    elements = {
        elements_label : () => cy.contains('Elements'),
        //textbox_label : () => cy.contains('Text Box'),
        header_label: () => cy.get('[class="text-center"]'),
        textbox_label: () => cy.get('.menu-list').find('li').eq(0),  
        full_name_label : () => cy.get('[id="userName-label"]'),
        email_label : () => cy.get('[id="userEmail-label"]'),
        current_add_label : () => cy.get('[id="currentAddress-label"]'),
        permanent_add_label : () => cy.get('[id="permanentAddress-label"]'),

        full_name : () => cy.get('[id="userName"]'),
        email : () => cy.get('[id="userEmail"]'),
        current_add : () => cy.get('[id="currentAddress"]'),
        permanent_add : () => cy.get('[id="permanentAddress"]'),
        submit_btn : () => cy.get('button[id="submit"]'),
        result_box: () => cy.get('[id="output"]'),
        result_name : () => cy.get('[id="name"]'),
        result_email : () => cy.get('[id="email"]'),
        result_curr_add : () => cy.get('[id="currentAddress"]'),
        result_perm_add : () => cy.get('[id="permanentAddress"]'),

    }
}
export default new textbox;