 const mongoose = require('mongoose')

 const discordSchema = new mongoose.Schema({
     channelName:{
         type: String
     },
     conversation:[
         {
            message: String,
            timestamp: String,
            user:{
                displayName: String,
                email: String,
                photo: String,
                uid: String
            }
         }
     ]
 })
 
 mongoose.model = mongoose.model('Conversations', discordSchema)