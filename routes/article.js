var express = require('express');
var router = express.Router();
var temp=require("../model/temp.js");
var fs =require('fs');
var path=require('path')

/* 文章 */
router.get('/list', function(req, res, next) {
  res.render('article/list.html');
});
router.get('/detail', function(req, res, next) {
  res.render('article/detail.html');
});
router.get('/upload', function(req, res, next) {
  res.render('article/upload.html');
});
router.post("/upload",function(req, res, next){
  //接收前台POST过来的base64
  var imgData = req.body.img;
  //过滤data:URL
  var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
  var dataBuffer = new Buffer(base64Data, 'base64');
  var timestamp=new Date().getTime();
  fs.writeFile(path.join(__dirname, '../public/upload/article',timestamp+'.jpg'), dataBuffer, function(err) {
    if(err){
      res.send(err);
    }else{
      res.send("/upload/article/"+timestamp+".jpg");
    }
  });
});

module.exports = router;
