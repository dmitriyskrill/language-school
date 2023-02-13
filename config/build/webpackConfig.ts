import webpack from "webpack";
import {BuildOptions} from './types/config';
import {devServer} from "./devServer";
import HtmlWebpackPlugin from "html-webpack-plugin";

export function webpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, port, isDev} = options
    return {
        mode,
        entry: paths.entry,
        devtool: isDev ? 'inline-source-map' : undefined,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: '[name].[contenthash].js',
            path: paths.dist,
            clean: true
        },
        devServer: isDev ? devServer(port) : undefined,
        plugins: [
            new HtmlWebpackPlugin({
                template: paths.html,
            }),
        ]
    }
}