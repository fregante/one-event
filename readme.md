# one-event [![module size](https://badge-size.herokuapp.com/bfred-it/one-event/master/dist/one-event.min.js) ![module gzipped size](https://badge-size.herokuapp.com/bfred-it/one-event/master/dist/one-event.min.js?compression=gzip)](https://github.com/bfred-it/one-event/blob/master/dist/one-event.min.js)

> Micro module to add an event listener to be executed only once

## Usage

```js
oneEvent(document.body, 'click', function () {
	console.log('You clicked my body. Don’t do it again.')
}, false);
```

## With browserify

```sh
npm install --save one-event
```

```js
var oneEvent = require('one-event');
```

## API

### `oneEvent(target, type, listener, useCapture)`

`target`, `type`, `listener`, and `useCapture` are exactly the same as what you supply to [target.addEventListener(type, listener, useCapture)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## Files

Here's an explanation of the files included in this repo

* `index.js`: source file, in ES6
* `dist/one-event.js`: browser-ready file with AMD or a global variable called `oneEvent`
* `dist/one-event.min.js`: same as above, minified
* `dist/one-event.node.js`: used by node/browserify with `require('one-event')`

## Dependencies

* [`on-off`](https://www.npmjs.com/package/on-off) <img alt="dependency gzipped size" src="https://badge-size.herokuapp.com/npm-dom/dom-event/master/index.js?compression=gzip&amp;label=size" height="12">


## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
