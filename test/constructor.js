const tap = require('tap');
const DrupalField = require('../src');

tap.test('constructor', function (test) {
  test.plan(1);

  test.test('should support being passed no parameter', function (test) {
    let field = new DrupalField();

    test.ok(field);
    test.end();
  });
});