const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
    {
        userId: {type:String,required:true},
        products: [
            {
                productId:{
                    type:String
                },
                quantity:{
                    type:Number,
                    default: 1,
                }
            }
        ] ,
        amount: {type:Number,required:true},
        adresse:{type:Object, required:true},
        status:{type:String, default:"pending"},

    },
    {timestamps:true}
);

module.exports = mongoose.model("Order",OrderSchema);