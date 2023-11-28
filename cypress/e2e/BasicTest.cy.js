import Browser from '../pages/Browser.js';
import ChartPage from '../pages/ChartPage.js';
import HeaderBar from '../pages/HeaderBar.js';
import HomePage from '../pages/HomePage.js';
import PlayingBar from '../pages/PlayingBar.js';
import TrendPage from '../pages/TrendPage.js';

import { CATEGORY, CHART_TYPE, HEADER, PERIOD, PLAY_STATUS, VISIBILITY } from '../pages/ENUM.js';

describe('Basic Test', function () {
    let kma;

    beforeEach(function () {
        kma = new Browser();
    });

    it('從首頁可前往新歌即時榜並試聽榜單音樂。', function () {
        kma.on(Browser).openHome()
            .on(HomePage).openCharts()
            .on(ChartPage).playAllSongs()
            .on(PlayingBar).checkPlayStatus(PLAY_STATUS.PLAYING);
    });

    it('在年度累積榜可切換不同語系的榜單。', function () {
        kma.on(Browser).openChart(PERIOD.YEAR)
            .on(ChartPage).checkChartTitle(`${CATEGORY.MANDARIN}${CHART_TYPE.YEAR}`)
            .on(ChartPage).switchCategory(CATEGORY.WESTERN)
            .on(ChartPage).checkChartTitle(`${CATEGORY.WESTERN}${CHART_TYPE.YEAR}`);
    });

    it('在音樂趨勢文章列表中，下滑可以顯示更多文章。', function () {
        kma.on(Browser).openHome()
            .on(HeaderBar).openTab(HEADER.MUSIC_TREND)
            .on(TrendPage).checkVisibilityOfMusicBuzz(VISIBILITY.INVISIBLE)
            .on(TrendPage).loadMore()
            .on(TrendPage).checkVisibilityOfMusicBuzz(VISIBILITY.VISIBLE);
    });
});
