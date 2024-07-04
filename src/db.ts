import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:Thinktanker508@cluster0.u9rf1tr.mongodb.net/event_crud');
        console.log('MongoDB connected successfully');
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error connecting to MongoDB:', error.message);
        } else {
            console.error('Unknown error connecting to MongoDB:', error);
        }
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB;
