(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.isString = isString;
exports.default = minifyHexCode;
function isString(object) {
  return typeof object === 'string';
}

function minifyHexCode(string) {
  if (!isString(string)) {
    throw new TypeError('Invalid hex code string provided');
  }

  var hex = string.replace(/#/g, '');
  var regexp = /^([a-f0-9])\1([a-f0-9])\2([a-f0-9])\3$/gi;
  var res = regexp.exec(hex);
  var color = hex;
  var r = void 0;
  var g = void 0;
  var b = void 0;
  if (res) {
    var _res = _slicedToArray(res, 4);

    color = _res[0];
    r = _res[1];
    g = _res[2];
    b = _res[3];

    color = (r + g + b).toLowerCase();
  }
  return '#' + color;
}

})));
