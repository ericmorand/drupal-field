const tap = require('tap');
const DrupalField = require('../src');

tap.test('add', function (test) {
  test.plan(3);

  test.test('should support method chaining', function(test) {
    let field = new DrupalField();

    test.equal(field.add('foo'), field);
    test.end();
  });

  test.test('should support being passed one parameter', function (test) {
    let field = new DrupalField();

    field.add('foo');

    test.equal(field.items[0].content, 'foo');
    test.end();
  });

  test.test('should accept being passed two parameters', function (test) {
    let field = new DrupalField();

    field.add('foo', [['foo', 'bar']]);

    test.equal(field.items[0].content, 'foo');
    test.equal(field.items[0].attributes.get('foo'), 'bar');

    test.end();
  });
});