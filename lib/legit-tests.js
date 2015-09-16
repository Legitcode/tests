'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = TestWrapper;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _middleware = require('./middleware');

var TestUtils = _reactAddons2['default'].addons.TestUtils;

var Test = (function () {
  function Test(component) {
    _classCallCheck(this, Test);

    this.component = TestUtils.renderIntoDocument(component);
    this.middleware = [];
    this.helpers = [];
    return this;
  }

  _createClass(Test, [{
    key: 'use',
    value: function use(callback, data) {
      callback.call(this, data);
      return this;
    }
  }, {
    key: 'test',
    value: function test(callback) {
      callback.call(this, this);
      return this;
    }

    //Built in middleware

  }, {
    key: 'find',
    value: function find(data) {
      _middleware.Find.call(this, data);
      return this;
    }
  }, {
    key: 'setState',
    value: function setState(data) {
      _middleware.SetState.call(this, data);
      return this;
    }
  }, {
    key: 'simulate',
    value: function simulate(data) {
      _middleware.Simulate.call(this, data);
      return this;
    }
  }]);

  return Test;
})();

function TestWrapper(component) {
  return new Test(component);
}

module.exports = exports['default'];