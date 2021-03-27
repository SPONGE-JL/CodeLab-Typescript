# async

```text
  * // node, ts-node
  |
  |
  | // readFile('./package.json', (error, buffer) => {...});
  * --------> *
  |           | // OS
  |           *---------> *
  |                       |
  |           * <---------* // package.json
  |           |           |
  * <---------*//buffer <-* // error
  |
  |
  |
```