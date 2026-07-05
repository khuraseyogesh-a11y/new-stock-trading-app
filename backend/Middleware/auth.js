const passport =require('passport');
const LocalStrategy=require('passport-local');
const isLoggedIn = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }else{
        return res.status(401).json({
        success: false,
        message: "Please login first"
    });
    }
}

module.exports =isLoggedIn;