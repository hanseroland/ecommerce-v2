const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        title: {type:String,required:true,unique:true},
        description: {type:String,required:true},
        image: {type:String,required:true},
        categories: {type:Array},
        size: {type:Array},
        color: {type:Array},
        price: {type:Number,required:true},
        instock: {type:Boolean,default:true},
        quantity: {type:Number,required:true,default:0}

    },
    {timestamps:true}
);

module.exports = mongoose.model("Product",ProductSchema);