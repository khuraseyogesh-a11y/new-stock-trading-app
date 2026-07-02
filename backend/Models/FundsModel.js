const {model} =require("mongoose");
const { FundsSchema } = require("../Schemas/FundsSchema");

const FundsModel = new model("fund",FundsSchema);

module.exports={FundsModel};