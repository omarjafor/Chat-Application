import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import userRoute from './routes/userRoute.js';
import messageRoute from './routes/messageRoute.js';
import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js';
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: ['http://localhost:5173'],
    credentials:true
}))

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/user', userRoute);
app.use('/api/v1/message', messageRoute);

server.listen(PORT, () =>{
    connectDB();
    console.log(`Server Listen at port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Chat Application Server is Running')
})