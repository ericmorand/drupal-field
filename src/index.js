const Attributes = require('drupal-attribute');

class DrupalField {
  constructor() {
    this.attributes = new Attributes();
    this.title_attributes = new Attributes();
    this.items = [];
    this.template = null;
  }
}

module.exports = DrupalField;