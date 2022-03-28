# @shimech/posthtml-css-prop

[![npm version](https://badge.fury.io/js/@shimech%2Fposthtml-css-prop.svg)](https://badge.fury.io/js/@shimech%2Fposthtml-css-prop)
![Test](https://github.com/shimech/posthtml-css-prop/actions/workflows/test.yml/badge.svg)

[PostHTML](https://github.com/posthtml/posthtml) plugin to support [css prop](https://emotion.sh/docs/css-prop) like emotion.
This package is a wrapper of [emotion](https://emotion.sh).

Before:

```html
<html>
  <head></head>
  <body>
    <h1 css-prop="text-align: center; font-size: 24px;">Title</h1>
    <div class="foo" css-prop="display: flex;">
      <span css-prop="color: red; &:hover { color: blue; }">Hello World!</span>
    </div>
  </body>
</html>
```

After:

```html
<html>
  <head>
    <style data-posthtml-css-prop="css 1pwdwr4">
      .css-1pwdwr4 {
        text-align: center;
        font-size: 24px;
      }
    </style>
    <style data-posthtml-css-prop="css 1q8jsgx">
      .css-1q8jsgx {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }
    </style>
    <style data-posthtml-css-prop="css qrwk6l">
      .css-qrwk6l {
        color: red;
      }
      .css-qrwk6l:hover {
        color: blue;
      }
    </style>
  </head>
  <body>
    <h1 class="css-1pwdwr4">Title</h1>
    <div class="css-1q8jsgx foo">
      <span class="css-qrwk6l">Hello World!</span>
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
    <head></head>
    <body>
      <h1 css-prop="text-align: center; font-size: 24px;">Title</h1>
      <div class="foo" css-prop="display: flex;">
        <span css-prop="color: red; &:hover { color: blue; }">Hello World!</span>
      </div>
    </body>
  </html>
`;

posthtml()
  .use(require("@shimech/posthtml-css-prop")())
  .process(html)
  .then((result) => console.log(result.html));
// Output:
// <html>
//     <head><style data-posthtml-css-prop="css 1pwdwr4">.css-1pwdwr4{text-align:center;font-size:24px;}</style><style data-posthtml-css-prop="css 1q8jsgx">.css-1q8jsgx{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}</style><style data-posthtml-css-prop="css qrwk6l">.css-qrwk6l{color:red;}.css-qrwk6l:hover{color:blue;}</style></head>
//     <body>
//         <h1 class="css-1pwdwr4">Title</h1>
//         <div class="css-1q8jsgx foo">
//             <span class="css-qrwk6l">Hello World!</span>
//         </div>
//     </body>
// </html>
```

### Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs).
