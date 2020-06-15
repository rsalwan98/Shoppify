const express = require('express')
const User = require('../models/User')
const router = new express.Router();
const bcrypt = require('bcryptjs')
const Cart = require('../models/Cart')
const mongoose = require('mongoose')
router.post('/signup', async (req,res) => {
    
    const user = new User(req.body);
    user._id= new mongoose.Types.ObjectId();
    user.password = await bcrypt.hash(user.password,8);

    const cart = new Cart({
        _id : new mongoose.Types.ObjectId(),
        productId : [],
        userId : user._id
    }
    )

    user.cart= cart._id;
    cart.save(function(err){
        if(err){
            res.send(err);
        }
    })

    user.save(function(err) {
        if(err){
            res.send(err);
        }
    })
})


module.exports = router

