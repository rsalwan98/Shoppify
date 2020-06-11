const express = require('express');
const Products = require('../models/Products')
const router = new express.Router();

router.post("/products", async(req,res)=>{
    const product = new Products(req.body);
    try{
        await product.save()
    }
    catch(e){
        console.log(e)
    }
    res.send("received")
})

router.get("/products",async (req,res) => {
    const products= await Products.find({ category : req.query.data.toLowerCase()});
    res.send(products)
})

router.get("/productInfo", async (req,res) => {
    console.log(req.query)
    const product = await Products.findById(req.query.productid.toString())
    res.send(product)
})

module.exports = router