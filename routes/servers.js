const express = require('express');
const { requireSignIn } = require('../middleware');
const router = express()

router.get('/server', requireSignIn, (req,res)=>{
    res.send('sever info')
})

module.exports = router