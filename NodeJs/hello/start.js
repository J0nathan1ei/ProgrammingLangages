// 引入自已的模块
const start = require('./app');
// 引入 express 模块
const express = require('express');

// 使用 express 极简的web开发框架
// 具体搜官方
var app = express();

// 你可以这样使用：
// app.use
// app.post
// app.get
// app.delete
app.use(function (req, res, next) {
    res.writeHead(200,{"Content_Type":"text/html"});//设置响应格式
    res.write("hello NodeJS");
    res.end();
});

// 启动服务
start(app, 8020);