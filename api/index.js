import express from 'express';
import mongoose  from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';
import dotenv from 'dotenv';
import path from 'path';


dotenv.config();
const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/amazon')
.then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });



app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/products', productRouter);
app.use('/api/uploads', uploadRouter);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});
app.get('/', (req, res) => {
  res.send('server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});


const port =  5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});