module.exports = {
    entry: "./Scripts/src/index.tsx",
    output: {
        filename: "./wwwroot/Scripts/dist/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            /*{ test: /\.tsx?$/, loader: "ts-loader" },*/
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.css$/, 
                use: [ 
                        { loader: 'style-loader' }, 
                        { 
                            loader: 'css-loader', 
                            options: { 
                                modules: true,
                                localIdentName: ('[name]__[local]__[hash:base64:5]')
     
                            } 
                        } 
                    ] 
            },
            { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=15000&name=images/[name].[ext]' },
            { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader?&name=fonts/[name].[ext]' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
            { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=images/[name].[ext]' }, 
        ],
    }
}


