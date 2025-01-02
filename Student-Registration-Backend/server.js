const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose');
const router = require("./router"); 

app.use(cors());
app.use(express.json());

const url = 'mongodb+srv://user_data:<Sudharaka@24173>@cluster0.l3n9q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connect = async () => {
    try{
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log('MongoDB Error:' , error);
    }
};

const server = app.listen(3001,'127.0.0.1', () => {
    console.log(`Node server is Lis ${server.address().port}`)
});

app.use('/api', router);