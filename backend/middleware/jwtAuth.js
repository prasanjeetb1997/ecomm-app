const jwt = require("jsonwebtoken")
const encryptionKey = "YOYO"

module.exports.verifyToken = (req, res, next) => {
    let token = req.headers.authorization
    if (token) {
        token = token.split(" ")[1]
        jwt.verify(token,encryptionKey,(err,decoded)=>{
            if(err){
                res.status(401).send({message:"please provide valid token"})
            }else{
                console.log(decoded)
                next()
            }
        })
    }else{
        return res.status(403).send({message:"please add token to header"})
    }
}