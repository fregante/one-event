'use strict';

export default function once(target, type, listener, useCapture) {
	target.addEventListener(type, listener, useCapture);
	target.addEventListener(type, function selfRemoving() {
		target.removeEventListener(type, listener, useCapture);
		target.removeEventListener(type, selfRemoving, useCapture);
	}, useCapture);
}
