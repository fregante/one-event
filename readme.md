# one-event [![][badge-gzip]][link-bundlephobia]

[badge-gzip]: https://img.shields.io/bundlephobia/minzip/one-event.svg?label=gzipped
[link-bundlephobia]: https://bundlephobia.com/result?p=one-event

> Listen to one event via `addEventListener`, then resolve a Promise

Note: This module is based on the [`once` option of addEventListener](https://dev.to/cilly_boloe/addeventlistener-once-js-bits-565d). Before v2 it was a replacement for it.

## Install

```
npm install one-event
```

```js
const oneEvent = require('one-event');

async function init() {
	await oneEvent(document.body, 'click', false);
	console.log('You clicked my body. Don’t do it again.');
}

init();
```

## API

### oneEvent(target, type, options)

`target`, `type`, and `options` are the same as what you supply to [target.addEventListener(type, listener, options)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## Alternatives

- [sindresorhus/p-event](https://github.com/sindresorhus/p-event) - Also compatible with `EventEmitter` so it's much bigger.

## Related

- [one-mutation](https://github.com/fregante/one-mutation) - Observe one mutation via `MutationObserver`, then resolve a Promise.
- [select-dom](https://github.com/fregante/select-dom) - Lightweight `querySelector`/`All` wrapper that outputs an Array.
- [doma](https://github.com/fregante/doma) - Parse an HTML string into `DocumentFragment` or one `Element`, in a few bytes.
- [Refined GitHub](https://github.com/sindresorhus/refined-github) - Uses this module.
