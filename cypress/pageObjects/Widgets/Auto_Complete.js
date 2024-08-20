class autocomplete{
    elements = {
        autocomplete_label: () => cy.get('.menu-list').eq(3).find('li').eq(1),
        multi_textbox: () => cy.get('[id="autoCompleteMultipleContainer"]'),
        multiple: () => cy.get('[id="autoCompleteMultiple"]'),
        suggestions:() => cy.get('.auto-complete__menu', { timeout: 10000 }),
        close_multi: () => cy.get('[class="css-xb97g8 auto-complete__multi-value__remove"]', { timeout: 10000 }),

        single: () => cy.get('[id="autoCompleteSingle"]'),


    }

    add_multi_colors(){

        const multi_input = ['r', 'b', 'p', 'o', 'll'];
        const multi_color = ['Red', 'Blue', 'Purple', 'Indigo', 'Yellow'];

        //Loop through the array
        multi_input.forEach((element, index) => {

            //Type the current element into the text field and press enter
            this.elements.multiple().type(`${element}`);

            //Assert that the suggestion contains 'blue' and press enter
           this.elements.suggestions().contains(multi_color[index]).should('exist').type('{enter}');
        });
    }
}
export default new autocomplete;