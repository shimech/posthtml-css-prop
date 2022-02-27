const posthtml = require("posthtml");
const html = `
    <div>Hello World!</div>
`;

posthtml()
  .use(require("../lib")())
  .process(html)
  .then(function (result) {
    console.log(result.html);
  });
