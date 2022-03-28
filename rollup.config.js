import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const extensions = [".ts"];

export default {
  input: "./src/index.ts",
  output: {
    dir: "./dist/",
    format: "cjs",
  },
  external: ["posthtml-parser"],
  plugins: [
    nodeResolve({ extensions }),
    commonjs(),
    babel({ extensions, babelHelpers: "bundled" }),
    typescript(),
  ],
};
