class progressbar {
    elements = {
        progressbar_label: () => cy.get('.menu-list').eq(3).find('li').eq(4),
        bar: () => cy.get('[id="progressBar"]'),
        bar_btn: () => cy.get('[id="startStopButton"]'),
        reset_btn: () => cy.get('[id="resetButton"]'),

    }
}

export default new progressbar;