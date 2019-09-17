"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dbController = _interopRequireDefault(require("./db/controller/dbController"));

var getallPosts =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _dbController["default"].getallPosts();

          case 3:
            res = _context.sent;
            return _context.abrupt("return", res);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getallPosts() {
    return _ref.apply(this, arguments);
  };
}();

var getPostsbyID =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(postId) {
    var res;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _dbController["default"].getPostsByPostID(postId);

          case 3:
            res = _context2.sent;
            return _context2.abrupt("return", res);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getPostsbyID(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var getPostsbyUID =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(userId) {
    var res;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _dbController["default"].getPostsByUserID(userId);

          case 3:
            res = _context3.sent;
            return _context3.abrupt("return", res);

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getPostsbyUID(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var getAllComments =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4() {
    var res;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _dbController["default"].getComments();

          case 3:
            res = _context4.sent;
            return _context4.abrupt("return", res);

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", _context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function getAllComments() {
    return _ref4.apply(this, arguments);
  };
}();

var getCommentsByID =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(postId) {
    var res;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _dbController["default"].getCommentsbyID(postId);

          case 3:
            res = _context5.sent;
            return _context5.abrupt("return", res);

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", _context5.t0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function getCommentsByID(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = function test() {
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6() {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.t0 = console;
            _context6.next = 3;
            return getallPosts();

          case 3:
            _context6.t1 = _context6.sent;

            _context6.t0.log.call(_context6.t0, _context6.t1);

            _context6.t2 = console;
            _context6.next = 8;
            return getPostsbyID(1);

          case 8:
            _context6.t3 = _context6.sent;

            _context6.t2.log.call(_context6.t2, _context6.t3);

            _context6.t4 = console;
            _context6.next = 13;
            return getPostsbyUID(1);

          case 13:
            _context6.t5 = _context6.sent;

            _context6.t4.log.call(_context6.t4, _context6.t5);

            _context6.t6 = console;
            _context6.next = 18;
            return getAllComments();

          case 18:
            _context6.t7 = _context6.sent;

            _context6.t6.log.call(_context6.t6, _context6.t7);

            _context6.t8 = console;
            _context6.next = 23;
            return getCommentsByID(1);

          case 23:
            _context6.t9 = _context6.sent;

            _context6.t8.log.call(_context6.t8, _context6.t9);

          case 25:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }))();
}();