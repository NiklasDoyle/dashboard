module.exports = function override(config, env) {
    console.log('override')
    let loaders = config.resolve
    loaders.fallback = {
        "buffer": require.resolve("buffer/"),
        "url": require.resolve("url/"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "querystring": require.resolve("querystring-es3"),
        "stream": require.resolve("stream-browserify"),
        "tls": false,
        "net": false,
        "assert": require.resolve("assert/"),
        "os": require.resolve("os-browserify/browser"),
        "util": require.resolve("util/"),
        "child_process": false,
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        "fs": false,
        "process": require.resolve("process/browser"),
        "http2": false,
    }

    return config
}