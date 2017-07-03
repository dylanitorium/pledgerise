# pledgerize

## installation

```bash
$ npm install --save pledgerize
```

## usage

This:

```js
const result = pledgerize([
  'project',
  'project2',
  'project',
], (projectName) => {
    return promiseReturningFunction(projectName);
})
```

Does the same as this:

```js
const result = promiseReturningFunction('project')
    .then(() => {
       promiseReturningFunction('project2')
    })
    .then(() => {
       promiseReturningFunction('project')
    })
```

## why?

This came about when I was creating a script to migrate remote repositories and their 'namespaces'.
If a namespace didn't exist at the destination it was created, to avoid errors, I wanted to process 
each repository sequentially.