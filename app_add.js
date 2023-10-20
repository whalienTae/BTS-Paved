
const http=require('http');
const { listeners } = require('process');
http.createServer((req, res)=>{
    res.write('BTS');
    res.end();
})
.listen(8080);
console.log('escuchando el puero', 8081);
