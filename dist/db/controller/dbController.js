"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dbConnection = _interopRequireDefault(require("../model/dbConnection"));

// SQL commands to input the data
//INSERT INTO posts ("userId",id,title,body) 
//VALUES (1,1, 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
//INSERT INTO "comments" (id,"postId",name,email,body) VALUES (1,1,'aadi','hello@gmail.com','random textttttt');
var _default = {
  clearTables: function () {
    var _clearTables = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var _ref, rows;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _dbConnection["default"].query('TRUNCATE TABLE posts,"comments",users;');

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

    function clearTables() {
      return _clearTables.apply(this, arguments);
    }

    return clearTables;
  }(),
  createUser: function () {
    var _createUser = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      var cmd, _ref2, rows;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              cmd = {
                text: 'INSERT INTO users (id, "name", username, email, phone, website, "createdAt", "updatedAt")  VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
                values: [1, 'aadi', 'aadimurthy', 'hello@gmail.com', '9010664774', 'hello.com', new Date(), new Date()]
              };
              _context2.next = 4;
              return _dbConnection["default"].query(cmd);

            case 4:
              _ref2 = _context2.sent;
              rows = _ref2.rows;
              return _context2.abrupt("return", rows[0]);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", _context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    function createUser() {
      return _createUser.apply(this, arguments);
    }

    return createUser;
  }(),
  createPost: function () {
    var _createPost = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      var cmd, _ref3, rows;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              cmd = {
                text: 'INSERT INTO posts ("userId",id,title,body) VALUES($1, $2, $3, $4)',
                values: [1, 1, 'Sample Postttt', 'Sample bodyyyyy']
              };
              _context3.next = 4;
              return _dbConnection["default"].query(cmd);

            case 4:
              _ref3 = _context3.sent;
              rows = _ref3.rows;
              return _context3.abrupt("return", rows[0]);

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", _context3.t0);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }));

    function createPost() {
      return _createPost.apply(this, arguments);
    }

    return createPost;
  }(),
  placeComment: function () {
    var _placeComment = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4() {
      var cmd, _ref4, rows;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              cmd = {
                text: 'INSERT INTO "comments" (id,"postId",name,email,body) VALUES($1, $2, $3, $4, $5)',
                values: [1, 1, 'aadi', 'hello@gmail.com', 'Sample Comment!!!!!']
              };
              _context4.next = 4;
              return _dbConnection["default"].query(cmd);

            case 4:
              _ref4 = _context4.sent;
              rows = _ref4.rows;
              return _context4.abrupt("return", rows[0]);

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", _context4.t0);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 9]]);
    }));

    function placeComment() {
      return _placeComment.apply(this, arguments);
    }

    return placeComment;
  }(),
  getallPosts: function () {
    var _getallPosts = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5() {
      var _ref5, rows;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _dbConnection["default"].query('SELECT * FROM posts');

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

    function getallPosts() {
      return _getallPosts.apply(this, arguments);
    }

    return getallPosts;
  }(),
  getPostsByPostID: function () {
    var _getPostsByPostID = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6(postId) {
      var _ref6, rows;

      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _dbConnection["default"].query('SELECT * FROM posts WHERE id= $1', [postId]);

            case 3:
              _ref6 = _context6.sent;
              rows = _ref6.rows;
              return _context6.abrupt("return", rows[0]);

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](0);
              return _context6.abrupt("return", _context6.t0);

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 8]]);
    }));

    function getPostsByPostID(_x) {
      return _getPostsByPostID.apply(this, arguments);
    }

    return getPostsByPostID;
  }(),
  getPostsByUserID: function () {
    var _getPostsByUserID = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee7(userId) {
      var _ref7, rows;

      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return _dbConnection["default"].query('SELECT * FROM posts WHERE "userId"=$1', [userId]);

            case 3:
              _ref7 = _context7.sent;
              rows = _ref7.rows;
              return _context7.abrupt("return", rows[0]);

            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](0);
              return _context7.abrupt("return", _context7.t0);

            case 11:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 8]]);
    }));

    function getPostsByUserID(_x2) {
      return _getPostsByUserID.apply(this, arguments);
    }

    return getPostsByUserID;
  }(),
  getComments: function () {
    var _getComments = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee8() {
      var _ref8, rows;

      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return _dbConnection["default"].query('SELECT * FROM "comments";');

            case 3:
              _ref8 = _context8.sent;
              rows = _ref8.rows;
              return _context8.abrupt("return", rows[0]);

            case 8:
              _context8.prev = 8;
              _context8.t0 = _context8["catch"](0);
              return _context8.abrupt("return", _context8.t0);

            case 11:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 8]]);
    }));

    function getComments() {
      return _getComments.apply(this, arguments);
    }

    return getComments;
  }(),
  getCommentsbyID: function () {
    var _getCommentsbyID = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee9(postId) {
      var _ref9, rows;

      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return _dbConnection["default"].query('SELECT * FROM "comments" WHERE "postId" = $1;', [postId]);

            case 3:
              _ref9 = _context9.sent;
              rows = _ref9.rows;
              return _context9.abrupt("return", rows[0]);

            case 8:
              _context9.prev = 8;
              _context9.t0 = _context9["catch"](0);
              return _context9.abrupt("return", _context9.t0);

            case 11:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[0, 8]]);
    }));

    function getCommentsbyID(_x3) {
      return _getCommentsbyID.apply(this, arguments);
    }

    return getCommentsbyID;
  }()
};
exports["default"] = _default;