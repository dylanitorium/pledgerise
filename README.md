# pledgerize

## installation

```bash
$ npm install --save pledgerize
```

## usage

this:

```js
const result = pledgerize([
  promiseReturningFunction(),
  anotherPromiseReturningFunction(),
  thirdFunction(),
], (result) => {
  return result;
})
```

does the same as this:

```js
const result = promiseReturningFunction()
  .then(() => (anotherPromiseReturningFunction()))
  .then(() => (thirdFunction()))
```