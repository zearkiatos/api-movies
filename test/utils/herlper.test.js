const assert = require('assert');
const helper = require('../../src/utils/helper');

describe('Utils - helper', () => {
    describe('Leap year - When receives a year', () => {
        it('Should return true if the year is leap', () => {
            const result = helper.isLeapYear(2018);

            const expect = true;

            assert.strictEqual(result, expect);
        });

        it('Should return false if the year is leap', () => {
            const result = helper.isLeapYear(2100);

            const expect = false;

            assert.strictEqual(result, expect);
        });
    });
});