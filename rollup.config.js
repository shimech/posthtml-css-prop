import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

const extensions = [".ts"];

export default {
  input: "./src/index.ts",
  output: {
    dir: "./dist/",
    format: "cjs",
  },
  plugins: [
    resolve({ extensions }),
    babel({ extensions, babelHelpers: "bundled" }),
    typescript(),
  ],
};
