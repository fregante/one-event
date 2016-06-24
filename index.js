'use strict';

export default function once(target, type, listener, useCapture) {
	target.addEventListener(type, listener, useCapture);
	target.addEventListener(type, function selfRemoving() {
		target.removeEventListener(type, listener, useCapture);
		target.removeEventListener(type, selfRemoving, useCapture);
	}, useCapture);
}

once.promise = (target, type, useCapture) => new Promise(resolve => once(target, type, resolve, useCapture));
