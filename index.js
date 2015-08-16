'use strict';
import {on, off} from 'on-off';

function getSelfRemovingHandler (element, type, listener, useCapture) {
	let selfRemoving = function () {
		off(element, type, listener, useCapture);
		off(element, type, selfRemoving, useCapture);
	};
	return selfRemoving;
}

export default function once (element, type, listener, useCapture) {
	let selfRemoving = getSelfRemovingHandler.apply(null, arguments);
	on(element, type, listener, useCapture);
	on(element, type, selfRemoving, useCapture);
	return listener;
}
