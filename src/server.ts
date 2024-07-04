import express from 'express';
import eventRoutes from './routes/eventRoutes';
import connectDB from './db'; // Ensure this path is correct

const app = express();

console.log("server");

// Connect to the database
connectDB();

app.use(express.json());
app.use('/api', eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
