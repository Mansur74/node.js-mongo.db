let Customer = require('../models/Customer')
let Product = require('../models/Product')

let CustomerService = {

  create: async (body) => {
    try {
      const customer = new Customer(body);
      await customer.save()
      return customer;
    }
    catch(e){
      throw Error(e.message)
    }
  
  },

  update: async (customerId, customer) => {
    try {
      const result = await Customer.findOneAndUpdate({ _id: customerId }, customer, {new: true})
      return result;
    }
    catch(e){
      throw Error(e.message)
    }
  },

  getAll: async () => {
    try {
      const customers = await Customer.find().populate();
      return customers;
    }
    catch(e){
      throw Error(e.message)
    }
  },

  getById: async (customerId) => {
    try {
      const customer = await Customer.findById(customerId).populate();
      return customer;
    }
    catch(e){
      throw Error(e.message)
    }
  },

  delete: async (customerId) => {
    try {
      const result = await Customer.deleteOne({ _id: customerId });
      return result;
    }
    catch(e){
      throw Error(e.message)
    }
  },

}

module.exports = CustomerService