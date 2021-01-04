const express = require('express')
const route = express.Router()
const Discord = require('../models/Discord')

route.post('/channel/new',(req,res)=>{
    const {channelName} = req.body

    const discord = new Discord({
        channelName
    })
    discord.save(((error,discord)=>{
            if(error){
                return res.status(400).json({message: error.message})
            }
            if(discord){
                res.status(201).json({discord})
            }
        })
    )


})

module.exports = route