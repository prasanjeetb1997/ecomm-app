const Product = require("../models/product")


module.exports.addProduct = async (req,res)=>{

    try {
        let dbresponse = await Product.create(req.body);
         let dbresponseObject = dbresponse.toObject();
        return res.send(dbresponseObject)
    
      } catch (error) {
        console.log(error);
      }

}
module.exports.getProducts = async (req,res)=>{

  try {
     let products = await Product.find({})

      return res.send(products)
  
    } catch (error) {
      console.log(error);
    }

}
module.exports.deleteProduct = async (req,res)=>{
  try {
   let dbResponse = await Product.deleteOne({_id : req.params.id})
   return res.send(dbResponse)
    } catch (error) {
      console.log(error);
    }

}
module.exports.getProduct = async (req,res)=>{
  try {
   let dbResponse = await Product.findById(req.params.id)
   return res.send(dbResponse)
    } catch (error) {
      console.log(error);
    }

}
module.exports.updateProduct = async (req,res)=>{
  try {
   let dbResponse = await Product.findByIdAndUpdate(req.params.id,{$set:req.body})
   return res.send(dbResponse)
    } catch (error) {
      console.log(error);
    }

}
module.exports.searchProduct = async (req,res)=>{
  try {
    let key = req.params.key;
    let dbResponse = await Product.find({ "$or": [ {name:{$regex:key}},{category:{$regex:key}},{company:{$regex:key}} ] }); 
   return res.send(dbResponse)

    } catch (error) {
      console.log(error);
    }

}
module.exports.addImage = async (req,res)=>{
  console.log(req.files, req.file)

}