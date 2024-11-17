// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the "uploads" directory
app.use('/uploads', express.static('uploads'));

// MongoDB Connection
mongoose.connect('mongodb+srv://farhanfarooq786000:farhan123@custom-frames.pg25y.mongodb.net/?retryWrites=true&w=majority&appName=custom-frames', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Order Schema
const orderSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    pincode: String,
    state: String,
    district: String,
    email: String,
    items: Array,
});
const Order = mongoose.model('Order', orderSchema);

// Payment Schema
const paymentSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    paymentScreenshot: String,
});
const Payment = mongoose.model('Payment', paymentSchema);

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Order Route
app.post('/api/orders', async (req, res) => {
    const orderData = req.body;
    try {
        const newOrder = new Order(orderData);
        await newOrder.save();
        res.status(201).send({ message: 'Order placed successfully!', order: newOrder });
    } catch (error) {
        res.status(500).send({ message: 'Error placing order', error });
    }
});

// Payment Route
app.post('/api/payments', upload.single('paymentScreenshot'), async (req, res) => {
    const { name, phone, address } = req.body;
    const paymentScreenshot = req.file ? req.file.path : null;

    try {
        const newPayment = new Payment({ name, phone, address, paymentScreenshot });
        await newPayment.save();
        res.status(201).send({ message: 'Payment recorded successfully!', payment: newPayment });
    } catch (error) {
        res.status(500).send({ message: 'Error recording payment', error });
    }
});

// Get Payments Route
app.get('/api/payments', async (req, res) => {
    try {
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching payments', error });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
