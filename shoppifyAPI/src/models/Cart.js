const mongoose =  require("mongoose");
const product =  require('./Products')

const cartSchema = new mongoose.Schema({
     productId : [{
         type : mongoose.Schema.Types.ObjectId
     }],
     userId : {
         type : mongoose.Schema.Types.ObjectId
     },
     cartId : {
         type : mongoose.Schema.Types.ObjectId
     }
})

module.exports = mongoose.model("Cart",cartSchema);