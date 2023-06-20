import { getGoodyRoute } from 'utils/routes';

describe('utils/routes', () => {
    describe('getGoodyRoute', () => {
        it('when send goody id should return the correct route', () => {
            expect(getGoodyRoute('123')).toEqual('/goodies/123');
        });
    });
});
