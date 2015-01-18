module.exports = {
    //mongo : 'mongodb://localhost/coolpy',//使用mongodb数据库
    mongo : 'tingodb://' + __dirname + '/data',//使用本地数据库
    cross : false,//是否接受跨域访问
    production : true,
    v : '1.0.5.1'
};