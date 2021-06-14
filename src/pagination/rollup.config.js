import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript"
import copy from "rollup-plugin-copy";

import { resolve as resolvePath } from 'path';

const input = resolvePath(__dirname, './index.ts');

const reasonGlob = resolvePath(__dirname, '**/*.re');

const outDirectory = 'dist/pagination';

export default {
  input,
  output: [
    {
      file: resolvePath(outDirectory, 'index.js'),
      format: "cjs",
    },
    {
      file: resolvePath(outDirectory, 'index.es.js'),
      format: "esm",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    copy({
      targets: [{ src: reasonGlob, dest: outDirectory }],
    }),
  ],
};
