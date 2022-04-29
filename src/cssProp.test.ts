import posthtml from "posthtml";
import { cssProp } from "./cssProp";
import { purify } from "./utils";

const postHtmlProcess = (inputHtml: string) =>
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
                    .css-1q8jsgx {
                        display: flex;
                    }
                </style>
            </head>
            <body>
                <div class="css-1q8jsgx">Hello World!</div>
            </body>
        </html>
    `;
    postHtmlProcess(inputHtml).then((result) => {
      expect(purify(result.html)).toBe(purify(expected));
    });
  });
});
