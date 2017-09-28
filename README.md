# Hashable JSON

[![Build Status](https://travis-ci.org/sebastianlzy/json-hashable.svg?branch=master)](https://travis-ci.org/sebastianlzy/json-hashable)
[![Coverage Status](https://coveralls.io/repos/github/sebastianlzy/json-hashable/badge.svg?branch=master)](https://coveralls.io/github/sebastianlzy/json-hashable?branch=master)


### Introduction
A stable hashable JSON

-----------
### Install

```cli
npm install --save json-hashable
```

### Usage

```js
import hashable from "json-hashable";
import md5 from "md5";

const objA = md5(hashable({ b: "bbb", a: { c: "ccc", d: "ddd" } }));
const objB = md5(hashable({ a: { d: "ddd", c: "ccc" }, b: "bbb" }));

return objA === objB;

```


Any feedbacks or contributions are welcome!