import { css } from "@emotion/css";
import type { Node, StringMatcher } from "posthtml";
import type { Css } from "./type";
import { purify } from "./utils";

const addClass = (prevClass: string | void, className: string): string => {
  if (!prevClass) {
    return className;
  }
  return `${className} ${prevClass}`;
};

const stringfyCss = (className: string, style: string): string =>
  purify(`.${className}{${style}}`);

export const cssProp =
  () =>
  (tree: Node): Node => {
    const csses: Css[] = [];

    tree.match<StringMatcher, { "css-prop"?: RegExp }>(
      { attrs: { "css-prop": /\w+/ } },
      (node) => {
        const { "css-prop": style, ...prevAttrs } = node.attrs;
        if (!style) {
          return node;
        }

        const className = css`
          ${style}
        `;
        csses.push({ className, style });

        const nextAttrs = {
          ...prevAttrs,
          class: addClass(prevAttrs.class, className),
        };
        node.attrs = nextAttrs;
        return node;
      },
    );

    const serializedCsses = csses.map((css) =>
      stringfyCss(css.className, css.style),
    );

    tree.match({ tag: "style" }, (node) => {
      const prevContent = node.content || [];
      const nextContent = prevContent.map((content) => {
        if (typeof content === "string") {
          return purify(content);
        }
        return content;
      });
      node.content = nextContent.concat(serializedCsses);
      return node;
    });

    return tree;
  };
