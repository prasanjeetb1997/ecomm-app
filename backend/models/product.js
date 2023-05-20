const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {type:String,required:true},
  price: {type:String,required:true},
  category: {type:String,required:true},
  userId : {type:String,required:true},
  company : {type:String,required:true}
},{timestamps:true});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;