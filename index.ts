export default async function oneEvent(
	target: EventTarget,
	type: string,
	options: AddEventListenerOptions = {},
): Promise<Event> {
	options.once = true;
	return new Promise(resolve => {
		target.addEventListener(type, resolve, options);
	});
}
