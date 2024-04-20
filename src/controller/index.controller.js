const controller = {}
const connection = require('../dbConnection/connection');
const PokeModel = require('../models/pokedex.models')


controller.index = async (req,res)=>{
   try{
        await connection();
        const pokemons=await PokeModel.find();
        console.log(pokemons);     
        const name='Luis';
        res.render('index.pug',{name});
   }catch(e){
        console.error(e)
   }
}


module.exports = controller;