// 参考自https://www.cnblogs.com/oukele/p/11595138.html
// 引入 HTTP 模块
const http = require("http");
// 可以使用 HTTPS 模块
// const https = require("https");

var httpService = function (app,port) {
    // 创建 node 服务
    // 如果 使用 https 的话 还需要 证书
    var httpService = http.createServer(app).listen(port);
    // 监听服务
    httpService.on('listening',onListening);
    // 监听函数
    function onListening() {
        var addr = httpService.address();
        var bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;
        console.log('Listening on ' + bind);
    }
}

// 模块导出
module.exports = httpService;