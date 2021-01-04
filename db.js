const mongoose = require('mongoose')
const mongoUrl = process.env.mongoUrl
const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}

const connectDB = () =>{
    mongoose.connect(mongoUrl, mongoOptions)
    mongoose.connection.once('open',(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Database connected successfully');
        }
    })
}

module.exports = connectDB