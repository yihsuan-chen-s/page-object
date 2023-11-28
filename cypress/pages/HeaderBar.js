import Browser from './Browser';

/*
* Arrange
*/

const LOGO = '.logo';
const TAB = '.header-nav span';

class HeaderBar extends Browser {
    constructor () {
        super();
        cy.get(LOGO).should('be.visible');
    }

    /*
     * Act
     */

    openTab (tabName) {
        cy.get(TAB).contains(tabName).click();

        return this;
    }
}

export default HeaderBar;
