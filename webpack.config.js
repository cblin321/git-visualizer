import webpack from "webpack"
import path from "path"
import fs from "fs"
import HtmlWebpackPlugin from "html-webpack-plugin"

const templatePath = "./src/examples"
const templateNames = fs.readdirSync(templatePath).filter(file => path.extname(file) === ".html")

const HTMLPlugins = templateNames.map(fp => new HtmlWebpackPlugin({template: path.join(templatePath, fp)}))

export default {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(process.cwd(), "dist"),
        clean: true,
    },

    plugins:  [
        ...HTMLPlugins,
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ],
    

    devServer: {
        watchFiles: ["./src/index.html", "./src/examples/*.html"]
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