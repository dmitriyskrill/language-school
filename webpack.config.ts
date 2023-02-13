import {webpackConfig} from "./config/build/webpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from 'path'

export default (env: BuildEnv) => {
    const mode = env.mode || 'development'
    const PORT = env.port || 3000

    const isDev = mode === 'development'

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        src: path.resolve(__dirname, 'src'),
        dist: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    return webpackConfig({
        paths,
        mode,
        isDev,
        port: PORT
    })
}