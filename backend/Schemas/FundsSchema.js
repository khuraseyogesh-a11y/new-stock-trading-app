const {Schema}=require("mongoose");

const FundsSchema=new Schema({

    margin:Number,
    usedMargin: Number,
    cash: Number,
    openBalance: Number,
    payin: Number,
    span: Number,
    delivery:Number,
    exposure:Number,
    premium:Number,
    colleteral:Number,
    colleteralEquity:Number,
    total:Number,


    userID :{
        type :Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})

module.exports= {FundsSchema};
