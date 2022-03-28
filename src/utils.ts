// @see https://github.com/emotion-js/emotion/blob/26e4e3e8b68479f0e3cb8fbec723da47afd6ac98/packages/server/src/create-instance/utils.js
export const generateStyleTag = (cssKey: string, id: string, css: string) =>
  `<style data-posthtml-css-prop="${cssKey} ${id}">${css}</style>`;
