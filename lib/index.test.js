const posthtml = require("posthtml");
const cssProp = require(".");

const postHtmlProcess = (inputHtml) =>
  posthtml().use(cssProp()).process(inputHtml);

describe("css prop test", () => {
  test("assign class attribute to elements with css-prop attribute and insert css in <style>", () => {
    const inputHtml = `
        <html>
            <head>
                <style></style>
            </head>
            <body>
                <div css-prop="display: flex;">Hello World!</div>
            </body>
        </html>
    `;
    const expected = `
        <html>
            <head>
                <style>
                    .css-vyoujf {
                        display: flex;
                    }
                </style>
            </head>
            <body>
                <div class="css-vyoujf">Hello World!</div>
            </body>
        </html>
    `;
    postHtmlProcess(inputHtml).then((result) =>
      expect(result.html.replace(/\s+/g, "")).toBe(
        expected.replace(/\s+/g, ""),
      ),
    );
  });
});
