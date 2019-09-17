"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dbConnection = _interopRequireDefault(require("../model/dbConnection"));

//INSERT INTO posts ("userId",id,title,body) 
//VALUES (1,1, 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
//
var _default = {
  getallPosts: function () {
    var _getallPosts = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var _ref, rows;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _dbConnection["default"].query('SELECT * FROM posts');

            case 3:
              _ref = _context.sent;
              rows = _ref.rows;
              return _context.abrupt("return", rows[0]);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    function getallPosts() {
      return _getallPosts.apply(this, arguments);
    }

    return getallPosts;
  }(),
  getPostsByPostID: function () {
    var _getPostsByPostID = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(postId) {
      var _ref2, rows;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _dbConnection["default"].query('SELECT * FROM posts WHERE id= $1', [postId]);

            case 3:
              _ref2 = _context2.sent;
              rows = _ref2.rows;
              return _context2.abrupt("return", rows[0]);

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", _context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    function getPostsByPostID(_x) {
      return _getPostsByPostID.apply(this, arguments);
    }

    return getPostsByPostID;
  }(),
  getPostsByUserID: function () {
    var _getPostsByUserID = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(userId) {
      var _ref3, rows;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _dbConnection["default"].query('SELECT * FROM posts WHERE "userId"=$1', [userId]);

            case 3:
              _ref3 = _context3.sent;
              rows = _ref3.rows;
              return _context3.abrupt("return", rows[0]);

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", _context3.t0);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    function getPostsByUserID(_x2) {
      return _getPostsByUserID.apply(this, arguments);
    }

    return getPostsByUserID;
  }(),
  getComments: function () {
    var _getComments = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4() {
      var _ref4, rows;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _dbConnection["default"].query('SELECT * FROM "comments";');

            case 3:
              _ref4 = _context4.sent;
              rows = _ref4.rows;
              return _context4.abrupt("return", rows[0]);

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", _context4.t0);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 8]]);
    }));

    function getComments() {
      return _getComments.apply(this, arguments);
    }

    return getComments;
  }(),
  getCommentsbyID: function () {
    var _getCommentsbyID = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(postId) {
      var _ref5, rows;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _dbConnection["default"].query('SELECT * FROM "comments" WHERE "postId" = $1;', [postId]);

            case 3:
              _ref5 = _context5.sent;
              rows = _ref5.rows;
              return _context5.abrupt("return", rows[0]);

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", _context5.t0);

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 8]]);
    }));

    function getCommentsbyID(_x3) {
      return _getCommentsbyID.apply(this, arguments);
    }

    return getCommentsbyID;
  }()
};
exports["default"] = _default;