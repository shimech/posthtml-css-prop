import { purify } from "./utils";

describe("purify()", () => {
  test("trim spaces", () => {
    expect(purify(" ")).toBe("");
  });

  test("trim \\n", () => {
    expect(purify("\n")).toBe("");
  });

  test("trim new lines in template literal", () => {
    expect(
      purify(`
    `),
    ).toBe("");
  });
});
