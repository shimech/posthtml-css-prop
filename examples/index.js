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
  .use(require("../dist")())
  .process(html)
  .then((result) => console.log(result.html));
