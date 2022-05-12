// Imported required packages
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('config');

// MongoDB Databse url


// Created express server
const app = express();
app.use(express.json({ extended: true }));

// All the express routes
const employeeRoutes = require('./Routes/Employee.route');

// Conver incoming data to JSON format
app.use(bodyParser.json());

// Enabled CORS
app.use(cors());

// Setup for the server port number


// Routes Configuration
app.use('/employees', employeeRoutes);

const PORT = config.get('port') || 5000
async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'))
        app.listen(5000, () => console.log(`App has been started on port ${PORT}`))
    } catch (e) {
        console.log('Server Error:', e.message)
        process.exit(1)
    }
}

start()