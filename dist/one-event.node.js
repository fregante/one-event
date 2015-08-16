'use strict';
Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = once;

var _onOff = require('on-off');

function getSelfRemovingHandler(element, type, listener, useCapture) {
	var selfRemoving = function selfRemoving() {
		(0, _onOff.off)(element, type, listener, useCapture);
		(0, _onOff.off)(element, type, selfRemoving, useCapture);
	};
	return selfRemoving;
}

function once(element, type, listener, useCapture) {
	var selfRemoving = getSelfRemovingHandler.apply(null, arguments);
	(0, _onOff.on)(element, type, listener, useCapture);
	(0, _onOff.on)(element, type, selfRemoving, useCapture);
	return listener;
}

module.exports = exports['default'];

