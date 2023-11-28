/*
* Arrange
*/
const HOME_URL = 'https://kma.kkbox.com';

class Browser {
    constructor () {
        cy.viewport(1920, 1080);
    }

    /*
     * Act
     */

    on (ClassName) {
        return new ClassName();
    }

    openHome () {
        cy.visit(HOME_URL);

        return this;
    }

    openChart (range) {
        cy.visit(`${HOME_URL}/charts/${range}/newrelease`);

        return this;
    }
}

export default Browser;
