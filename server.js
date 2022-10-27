import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/Route.js';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use('/', Route);

if (process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
}


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL =  process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@cluster0.ofezknn.mongodb.net/?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 8000;

Connection(URL);

app.listen(PORT, ()=> console.log(`Server is running on PORT ${PORT}`));

DefaultData();