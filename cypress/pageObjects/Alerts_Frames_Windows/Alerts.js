class alert{

    elements ={ 
        alerts_label: () => cy.get('.menu-list').eq(2).find('li').eq(1),
        alert_msg: () => cy.get('[id="alertButton"]'),
        wait_alert: () => cy.get('[id="timerAlertButton"]'),
        confirm_btn: () => cy.get('[id="confirmButton"]'),
        confirm_result: () => cy.get('[id="confirmResult"]'),
        prompt_btn: () => cy.get('[id="promtButton"]'),
        prompt_result: () => cy.get('[id="promptResult"]'),
 
    }
}
export default new alert;