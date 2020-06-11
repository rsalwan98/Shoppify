const express = require('express')
const User = require('../models/User')
const router = new express.Router();
const bcrypt = require('bcryptjs')
router.post('/signup', async (req,res) => {
    const user = new User(req.body);
    user.password = await bcrypt.hash(user.password,8);
    try{
        await user.save()
        res.send(user)
    }catch(err) {
        console.log(err)
        res.send(err)
    }
})


module.exports = router

