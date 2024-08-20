class practice_form{
    elements = {
        form_label : () => cy.contains('Forms'),
        practice_form_label: () => cy.get('.menu-list').eq(1).find('li').eq(0),

        //Form Labels
        name_label: () => cy.get('[id="userName-label"]'),
        email_label: () => cy.get('[id="userEmail-label"]'),
        gender_label: () => cy.get('[id="genterWrapper"]'),
        mobile_label: () => cy.get('[id="userNumber-label"]'),
        dob_label: () => cy.get('[id="dateOfBirth-label"]'),
        subject_label: () => cy.get('[id="subjects-label"]').eq(0),
        hobbies_label: () => cy.get('[id="subjects-label"]').eq(1),
        picture_label: () => cy.get('[id="subjects-label"]').eq(2),
        address_label: () => cy.get('[id="currentAddress-label"]'),
        state_city_label: () => cy.get('[id="stateCity-label"]'),
        submit_btn: () => cy.get('button[id="submit"]'),

        //Form input form_fields
        first_name: () => cy.get('input[id="firstName"]'),
        last_name: () => cy.get('input[id="lastName"]'),
        email: () => cy.get('input[id="userEmail"]'),
        number: () => cy.get('[id="userNumber"]'),

        //Gender Options
        male: () => cy.get('[id="gender-radio-1"]'),
        female: () => cy.get('[id="gender-radio-2"]'),
        other: () => cy.get('[id="gender-radio-3"]'),
        
        //Date of birth
        dob: () => cy.get('[id="dateOfBirthInput"]'),
        year: () => cy.get('[class="react-datepicker__year-select"]'),
        month: () => cy.get('[class="react-datepicker__month-select"]'), 
        day: () => cy.get('.react-datepicker__week').find('.react-datepicker__day').eq(21),


        subject: () => cy.get('[id="subjectsContainer"]'),

        //Hobbies Options
        sports: () => cy.get('[id="hobbies-checkbox-1"]'),
        reading: () => cy.get('[id="hobbies-checkbox-2"]'),
        music: () => cy.get('[id="hobbies-checkbox-3"]'),

        picture_choose: () => cy.get('[id="uploadPicture"]'),
        address: () => cy.get('[id="currentAddress"]'),
        //State
        state: () => cy.get('[id="state"]'),
        rj: () => cy.get('[id="react-select-3-option-3"]'),
        //City
        city: () => cy.get('[id="city"]'),
        jaipur: () => cy.get('[id="react-select-4-option-0"]'),

        //Result Table
        result_table: () => cy.get('[class="modal-body"]'),
    }
}

export default new practice_form;