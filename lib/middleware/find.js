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
  if (typeof selector === 'string') {
    elements = TestUtils.scryRenderedDOMComponentsWithTag(this.component, selector);
    this.helpers[selector] = elements;
  } else {
    if (selector['class']) {
      elements = TestUtils.scryRenderedDOMComponentsWithClass(this.component, selector['class']);
      this.helpers[selector['class']] = elements;
    }
  }
}

module.exports = exports['default'];