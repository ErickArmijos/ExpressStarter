const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('Un cliente se ha conectado');
    res.write('Correcto')
    res.end();
})

server.listen(3000,()=>{
    console.log('Servidor a la espera de conexiones');
})