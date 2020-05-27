import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import { terser } from "rollup-plugin-terser";
import babel from '@rollup/plugin-babel';

const pluginList = require('./plugin-list.js');

let outputs = [];
for (var key in pluginList) {
    let inputFile = pluginList[key];
    let outFile = `./dist/rex${key}.min.js`;
    let libName = `rex${key}`;
    // console.log(inputFile)
    // console.log(outFile)
    // console.log(libName)

    outputs.push({
        input: inputFile,
        output: {
            file: outFile,
            name: libName,
            format: 'umd',
        },
        external: ['phaser'],
        plugins: [
            nodeResolve(),
            commonjs(),
            globals(),
            builtins(),
            babel({
                babelHelpers: "bundled",
                exclude: 'node_modules/**'
            }),
            terser()
        ]
    })
}

export default outputs;
