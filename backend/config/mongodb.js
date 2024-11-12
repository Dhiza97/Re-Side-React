import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log(`Connected to MongoDB database`);
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/re-side`)

}

export default connectDB;