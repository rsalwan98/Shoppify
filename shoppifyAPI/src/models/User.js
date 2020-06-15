const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    
    _id: {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : 7
    },
    token : {
        type : String
    },
    cart : {
        type : mongoose.Schema.Types.ObjectId
    }
})

userSchema.methods.genToken = async function(){
    const user = this;
    const token = jwt.sign({ _id : user._id.toString()},'shoppifyAPI')
    user.token = token;
    await user.save()
    return token;
}


userSchema.statics.findByCred = async function(email,password){

    const user = await User.findOne({email});
    if(!user){
        throw new Error("No user")
    }

    const isMatch = await bcrypt.compare(password , user.password);
    if(!isMatch){
        throw new Error("password mismatch")
    }

    return user;
}


const User = mongoose.model("User",userSchema);

module.exports = User;