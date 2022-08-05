const { products } = require("../staticData/productList")
exports.getAllProducts=async(req, res)=>{
    return res.status(200).json(products)
}

exports.getProduct=(req,res)=>{
    const id=req.params.id
    return res.status(200).json(products.find(item=>item.id==id))
}