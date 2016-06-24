# one-event 

> Micro module to add an event listener to be executed only once

[![gzipped size](https://badges.herokuapp.com/size/github/bfred-it/one-event/master/dist/one-event.browser.js?gzip=true&label=gzipped%20size)](#readme)

## Usage

```js
oneEvent(document.body, 'click', function () {
	console.log('You clicked my body. Don’t do it again.')
}, false);
```

Or with a promise:

```js
oneEvent.promise(document.body, 'click', false).then(function () {
	console.log('You clicked my body. Don’t do it again.')
});
```

To remove the listener before it's being used, you can use the standard `target.removeEventListener(listener)`

## With browserify

```sh
npm install --save one-event
```

```js
var oneEvent = require('one-event');
```

## API

### `oneEvent(target, type, listener, useCapture)`

### `oneEvent.promise(target, type, useCapture).then(listener)`

`target`, `type`, `listener`, and `useCapture` are exactly the same as what you supply to [target.addEventListener(type, listener, useCapture)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## Dependencies

None!

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
