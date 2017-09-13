import typescript from "rollup-plugin-typescript";

export default {
    entry: "src/index.ts",
    // entry: "src/test/connection/client.ts",
    plugins: [
        typescript({ typescript: require("typescript"), target: "es5", removeComments: true }),
    ],
    targets: [
        {
            dest: "out/index.js",
            format: "umd",
            moduleName: "game"
        }
    ]
};