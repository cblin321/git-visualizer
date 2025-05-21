import webpack from "webpack"
import path from "path"
import fs from "fs"
import HtmlWebpackPlugin from "html-webpack-plugin"

const templatePath = "./src/examples"
const templateNames = fs.readdirSync(templatePath).filter(file => path.extname(file) === ".html")

const HTMLPlugins = templateNames.map(fp => {
    console.log(path.parse(fp).name)
    return new HtmlWebpackPlugin({template: path.join(templatePath, fp), 
    filename: path.join("examples", fp),
    chunks: [path.parse(fp).name]
})
})

const entries = {}

const pageNames = fs.readdirSync("./src/js/pages").filter(file => path.extname(file) === ".js")

for (let i of pageNames) {
    entries[path.parse(i).name] = "./" + path.join("./src/js/pages", i)
}

console.log(entries)

export default {
    mode: "development",
    entry: {
        index: "./src/index.js",
        ...entries
    },
    output: {
        filename: "[name].js",
        path: path.resolve(process.cwd(), "dist"),
        clean: true,
    },

    plugins:  [
        ...HTMLPlugins,
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ["index"]
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