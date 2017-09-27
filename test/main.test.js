import assert from 'assert';
import doStuff from '../src/main';

describe("Main ", () => {
    it('does a test (win)', async () => {
        const result = await doStuff(true);
        assert(true)
    });

    it('does a test (fail)', async () => {
        try {
            const result = await doStuff(false);
        } catch (error) {
            assert(true);
            return;
        }
        assert(false);
    });
});