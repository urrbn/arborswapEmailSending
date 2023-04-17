const express = require('express')
const router = express.Router()

router.post('/applylisting', function(req, res){
    console.log(req.body)
    res.json({
        status: 1000
    })
})

module.exports = router