import Browser from './Browser';
import { HEADER } from '../pages/ENUM.js';

/*
* Arrange
*/

const PAGE_TITLE = '#section-trend .section-title';
const VIEW_CHART_BUTTON = '.ranking-graph .section-panel .btn-action';

class HomePage extends Browser {
    constructor () {
        super();
        cy.get(PAGE_TITLE).should('have.text', HEADER.MUSIC_TREND);
    }

    /*
     * Act
     */

    openCharts () {
        cy.get(VIEW_CHART_BUTTON).click();

        return this;
    }
}

export default HomePage;
