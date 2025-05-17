import webpack from "webpack"
import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"

export default {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(process.cwd(), "dist"),
        clean: true,
    },

    plugins:  [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    

    devServer: {
        watchFiles: ["./src/index.html"]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        // targets: "defaults",
                        sourceType: "module",
                        presets: [
                            ["@babel/preset-env"]
                        ],
                    }
                }
            }
        ]
    }
}