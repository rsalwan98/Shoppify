const express =  require('express');
const router = new express.Router();
const User = require('../models/User');
const mongoose  = require('mongoose');
router.post("/cart", async (req,res) => {
    const user = await User.find({
        email : req.body.email
    });
    console.log(user.toLocaleString.productId.push(new mongoose.Types.ObjectId()))
    res.send("Hello")
})

module.exports = router;