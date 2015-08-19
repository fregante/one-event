(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.oneEvent = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = once;

var _onOff = require('on-off');

function getSelfRemovingHandler(element, type, listener, useCapture) {
	return function selfRemoving() {
		(0, _onOff.off)(element, type, listener, useCapture);
		(0, _onOff.off)(element, type, selfRemoving, useCapture);
	};
}

function once(element, type, listener, useCapture) {
	var selfRemoving = getSelfRemovingHandler.apply(null, arguments);
	(0, _onOff.on)(element, type, listener, useCapture);
	(0, _onOff.on)(element, type, selfRemoving, useCapture);
	return listener;
}

module.exports = exports['default'];

},{"on-off":2}],2:[function(require,module,exports){
module.exports = on;
module.exports.on = on;
module.exports.off = off;

function on (element, event, callback, capture) {
  (element.addEventListener || element.attachEvent).call(element, event, callback, capture);
  return callback;
}

function off (element, event, callback, capture) {
  (element.removeEventListener || element.detachEvent).call(element, event, callback, capture);
  return callback;
}

},{}]},{},[1])(1)
});