import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    connectDB();
    console.log(`Server Listen at port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Chat Application Server is Running')
})