'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inquirer = require('inquirer');
var path = require('path');
var fs = require('fs');

var prompt = function prompt(actionfolder) {
  var promptfile = path.join(actionfolder, 'prompt.js');
  if (!fs.existsSync(promptfile)) {
    return _promise2.default.resolve({});
  }
  return inquirer.prompt(require(promptfile));
};

module.exports = prompt;