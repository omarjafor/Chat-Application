import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('Database Connected');
    }).catch((error) => {
        console.log('Database Not Connect');
    })
};

export default connectDB;