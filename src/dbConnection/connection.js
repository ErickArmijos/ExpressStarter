const mongoose = require('mongoose');
const password = '3VrSxhDlDx5IlQYe'
const dbname = 'pokedex'
const uri= `mongodb+srv://ermuffins202:${password}@cluster0.qftcd53.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`



const connection = async function main() {
  await mongoose.connect(uri);
}

module.exports=connection;