import Browser from './Browser';

/*
* Arrange
*/

const ARTICLE = '#loadMoreMusicBuzz .card-article';
const HERO_CARD = '.card-article.card--hero';

class TrendPage extends Browser {
    constructor () {
        super();
        cy.get(HERO_CARD).should('be.visible');
    }

    /*
     * Act
     */

    loadMore () {
        cy.scrollTo('bottom');

        return this;
    }

    /*
     * Act
     */

    checkVisibilityOfMusicBuzz (visibile) {
        cy.get(ARTICLE).should(`${visibile ? '' : 'not.'}be.visible`);

        return this;
    }
}

export default TrendPage;
