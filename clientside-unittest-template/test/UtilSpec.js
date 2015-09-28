import Util from '../lib/Util';

describe('Util', () => {

    let div;
    beforeEach(function () {
        div = document.createElement('div');
    });

    it('hasClass', () => {
        assert(Util.hasClass(div, 'hoge') === null);
        div.className = 'hoge';
        assert(Util.hasClass(div, 'foo') === null);
        assert(Util.hasClass(div, 'hoge') !== null);
    });

    it('addClass', () => {
        Util.addClass(div, 'foo');
        assert(Util.hasClass(div, 'foo') !== null);
    });

    it('removeClass', () => {
        div.className = 'bar';
        Util.removeClass(div, 'bar');
        assert(Util.hasClass(div, 'bar') === null);
    });
});