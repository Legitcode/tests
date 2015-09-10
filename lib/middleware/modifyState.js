"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = modifyState;

function modifyState(state) {
  this.component.setState(state);
}

module.exports = exports["default"];