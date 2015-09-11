'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = simulate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TestUtils = _react2['default'].addons.TestUtils;

function simulate(data) {
  var element = data.element ? this.helpers.elements[data.element] : this;
  element = Array.isArray(element) ? element[0] : element;
  TestUtils.Simulate[data.method].call(this, element, data.options || null);
}

module.exports = exports['default'];