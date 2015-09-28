import Hoge from '../lib/Hoge';

describe('Hoge', () => {

    it('set / get', () => {

        let hoge = new Hoge('hoge');
        assert(hoge.getHoge() === 'hoge');

        hoge.setHoge('foo');
        assert(hoge.getHoge() === 'foo');
    });
});