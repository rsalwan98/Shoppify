const express =  require('express');
const router = new express.Router();
const User = require('../models/User');
const Cart = require('../models/Cart')

router.post("/cart", async (req,res) => {
    try {
        const user = await User.findById(req.body.userId._id)
        .populate('cart');
        
        const cartItems = await Cart.findOne({
            cartItems : {
                $elemMatch : {
                    productId : req.body.productId
                } 
            }
        })

        if(!cartItems){
            user.cart.cartItems.push({
                productId : req.body.userId.productId
            });
        }
        
        await user.cart.save();
        await user.save();
        res.send(user);
    } catch(err) {
        res.send(err)
    }
})


router.get("/cart",async (req,res) => {
    try {
        const userId = JSON.parse(req.query.data);
        if(!userId) {
            return res.send('Invalid request')
        }
        const user =  await User.findById(userId._id)
        .populate('cart')
        await user.populate('cart.cartItems.productId')
        console.log(user.cart.cartItems)
        res.send(user);
    } catch(err) {
        res.send(err)
    }
})
module.exports = router;