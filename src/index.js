const Attributes = require('drupal-attribute');
const Item = require('drupal-field-item');

class DrupalField {
  constructor() {
    /**
     *
     * @type {DrupalAttribute}
     */
    this.attributes = new Attributes();

    /**
     *
     * @type {DrupalAttribute}
     */
    this.title_attributes = new Attributes();

    /**
     *
     * @type {Array<DrupalFieldItem>}
     */
    this.items = [];

    /**
     *
     * @type {String}
     */
    this.template = null;
  }

  /**
   *
   * @param content {String}
   * @param [attributes] {Array}
   * @returns {DrupalField}
   */
  add(content, attributes) {
    let self = this;
    let item = new Item();

    if (attributes) {
      item.attributes = new Attributes(attributes);
    }

    item.content = content;

    self.items.push(item);

    return self;
  }
}

module.exports = DrupalField;