require("dotenv").config();

const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser");
const {HoldingsModel}=require("./Models/HoldingsModel");
const {PositionsModel}=require("./Models/PositionsModel");
const {OrdersModel}=require("./Models/OrdersModel");
const {UserModel}=require("./Models/UserModel");
const app= express();
const PORT=process.env.PORT || 8080;
const Url=process.env.MONGO_URL;
const session=require("express-session");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const { FundsModel } = require("./Models/FundsModel");



app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(UserModel.authenticate()));

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());



app.get("/allHoldings", async (req,res)=>{
  let id=req.user._id;
  let allHoldings= await  HoldingsModel.find({userID:id});
  res.json(allHoldings);
  
})


app.get("/positions",async(req,res)=>{
  let positions= await PositionsModel.find({});
  res.json(positions);
  
})


app.get("/allOrders",async(req,res)=>{
  let id=req.user._id;
  console.log(id);
  let allOrders= await OrdersModel.find({userID : id});
  res.json(allOrders);

})



app.post("/newOrder",async(req,res)=>{
  let orgPrice=req.body.orgPrice;
  let userPrice=req.body.price;
  if(orgPrice > userPrice ){
  let newOrder = new OrdersModel({
     name : req.body.name,
    qty : req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    userID:req.user._id
    
  });
  
 console.log("Authenticated:", req.isAuthenticated());
     await newOrder.save();
  res.send("susscesfull");
  }else{
    let newOrder = new OrdersModel({
     name : req.body.name,
    qty : req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    userID:req.user._id
    
  });
  
 console.log("Authenticated:", req.isAuthenticated());
     await newOrder.save();
  res.send("susscesfull");

let stockName=req.body.name;
let id= req.user._id;
let orderPrice=req.body.price;
let orderQty=req.body.qty;


await HoldingsModel.findOneAndUpdate(
    {
        userID: id,
        name: stockName
    },
    {
        $inc: {
            qty: orderQty,
              price: orderPrice,
               avg: orderPrice,
        },
        $setOnInsert: {
           
            
            net: "+0.00%",
            day: "+0.00%"
        }
    },
    {
        upsert: true,
        new: true
    }
);
  }

})



app.post("/sellOrder",async(req,res)=>{
  let orgPrice=req.body.originalPrice;
  let userPrice=req.body.price;
  
  if(orgPrice > userPrice){
  let newOrder = new OrdersModel({
     name : req.body.name,
    qty : req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    userID:req.user._id
    
  });

 console.log("Authenticated:", req.isAuthenticated());
     await newOrder.save();
  
  }else{
    let newOrder = new OrdersModel({
     name : req.body.name,
    qty : req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    userID:req.user._id
    
  });

 console.log("Authenticated:", req.isAuthenticated());
     await newOrder.save();

  let id= req.user._id;
  let name=req.body.name;
  let stockQuantity=req.body.qty;
  

  
  await HoldingsModel.findOneAndUpdate(
    {
        userID: id,
        name: name
    },
    {
     $inc: {
         qty: -stockQuantity,
            
           }
    }
  );
   

let stockName=req.body.name;
const holding = await HoldingsModel.findOne({
  userID: req.user._id,
  name: stockName,
});

if (holding && holding.qty === 0) {
  await HoldingsModel.deleteOne({ _id: holding._id });
}
}
});



app.post("/signup",async(req,res)=>{
  let password=req.body.password;
  let newUser=new UserModel({
    username:req.body.username,
    email:req.body.email,
    
  })

  let register=await UserModel.register(newUser,password);
  console.log(register);
})




app.post("/login", (req, res,next) => {
      console.log(req.body);
  passport.authenticate("local", (err, user, info) => {
    
    if (err) return next(err);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    req.logIn(user, (err) => {
       
      if (err) return next(err);

      // Your custom logic here
      console.log("User logged in");
      console.log(user._id);
        
      console.log("Sending response");
      res.status(200).json({
        success: true,
        user
      }); 
         
    });

  })(req, res, next);

});




app.get("/funds",async(req,res)=>{
  console.log(req.user);
  let id=req.user._id;
  let funds= await FundsModel.findOne({userID:id});
  console.log(funds)
  res.json(funds);
})



app.post("/account",async(req,res)=>{
  console.log(req.user);
  let id=req.user._id;
  let fund=new FundsModel({
     margin:0.0,
    usedMargin:0.0 ,
    cash: 0.0,
    openBalance: 0.0,
    payin: 0.0,
    span: 0.0,
    delivery:0.0,
    exposure:0.0,
    premium:0.0,
    colleteral:0.0,
    colleteralEquity:0.0,
    total:0.0,
    userID:id,
  })

  await fund.save();
  res.json(true);
})



app.post("/logout", (req, res, next) => {
    
    req.logout((err) => {
        if (err) {
            return next(err);
        }

        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }

            res.clearCookie("connect.sid");
            res.status(200).json({
                success: true,
                message: "Logged out successfully"
            });
        });
    });

});



app.listen(PORT, ()=>{
  console.log("Port listining");
  mongoose.connect(Url);
  console.log("DB connected");
})  