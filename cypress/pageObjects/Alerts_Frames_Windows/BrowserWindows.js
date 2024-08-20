class browserwindows{

    elements ={ 
        alertsframewindows : () => cy.contains('Alerts, Frame & Windows'),
        browserwindows_label: () => cy.get('.menu-list').eq(2).find('li').eq(0),
        newtab: () => cy.get('button[id="tabButton"]'),
        newwindow: () => cy.get('button[id="windowButton"]'),
        winmsg: () => cy.get('[id="messageWindowButton"]'),
 
    }
}
export default new browserwindows;