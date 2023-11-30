let CustomerService = require('../services/CustomerService')

let CustomerController = {

  create: async (req, res) => {
    try {
      const customer = await CustomerService.create(req.body);
      res.status(201).json({status: 201, data : customer});
    }
    catch (error) {
      res.status(400).json({ error: error.message });
    }
  
  },

  update: async (req, res) => {
    try {
      const { id: customerId } = req.params;
      const result = await CustomerService.update(customerId, req.body)
      res.status(200).json({ status: 200, updatedCustomer: result});
    }
    catch {
  
    }
  },

  getAll: async (req, res) => {
    try {
      const customers = await CustomerService.getAll();
      res.send({status: 200, data : customers});
    }
    catch (error) {
      res.status(500).json({ error: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { id: customerId } = req.params;
      const customer = await CustomerService.getById(customerId);
      if (!customer)
        res.status(404).json({ error: "Customer couldn't found!" });
  
      else
        res.status(200).json({ customer: customer });
    }
    catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id: customerId } = req.params;
      const result = await CustomerService.delete(customerId);
      res.status(200).json({ deletedCount: result.deletedCount })
    }
    catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

}

module.exports = CustomerController