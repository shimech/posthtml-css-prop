# @shimech/posthtml-css-prop

[![npm version](https://badge.fury.io/js/@shimech%2Fposthtml-css-prop.svg)](https://badge.fury.io/js/@shimech%2Fposthtml-css-prop)
![Test](https://github.com/shimech/posthtml-css-prop/actions/workflows/test.yml/badge.svg)

[PostHTML](https://github.com/posthtml/posthtml) plugin to support [css prop](https://emotion.sh/docs/css-prop) like emotion.

Before:

```html
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
npm install @shimech/posthtml-css-prop
```

## Usage

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
  .use(cssProp())
  .process(html)
  .then((result) => console.log(result.html));
```

### Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs).
