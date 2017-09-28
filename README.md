# Make stable hashable JSON


### Introduction
A stable hashable JSON

-----------
### Install

```cli
npm install --save json-hashable
```

### Usage

```js
import hashable from 'json-hashable';
import md5 from 'md5'

const objA = md5(hashable({b: 'bbb', a: {c: 'ccc',d: 'ddd'}}));
const objB = md5(hashable({a: {d: 'ddd',c: 'ccc', },b: 'bbb'}));

return objA === objB
```


Any feedbacks or contributions are welcome!