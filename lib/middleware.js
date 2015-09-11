'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _middlewareFind = require('./middleware/find');

var _middlewareFind2 = _interopRequireDefault(_middlewareFind);

var _middlewareSetState = require('./middleware/setState');

var _middlewareSetState2 = _interopRequireDefault(_middlewareSetState);

exports['default'] = {
  Find: _middlewareFind2['default'],
  SetState: _middlewareSetState2['default']
};
module.exports = exports['default'];