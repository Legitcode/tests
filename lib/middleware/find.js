'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = find;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TestUtils = _react2['default'].addons.TestUtils;

function find(selector) {
  var elements = undefined;
  if (!(typeof selector === "String")) {
    elements = TestUtils.scryRenderedComponentsWithType(this.component, selector);
  } else if (selector.match(/\./)) {
    selector = selector.replace(/\./, '');
    elements = TestUtils.scryRenderedDOMComponentsWithClass(this.component, selector);
  } else elements = TestUtils.scryRenderedDOMComponentsWithTag(this.component, selector);

  if (elements.length === 1) elements = elements[0];
  if (!this.helpers.elements) this.helpers.elements = [];
  this.helpers.elements[selector] = elements;
}

module.exports = exports['default'];