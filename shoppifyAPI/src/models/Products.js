const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    qty : {
        type : Number,
        rquired : true
    },
    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        require : true
    },
    imgSource : {
        type : String,
        require : true
    }
})

const Products = mongoose.model("Products",productSchema)
module.exports = Products;