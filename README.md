# posthtml-css-prop

[![Actions Status][action]][action-url]
[![NPM][npm]][npm-url]
[![Coverage][cover]][cover-badge]
[![XO code style][style]][style-url]

[PostHTML](https://github.com/posthtml/posthtml) plugin to support [css prop](https://emotion.sh/docs/css-prop) like emotion.

Before:

```html
<html>
  <head>
    <style></style>
  </head>
  <body>
    <h1 css-prop="text-align: center; font-size: 24px">Title</h1>
    <div class="foo" css-prop="display: flex">
      <span css-prop="color: red">Hello World!</span>
    </div>
  </body>
</html>
```

After:

```html
<html>
  <head>
    <style>
      .css-1qavfe5 {
        text-align: center;
        font-size: 24px;
      }
      .css-ymvpej {
        display: flex;
      }
      .css-1vhj9jp {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1 class="css-1qavfe5">Title</h1>
    <div class="css-ymvpej foo">
      <span class="css-1vhj9jp">Hello World!</span>
    </div>
  </body>
</html>
```

## Install

```shell
npm install posthtml-css-prop
```

## Usage

Describe how people can use this plugin. Include info about build systems if it's
necessary.

```javascript
const posthtml = require("posthtml");
const html = `
  <html>
    <head>
      <style></style>
    </head>
    <body>
      <h1 css-prop="text-align: center; font-size: 24px;">Title</h1>
        <div class="foo" css-prop="display: flex;">
          <span css-prop="color: red;">Hello World!</span>
        </div>
    </body>
  </html>
`;

posthtml()
  .use(require("posthtml-css-prop")())
  .process(html)
  .then(function (result) {
    console.log(result.html);
  });
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
