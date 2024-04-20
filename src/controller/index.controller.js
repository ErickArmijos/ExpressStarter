const controller = {}
const name='Luis';
controller.index = (req,res)=>{
    res.render('index.pug',{
        name
    });
}


module.exports = controller;