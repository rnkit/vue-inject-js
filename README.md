# Vue Inject Js

Inject Remote Js For Vue.js 2.

[![npm](https://img.shields.io/npm/dm/vue-inject-js.svg)](https://www.npmjs.com/package/vue-inject-js)
[![npm](https://img.shields.io/npm/v/vue-inject-js.svg)](https://www.npmjs.com/package/vue-inject-js)
[![npm](https://img.shields.io/npm/l/vue-inject-js.svg)](https://www.npmjs.com/package/vue-inject-js)
[![GitHub pull requests](https://img.shields.io/badge/PR-welcome-green.svg)]()
[![GitHub stars](https://img.shields.io/github/stars/rnkit/vue-inject-js.svg?style=social&label=Star)]()

## Installation

Select one option:

1. Install using **npm**

  ```sh
  npm install vue-inject-js --save
  ```
  You can omit the `--save` option if using `npm@^5`.

  You can also use Yarn as:

  ```sh
  yarn add vue-inject-js
  ```

  In your JavaScript file:

  ```js
  import VueInjectJs from 'vue-inject-js'
  ```

  \- or -

  ```js
  var VueInjectJs = require('vue-inject-js')
  ```

2. Embed script tag

  ```html
  <script src="https://unpkg.com/vue-inject-js/dist/vue-inject-js.min.js"></script>
  ```

Then register the component into Vue:

```js
Vue.use(VueInjectJs)
```

## Documentation

Using Inject Js is easy. The HTML code you need is the following:

```html
<VueInjectJs src="https://unpkg.com/jquery@3.2.1/dist/jquery.js"/>
```

And no JS code is needed whatsoever, Inject Js works out of the box.

### Props

The component needs some configuration, though. It's only one required option, so it remains pretty simple.

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| src | Remote Javascript source that will be loaded. | String | _required_ |


Check out [changelog](CHANGELOG.md) file.

## License

[MIT](http://opensource.org/licenses/MIT)

## Contribution

- [@simamn](mailto:liwei0990@gmail.com) The main author.

## Questions

Feel free to [contact me](mailto:liwei0990@gmail.com) or [create an issue](https://github.com/rnkit/vue-inject-js/issues/new)

> made with ♥
