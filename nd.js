var express = require('express');
var app = express();
app.use(express.static('public'));
app.all('*',function (req,res,next) {
	res.header("Access-Control-Allow-Origin", "*");
	next();
})
app.get('/index.html',function (req,res) {
	res.sendFile(__dirname+'/index.html');
})
app.get('/first1',function (req,res) {
	res.sendFile(__dirname+'/json/homelei.json');
})
app.get('/first2',function (req,res) {
	res.sendFile(__dirname+'/json/haitun.json');
})
app.get('/first3',function (req,res) {
	res.sendFile(__dirname+'/json/daxiongmao.json');
})
app.get('/list1',function (req,res) {
	res.sendFile(__dirname+'/json/menghuanbi.json');
})
app.get('/list2',function (req,res) {
	res.sendFile(__dirname+'/json/juese.json');
})
app.get('/list3',function (req,res) {
	res.sendFile(__dirname+'/json/zhaohuanshou.json');
})
app.get('/list4',function (req,res) {
	res.sendFile(__dirname+'/json/daoju.json');
})
app.get('/list5',function (req,res) {
	res.sendFile(__dirname+'/json/lingshi.json');
})
app.get('/list6',function (req,res) {
	res.sendFile(__dirname+'/json/gongshiqi.json');
})
app.get('/seek1',function (req,res) {
	res.sendFile(__dirname+'/json/tj.json');
})
app.get('/seek2',function (req,res) {
	res.sendFile(__dirname+'/json/js.json');
})
app.get('/seek3',function (req,res) {
	res.sendFile(__dirname+'/json/zhs.json');
})
app.get('/seek4',function (req,res) {
	res.sendFile(__dirname+'/json/wq.json');
})
app.get('/seek5',function (req,res) {
	res.sendFile(__dirname+'/json/fj.json');
})
app.get('/seek6',function (req,res) {
	res.sendFile(__dirname+'/json/ls.json');
})
app.get('/seek7',function (req,res) {
	res.sendFile(__dirname+'/json/qt.json');
})
app.get('/seek8',function (req,res) {
	res.sendFile(__dirname+'/json/gsq.json');
})


app.listen('6587',function(){
	console.log(123456)
});