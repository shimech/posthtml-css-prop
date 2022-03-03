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

module.exports = () => {
  return (tree) => {
    tree.match({ attrs: { "css-prop": true } }, (node) => {
      const attrs = parseAttrs(node.attrs);
      const style = attrs["css-prop"];
      delete attrs["css-prop"];
      const className = css`
        ${style}
      `;
      attrs.class = addClass(attrs.class, className);
      node.attrs = attrs.compose();
      return node;
    });
    return tree;
  };
};
