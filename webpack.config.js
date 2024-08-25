const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Entry point for the app
    output: {
        path: path.join(__dirname, '/dist'), // Output directory for production build
        filename: 'bundle.js', // Bundled JS file
        publicPath: '/' // Ensures that all paths are relative to the root
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // Production HTML file name
            favicon: './public/icons/favicon-32x32.png', // Favicon path
            template: './src/index.html' // HTML template for production
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: 'public', to: '' }], // Copy all files from public folder to build directory
        }),
    ],
    devServer: {
        port: 3000, // Port for the dev server
        historyApiFallback: true, // Ensures that routing works correctly with React Router
        static: path.resolve(__dirname, 'dist'), // Serve static files from the dist directory
        open: true, // Automatically open the browser
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Apply babel-loader to .js files
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env', '@babel/preset-react'] } // Transpile modern JS and JSX
                }
            },
            {
                test: /\.css$/, // Apply style-loader and css-loader to CSS files
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|webp|mp4|wav|svg)$/, // Handle images, audio, video files
                type: 'asset/resource'
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Allow importing JS and JSX files without specifying extensions
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', // Set mode based on the environment
};
