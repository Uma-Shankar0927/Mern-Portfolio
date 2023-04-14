import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app =  express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/post',postRoutes);
app.use('/api/v1/user',userRoutes);

app.get('/', async(req,res) => {
    res.sendStatus(200);
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'));
    } catch (error) {
        console.log(error);
    }
}
startServer();