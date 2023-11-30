let Customer = require('../models/Customer')
let Product = require('../models/Product')

let ProductService = {
  create: async (customerId, body) => {
    try {
      const product = await Product.create(body);
      const updatedCustomer = await Customer.findOneAndUpdate(
        { _id: customerId },
        {
          $push: {
            products: {
              _id: product._id,
              name: product.name,
              stock: product.stock,
              produceYear: product.produceYear,
            },
          },
        },
        { new: true }
      );
      return updatedCustomer;
    } 
    catch (e) {
      throw new Error(e.message);
    }
  },

  update: async (productId, body) => {
    try {
      await Product.findOneAndUpdate(
        { _id: productId },
         body, 
        { new: true });
      const result = await Customer.findOneAndUpdate(
        { 'products._id': productId },
        { $set: { 'products.$': body }},
        { new: true }
      );
      return result;
    } 
    catch (e) {
      throw new Error(e.message);
    }
  },

  delete: async (productId) => {
    try {
      await Product.deleteOne({ _id: productId });

      const result = await Customer.findOneAndUpdate(
        { 'products._id': productId },
        { $pull: { 'products': {_id : productId} }},
        { new: true }
      );
      return result;
    } 
    catch (e) {
      throw new Error(e.message);
    }
  },

  getAll: async () => {
    try {
      const products = await Product.find();
      return products;
    }
    catch(e){
      throw Error(e.message)
    }
  },

  getById: async (productId) =>{
    try{
      const product = await Product.findOne({_id: productId});
      return product
    }
    catch(e){
      throw Error(e.message)
    }
  }
}

module.exports = ProductService