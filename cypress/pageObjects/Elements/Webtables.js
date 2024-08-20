class webtables{

    elements = {
        webtable_label: () => cy.get('.menu-list').find('li').eq(3),
        addrecord_btn: () => cy.get('button[id="addNewRecordButton"]'),
        searchbar: () => cy.get('input[id="searchBox"]'),
        col_headers: () => cy.get('[class="rt-resizable-header-content"]'),
        pagination: () => cy.get('[class="pagination-bottom"]'),
        table_rows: () => cy.get('[class="rt-tr-group"]'),
        pagination_dropdown: () => cy.get('select[aria-label="rows per page"]'),
        next_btn: () => cy.contains('button[class="-btn"]','Next'),
        previous_btn: () => cy.contains('button[class="-btn"]','Previous'),
        page_number: () => cy.get('input[aria-label="jump to page"]'),
        empty_table: () => cy.get('[class="rt-noData"]'),
        edit_record: () => cy.get('[id="edit-record-3"]'),
        delete_record: () => cy.get('[id="delete-record-1"]'),

        //Registration Form
        register_form: () => cy.get('[id="userForm"]'),
        form_header: () => cy.get('[id="registration-form-modal"]'),
        form_fields: () => cy.get('[class="form-label"]'),
        firstname: () => cy.get('input[id="firstName"]'),
        lastname: () => cy.get('input[id="lastName"]'),
        age: () => cy.get('input[id="age"]'),
        email: () => cy.get('input[id="userEmail"]'),
        salary: () => cy.get('input[id="salary"]'),
        dept: () => cy.get('input[id="department"]'),
        submit_btn: () => cy.get('button[id="submit"]'),
        close_btn: () => cy.get('button[class="close"]'),
        

    }

    addMultiRecords() {
        const recordsToAdd = [
            { firstName: 'Avinabh', lastName: 'Singh', age: '25', email: 'Avi@gmail.com', salary: '9999999', dept: 'IT' },
            { firstName: 'Jeet', lastName: 'B', age: '30', email: 'jeet@yahoo.com', salary: '833200', dept: 'Finance' },
            { firstName: 'Abhi', lastName: 'WEST', age: '12', email: 'asd234@tinder.com', salary: '34500', dept: 'IT' },
            { firstName: 'Renu', lastName: 'north', age: '33', email: 'qwerty123@google.in', salary: '45329', dept: 'COMM' },
           // { firstName: 'Preet', lastName: 'south', age: '45', email: 'preety@rediffmail.com', salary: '300', dept: 'SALES' },
           // { firstName: 'Nikhil', lastName: 'east', age: '56', email: 'nick34@fishery.co', salary: '8', dept: 'SALES' },     
        ];
        //Click on add record button
        this.elements.addrecord_btn().click();
        //Loop through each record to enter details and submit
        recordsToAdd.forEach(record => {
            this.elements.firstname().type(record.firstName);
            this.elements.lastname().type(record.lastName);
            this.elements.age().type(record.age);
            this.elements.email().type(record.email);
            this.elements.salary().type(record.salary);
            this.elements.dept().type(record.dept);
            // Click on submit button
            this.elements.submit_btn().click();
            //Click on add record button again
            this.elements.addrecord_btn().click();
            cy.wait(1100);
        });
        this.elements.close_btn().click();
    }
}

export default new webtables;