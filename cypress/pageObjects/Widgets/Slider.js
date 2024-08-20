class slider {
    elements = {
        slider_label: () => cy.get('.menu-list').eq(3).find('li').eq(3),
        range_slider: () => cy.get('.range-slider'),
        silder_result: () => cy.get('[id="sliderValue"]'),

    }
}

export default new slider;