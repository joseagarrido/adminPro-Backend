const mongoose = require('mongoose');

const dbConexion = async()=>{
 try {
 await mongoose.connect(process.env.DB_CNN, {
     useNewUrlParser: true,
      useUnifiedTopology: true});
    console.log(' db online');
 } catch (error){
    console.log(error);
    throw new Error('Error BD');


 }


}

module.exports = { dbConexion}