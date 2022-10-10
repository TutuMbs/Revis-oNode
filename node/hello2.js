/**
 * Hello Node
 * @author @ArthurM 
 * 
 */

const http = require('http')
http.createServer((req,res)=>{
    res.write("bem vindo ao Node")
    res.end()
}).listen(4040)