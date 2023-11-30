let ProductService = require('../services/ProductService')

let ProductController = {
  create: async (req, res) => {
    try {
      const customer = await ProductService.create(req.params.id, req.body)
      res.status(201).json({status: 201, data : customer})
    }
    catch(e){
      res.status(400).json({ error: e.message })
    }
  },

  getAll: async (req, res) => {
    try {
      const products = await ProductService.getAll();
      res.status(200).json(products)
    }
    catch(e){
      res.status(400).json({ error: e.message })
    }
  },

  getById: async (req, res) =>{
    const {id: productId} = req.params;
    try{
      const product = await ProductService.getById(productId);
      if (!product)
        res.status(400).json({ error: "Customer couldn't found!" })

      else 
        res.status(200).json({product})
    }
    catch(e){
      res.status(400).json({ error: e.message })
    }
  },

  update: async (req, res) => {
    try {
      const {id: productId} = req.params;
      const updatedProduct = await ProductService.update(productId, req.body);
      res.status(200).json({updatedProduct : updatedProduct})
    } 
    catch(e){
      res.status(400).json({ error: e.message })
    }
  },

  delete: async (req, res) => {
    try {
      const {id: productId} = req.params;
      const updatedProduct = await ProductService.delete(productId);
      res.status(200).json({updatedProduct : updatedProduct})
    } 
    catch(e){
      res.status(400).json({ error: e.message })
    }
  }
}

module.exports = ProductController