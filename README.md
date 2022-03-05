# posthtml-css-prop

[![Actions Status][action]][action-url]
[![NPM][npm]][npm-url]
[![Coverage][cover]][cover-badge]
[![XO code style][style]][style-url]

[PostHTML](https://github.com/posthtml/posthtml) plugin to support [css prop](https://emotion.sh/docs/css-prop) like emotion.

Before:

```html
<html>
  <body>
    <h1 css-prop="font-size: 24px">Title</h1>
    <div class="foo" css-prop="text-align: center">
      <span css-prop="color: red">Hello World!</span>
    </div>
  </body>
</html>
```

After:

```html
<html>
  <head></head>
  <body>
    <h1 class="css-13qr7ag">Title</h1>
    <div class="css-1di0pkk foo">
      <span class="css-15yx1q8">Hello World!</span>
    </div>
  </body>
</html>
```

## Install

Describe how big guys can install your plugin.

```bash
npm install posthtml-css-prop
```

## Usage

Describe how people can use this plugin. Include info about build systems if it's
necessary.

```javascript
const fs = require("fs");
const posthtml = require("posthtml");
const PLUGIN_NAME_CAMEL = require("PLUGIN_NAME");

posthtml()
  .use(
    PLUGIN_NAME_CAMEL({
      /* options */
    }),
  )
  .process(html /*, options */)
  .then((result) => fs.writeFileSync("./after.html", result.html));
```

## Options

Describe all features of your plugin with examples of usage.

### Feature

Before:

```html
<html>
  <body>
    <p>OMG</p>
  </body>
</html>
```

Add option:

```js
const fs = require("fs");
const posthtml = require("posthtml");
const PLUGIN_NAME_CAMEL = require("PLUGIN_NAME");

posthtml()
  .use(PLUGIN_NAME_CAMEL({ feature: "wow" }))
  .process(html /*, options */)
  .then((result) => fs.writeFileSync("./after.html", result.html));
```

After:

```html
<html>
  <body>
    <p class="wow">OMG</p>
  </body>
</html>
```

### Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [contribution guide](CONTRIBUTING.md).

[action]: https://github.com/USER_NAME/PLUGIN_NAME/workflows/Actions%20Status/badge.svg
[action-url]: https://github.com/USER_NAME/PLUGIN_NAME/actions?query=workflow%3A%22CI+tests%22
[npm]: https://img.shields.io/npm/v/PLUGIN_NAME.svg
[npm-url]: https://npmjs.com/package/PLUGIN_NAME
[style]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[style-url]: https://github.com/xojs/xo
[cover]: https://coveralls.io/repos/USER_NAME/PLUGIN_NAME/badge.svg?branch=master
[cover-badge]: https://coveralls.io/r/USER_NAME/PLUGIN_NAME?branch=master
