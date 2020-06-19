const express =  require('express');
const router = new express.Router();
const User = require('../models/User');
const Cart = require('../models/Cart')

router.post("/cart", async (req,res) => {
    
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

    try{
        await user.cart.save();
    }
    catch(err){
        res.send(err);
    }

    try{
        await user.save();
    }
    catch(err){
        res.send(err);
    }

    res.send(user);

})


router.get("/cart",async (req,res) => {

    const userId = JSON.parse(req.query.data);
    const user =  await User.findById(userId._id)
    .populate('cart')
    await user
    .populate('cart.cartItems.productId')
    console.log(user.cart.cartItems)
    res.send(user);
})
module.exports = router;