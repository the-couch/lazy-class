# Lazy-Class.js  [![npm](https://img.shields.io/npm/v/lazy-class.svg?maxAge=2592000)](https://www.npmjs.com/package/lazy-class)


Lazy appended classes to DOM elements.

### npm

Install Lazy Class, and add it to your `package.json` dependencies.

```
$ npm i lazy-class --save
```


## Lazy Add Classes

```javascript
import { lazy } from 'lazy-class'
```

#### Usage

```javascript
let oscar = document.querySelector('.award')

let oscars = document.querySelectorAll('.awards')

lazy(oscar, 'won', 600)

lazy(oscars, 'nominated', 900)
```

```javascript
lazy(oscar, 'nominated', 900, {
  change: 'add'
})
lazy(oscar, 'nominated', 1200, {
  change: 'remove'
})
```

* * *
 MIT License
