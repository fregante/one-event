export default async function oneEvent(
	target: EventTarget,
	type: string,
	options: AddEventListenerOptions = {},
): Promise<Event | void> {
	options.once = true;
	return new Promise(resolve => {
		target.addEventListener(type, resolve, options);
		options.signal?.addEventListener('abort', () => {
			resolve();
		}, {once: true});
	});
}
