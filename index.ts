export default async function oneEvent(
	target: EventTarget,
	type: string,
	options: AddEventListenerOptions = {},
): Promise<Event | void> {
	options.once = true;
	return new Promise((resolve, reject) => {
		target.addEventListener(type, resolve, options);
		options.signal?.addEventListener('abort', () => {
			reject(options.signal!.reason);
		}, {once: true});
	});
}
