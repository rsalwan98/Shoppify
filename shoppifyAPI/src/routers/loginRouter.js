const express = require('express')
const User = require('../models/User')
const router = new express.Router();

router.post("/login", async (req,res) => {
    
    try{
        const user =  await User.findByCred(req.body.email,req.body.password)
        const token = await user.genToken();
        user.token = token; 
        try{
            user.save();
        }
        catch(err){
            console.log(err)
        }
        res.send({
            jwtToken : user.token
        })
    }   
    catch(err){
        res.send({
            error: err.toString()
        })
    }
})

router.delete('/signout', async (req,res) => {
    const user = await User.findById(req.body._id.toString())
    user.token=""
    try{
        await user.save()
    }
    catch(err){
        console.log(err)
    }
    res.send()
})

module.exports = router