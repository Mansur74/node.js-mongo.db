const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const CustomerController = require('./controllers/CustomerController');
const ProductController = require('./controllers/ProductController');
mongoose.set("strictQuery", false)

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// customer controllers
app.get('/api/customer', CustomerController.getAll);
app.get('/api/customer/:id', CustomerController.getById);
app.post('/api/customer/create', CustomerController.create);
app.patch('/api/customer/update/:id', CustomerController.update);
app.delete('/api/customer/delete/:id', CustomerController.delete);


// product controllers
app.get('/api/product', ProductController.getAll);
app.get('/api/product/:id', ProductController.getById);
app.post('/api/product/:id/create', ProductController.create)
app.patch('/api/product/update/:id', ProductController.update)
app.delete('/api/product/delete/:id', ProductController.delete);

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
const PORT = process.env.PORT | 3000;


const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://mansur74:m140310r@cluster0.vpllr5e.mongodb.net/example?retryWrites=true&w=majority');
    app.listen(PORT, () => {
      console.log("Listening port:", PORT);
    });

  }
  catch (error) {
    console(error.message)
  }
}
start()