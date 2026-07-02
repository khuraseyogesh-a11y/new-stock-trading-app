const {model}=require("mongoose");

const {OrderSchema}=require("../Schemas/OrdersSchema");

const OrdersModel= new model("order",OrderSchema);

module.exports={OrdersModel};