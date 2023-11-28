import Browser from './Browser';

/*
* Arrange
*/

const PLAYING_BAR = '.kpb-container';
const PLAY_PAUSE_BUTTON = '.kpb-panel.kpb-controls .kpb-btn-play';

class PlayingBar extends Browser {
    constructor () {
        super();
        cy.get(PLAYING_BAR).should('be.visible');
    }

    /*
     * Assert
     */

    checkPlayStatus (playing) {
        cy.get(PLAY_PAUSE_BUTTON).should('have.attr', 'title', playing ? 'Pause' : 'Play');

        return this;
    }
}

export default PlayingBar;
