import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import claimRoutes from './routes/claimRoutes.js';

dotenv.config();


const PORT = process.env.PORT || 5000; 
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use('/api/users', userRoutes);
app.use('/api/claims', claimRoutes);

 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
