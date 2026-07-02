const {model}=require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;

const {UserSchema}=require("../Schemas/UserSchema");
UserSchema.plugin(passportLocalMongoose);
const UserModel= new model("User",UserSchema);



module.exports={UserModel};