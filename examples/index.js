const posthtml = require("posthtml");
const html = `
    <h1 css-prop="font-size: 24px">Title</h1>
    <div class="foo" css-prop="text-align: center">
        <span css-prop="color: red">Hello World!</span>
    </div>
`;

posthtml()
  .use(require("../lib")())
  .process(html)
  .then(function (result) {
    console.log(result.html);
  });
