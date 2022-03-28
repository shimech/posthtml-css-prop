import { css, cache } from "@emotion/css";
import type { Node, StringMatcher } from "posthtml";
import { parser } from "posthtml-parser";
import { generateStyleTag } from "./utils";

const prependClass = (prevClass: string | void, className: string): string => {
  if (!prevClass) {
    return className;
  }
  return `${className} ${prevClass}`;
};

export const cssProp =
  () =>
  (tree: Node): Node => {
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
        node.attrs = {
          ...prevAttrs,
          class: prependClass(prevAttrs.class, className),
        };
        return node;
      },
    );

    tree.match({ tag: "head" }, (node) => {
      const prevContent = node.content || [];
      const styles = Object.entries(cache.inserted).map(
        ([id, css]) =>
          parser(
            generateStyleTag(cache.key, id, css as string),
          ) as unknown as Node,
      );
      node.content = [...prevContent, ...styles];
      return node;
    });

    return tree;
  };
