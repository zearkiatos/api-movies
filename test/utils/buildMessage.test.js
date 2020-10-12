const assert = require('assert');
const buildMessage = require('../../src/utils/buildMessage');

describe('Utils - buildMessage', () => {
    describe('When receives an entity and action', () => {
        it('Should return the respective message', () => {
            const result = buildMessage('movie', 'create');

            const expect = 'movie created';

            assert.strictEqual(result, expect);
        });
    });

    describe('When receives an entity and action is a list', () => {
        it('Should return the respective message with the entity in plural', () => {
            const result = buildMessage('movie', 'list');

            const expect = 'movie listed';

            assert.strictEqual(result, expect);
        });
    })
});