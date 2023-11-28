import Browser from './Browser';

/*
* Arrange
*/

const CATEGORY_PICKER = '.category-picker .category a';
const CHART_LIST = '.charts-list';
const CHART_TITLE = '.page-title';
const PLAY_PREVIEW_BUTTON = '.btn-preview-all';

class ChartPage extends Browser {
    constructor () {
        super();
        cy.get(CHART_LIST).should('be.visible');
    }

    /*
     * Act
     */

    playAllSongs () {
        cy.get(PLAY_PREVIEW_BUTTON).click();

        return this;
    }

    switchCategory (category) {
        cy.get(CATEGORY_PICKER).contains(category).click();

        return this;
    }

    /*
     * Assert
     */

    checkChartTitle (title) {
        cy.get(CHART_TITLE).should('be.visible').should('have.text', title);

        return this;
    }
}

export default ChartPage;
