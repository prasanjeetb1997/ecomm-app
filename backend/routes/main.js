const express = require('express')
const router = express.Router()
const userController = require("../controllers/user_controller")
const productController = require("../controllers/product_controller")
const jwtAuth = require("../middleware/jwtAuth")
const multer  = require("multer")
const upload = multer({ dest: 'uploads/' })



router.post('/register',userController.create)
router.post("/login",userController.login)
router.post("/add",jwtAuth.verifyToken,productController.addProduct)
router.get("/products",productController.getProducts)
router.delete("/product/:id", jwtAuth.verifyToken, productController.deleteProduct)
router.get("/product/:id",productController.getProduct)
router.put("/product/:id",jwtAuth.verifyToken, productController.updateProduct)
router.get("/products/:key",productController.searchProduct)
router.post("/product/image",upload.array("img"),productController.addImage)

module.exports = router