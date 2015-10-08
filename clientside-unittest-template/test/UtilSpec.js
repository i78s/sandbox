import Util from '../lib/Util';

describe('Util', () => {

    let div;
    beforeEach(function () {
        div = document.createElement('div');
    });

    it('hasClass', () => {
        assert(Util.hasClass(div, 'hoge') === false);
        div.className = 'hoge';
        assert(Util.hasClass(div, 'foo') === false);
        assert(Util.hasClass(div, 'hoge') === true);
    });

    it('addClass', () => {
        Util.addClass(div, 'foo');
        assert(Util.hasClass(div, 'foo') === true);
    });

    it('removeClass', () => {
        div.className = 'bar';
        Util.removeClass(div, 'bar');
        assert(Util.hasClass(div, 'bar') === false);
    });
});