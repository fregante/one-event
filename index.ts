export type OneEventOptions = Omit<AddEventListenerOptions, 'once'> & {
	filter?: (event: Event) => boolean;
};

export default async function oneEvent(
	target: EventTarget,
	typeOrTypes: string | string[],
	options: OneEventOptions = {},
): Promise<Event | void> {
	const {filter, ...nativeOptions} = options;
	return new Promise((resolve, reject) => {
		const controller = new AbortController();

		const callback = (event: Event) => {
			if (filter && !filter(event)) return;
			controller.abort();
			resolve(event);
		};

		[typeOrTypes].flat().forEach((type) =>
			target.addEventListener(type, callback, {
				...nativeOptions,
				signal: controller.signal,
			}),
		);

		nativeOptions.signal?.addEventListener('abort', () => {
			controller.abort();
			reject(nativeOptions.signal!.reason);
		}, {once: true});
	});
}
