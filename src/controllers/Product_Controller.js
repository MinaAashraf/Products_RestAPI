//build functions that CRUD in a collection
const { Product } = require('../models/Product');

 const insertProduct = (req, res)=>{};
 const getAllProducts =(req , res) => {};
 const getById =async (req,res)=>{
    try{ 
        const id =  req.params.id
        const product = await Product.findById({_id : id})
        res.status(200).json(product)
    }
    catch(err){  
         res.status(400).json(err)
    }
 };
 const filterByBrand =async (req,res)=>{};
 const sortDescendingly = async(req , res) =>{};
 const sortAssendingly = async(req, res) =>{};
 const updateProduct = async (req,res)=>{};
 const deleteProduct = async (req,res) => {};

 // export handlers
 module.exports = {
     insertProduct,
     getAllProducts,
     getById,
     filterByBrand,
     updateProduct,
     deleteProduct,
     sortDescendingly,
     sortAssendingly
 };
 