"use strict";

const parseAttrs = require("posthtml-attrs-parser");
const { css } = require("@emotion/css");

const addClass = (classes, className) => {
  if (!classes) {
    return [className];
  }
  classes.unshift(className);
  return classes;
};

const stringfyCss = (className, style) => purify(`.${className}{${style}}`);

const purify = (str) => str.replace(/\s+/g, "");

module.exports = () => (tree) => {
  const styles = [];

  tree.match({ attrs: { "css-prop": true } }, (node) => {
    const attrs = parseAttrs(node.attrs);
    const style = attrs["css-prop"];
    delete attrs["css-prop"];
    const className = css`
      ${style}
    `;
    styles.push({ className, style });

    attrs.class = addClass(attrs.class, className);
    node.attrs = attrs.compose();
    return node;
  });

  const csses = styles.map((style) =>
    stringfyCss(style.className, style.style),
  );

  tree.match({ tag: "style" }, (node) => {
    if (!node.content) {
      node.content = [];
    }
    node.content = node.content.map((content) => purify(content));
    csses.forEach((css) => node.content.push(css));
    return node;
  });

  return tree;
};
