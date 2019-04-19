var assert = require('assert');
var squish = require('../');

describe('squish', function () {
  it('throws when input is not a String', function () {
    [
      undefined,
      null,
      0,
      Infinity,
      {},
      /\s/
    ].forEach(example => assert.throws(() => squish(example), /Invalid 'string'/));
  });

  it('removes whitespace from the start and end of a String', function () {
    [
      'test',
      ' test',
      '   test',
      'test ',
      'test    ',
      ' test ',
      '   test   ',
      " \n test",
      "test \n ",
      " \n test \n "
    ].forEach(example => assert.equal(squish(example), 'test'));
  });

  it('replaces consecutive whitespace with a single space', function () {
    [
      'test test',
      'test  test',
      "test \n test",
      ' test test',
      ' test  test',
      " test \n test",
      'test test ',
      'test  test ',
      "test \n test "
    ].forEach(example => assert.equal(squish(example), 'test test'));
  });
});
