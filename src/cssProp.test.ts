import { flush } from "@emotion/css";
import posthtml from "posthtml";
import { cssProp } from "./cssProp";

const postHtmlProcess = (inputHtml: string) =>
  posthtml().use(cssProp()).process(inputHtml);

const purify = (str: string): string => str.replace(/\s+/g, "");

afterEach(() => flush());

describe("css prop test", () => {
  test("assign class attribute to elements with css-prop attribute and insert <style>", () => {
    const inputHtml = `
        <html>
            <head></head>
            <body>
                <div css-prop="display: flex;">Hello World!</div>
            </body>
        </html>
    `;
    const expected = `
        <html>
            <head>
                <style data-posthtml-css-prop="css1q8jsgx">.css-1q8jsgx{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}</style>
            </head>
            <body>
                <div class="css-1q8jsgx">HelloWorld!</div>
            </body>
        </html>
    `;
    postHtmlProcess(inputHtml).then((result) => {
      expect(purify(result.html)).toBe(purify(expected));
    });
  });

  test("change nothing if css-prop attributes do not exist.", () => {
    const inputHtml = `
        <html>
            <head></head>
            <body>
                <div>Hello World!</div>
            </body>
        </html>
    `;
    const expected = inputHtml;
    postHtmlProcess(inputHtml).then((result) => {
      expect(purify(result.html)).toBe(purify(expected));
    });
  });
});
