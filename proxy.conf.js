const PROXY_CONFIG = [{
    context: [
        "",
    ],
    "target": "",    
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    "pathRewrite": {
        "^/": ""
    },
    "bypass": function(proxyRes, req, res) {}
}];

module.exports = PROXY_CONFIG;