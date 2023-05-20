const User = require("../models/user")
const jwt = require("jsonwebtoken")
const encryp$decryptKey = "YOYO"

module.exports.create =  async (req, res) => {
  try {
    let dbresponse = await User.create(req.body);
     let dbresponseObject = dbresponse.toObject();
      delete dbresponseObject.password;
    return res.send(dbresponseObject)

  } catch (error) {
    res.send(error)
    console.log(error);
  }
  
 }

 module.exports.login =  async (req, res) => {
  try {
    if(req.body.email && req.body.password){
        let user = await User.findOne(req.body).select("-password")
        if(user){
          jwt.sign({user},encryp$decryptKey,{expiresIn:"2h"},(err,token)=>{
               res.send({user,auth:token})
          });
        }else{
          res.send({error: "Username/password didn't match"})
        }
    }else{
      res.send({error: "Either username or password not provided"} )
    }
  } catch (error) {
    console.log(error);
  }
  
 }