const mongoose =  require("mongoose");

const cartSchema = new mongoose.Schema({
     cartItems : [{
         productId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Products'
         },
         qty : {
             type : Number,
             default :1
         }
     }]
})

module.exports = mongoose.model("Cart",cartSchema);