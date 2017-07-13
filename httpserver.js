var http = require('http')
var fs = require('fs')
var html = fs.readFileSync('index.html','utf-8')

http.createServer(function(req,res){
  res.write(html)
  res.end()
}).listen(1234,function(){
  console.log('sever is listening and is connected to port 1234 ....')
})
