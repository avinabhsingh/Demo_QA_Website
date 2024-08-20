class datepicker {
    elements = {
        datepicker_label: () => cy.get('.menu-list').eq(3).find('li').eq(2),

        date: () => cy.get('[id="datePickerMonthYearInput"]'),
        year: () => cy.get('[class="react-datepicker__year-select"]'),
        month: () => cy.get('[class="react-datepicker__month-select"]'),
        day: () => cy.get('.react-datepicker__week').find('.react-datepicker__day').eq(21),

        dateandtime: () => cy.get('[id="dateAndTimePickerInput"]'),
        year_dropdown: () => cy.get('[class="react-datepicker__year-read-view--down-arrow"]'),
        year_scroll: () => cy.get('.react-datepicker__navigation--years-previous'),
        year_select: () => cy.get('.react-datepicker__year-option'),

        month_dropdown: () => cy.get('[class="react-datepicker__month-read-view--down-arrow"]'),
        month_select: () => cy.get('[class="react-datepicker__month-option"]'),

        time: () => cy.get('[class="react-datepicker__time-list-item "]')
        


    }
}

export default new datepicker;