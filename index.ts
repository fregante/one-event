export type OneEventOptions = Omit<AddEventListenerOptions, 'once'> & {
	filter?: (event: Event) => boolean;
};

export default async function oneEvent(
	target: EventTarget,
	type: string,
	options: OneEventOptions = {},
): Promise<Event | void> {
	const {filter, ...nativeOptions} = options;
	return new Promise((resolve, reject) => {
		const options = {...nativeOptions, once: !filter};
		const callback = filter ? (event: Event) => {
			if (filter(event)) {
				resolve(event);
				target.removeEventListener(type, callback, options);
			}
		} : resolve;
		target.addEventListener(type, callback, options);
		options.signal?.addEventListener('abort', () => {
			reject(options.signal!.reason);
		}, {once: true});
	});
}
