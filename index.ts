export default async function oneEvent(
	target: EventTarget,
	type: string,
	options: boolean | AddEventListenerOptions = {},
): Promise<Event> {
	if (typeof options === 'boolean') {
		const capture = options;
		options = {capture};
	}

	options.once = true;
	return new Promise(resolve => {
		target.addEventListener(type, resolve, options);
	});
}
