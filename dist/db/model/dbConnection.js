"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

var _config = _interopRequireDefault(require("config"));

var DATABASE_URL = _config["default"].get('dbURL');

var client = new _pg.Client({
  connectionString: DATABASE_URL
});
client.connect();
var _default = {
  query: function query(command, args) {
    return new Promise(function (resolve, reject) {
      client.query(command, args).then(function (res) {
        resolve(res);
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
};
exports["default"] = _default;