const express = require('express');
const path = require('path');
const app = express();

//Engine views
app.set('engine views','pug');
app.set('views',path.join(__dirname,'../src/views'))


// Routes
const routes = require('./routes/index.routes');
app.use(routes);
// Static Files 
app.use(express.static(path.join(__dirname,'../public')))
app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.listen(3000,()=>{
    console.log('Servidor a la espera de conexiones');
})

