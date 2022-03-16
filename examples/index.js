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
  .use(require("../lib")())
  .process(html)
  .then((result) => console.log(result.html));
