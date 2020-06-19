const express = require('express')
const User = require('../models/User')
const router = new express.Router();
const bcrypt = require('bcryptjs')
const Cart = require('../models/Cart')
const mongoose = require('mongoose')
router.post('/signup', async (req,res) => {
    
    const user = new User(req.body);
    user.password = await bcrypt.hash(user.password,8);

    const cart = new Cart({
        productId : []
    }
    )

    cart.save(function(err){
        if(err){
            console.log(err);
        }
    })

    user.cart=cart;
    user.save(function(err) {
        if(err){
            console.log(err)
        }
    })
    res.send(user)
})


module.exports = router

