'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (obj) {
  var sortedObject = traverseObject(obj);

  if (isObject(obj)) {
    return JSON.stringify(sortObjectByKey(sortedObject));
  }

  return JSON.stringify(sortedObject);
};

var sortObjectByKey = function sortObjectByKey(obj) {
  return Object.keys(obj).sort().map(function (key) {
    return [key, obj[key]];
  });
};

var isObject = function isObject(value) {
  return !isArray(value) && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
};

var isArray = function isArray(value) {
  return value instanceof Array;
};

var sortObject = function sortObject(value, key, obj) {
  if (value) {
    traverseObject(value);
    obj[key] = sortObjectByKey(value);
  }
};

var traverseObject = function traverseObject(obj) {
  if (isArray(obj)) {
    obj.forEach(function (value, idx) {
      sortObject(value, idx, obj);
    });
  }

  if (isObject(obj)) {
    for (var key in obj) {
      sortObject(obj[key], key, obj);
    }
  }

  return obj;
};