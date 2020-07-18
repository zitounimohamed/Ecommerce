const express = require('express');
const cors = require ("cors");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

//connecting to db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/APIpieces',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(()=>{
    console.log ('MongoDB connected...');
})
.catch (err => console.log(err.message));



//checking if you're connected to the DB
mongoose.connection.on('connected', () => {
    console.log("Mongoose connected to DB...")
});

mongoose.connection.on ('Error', (err) =>{
    console.log(err.message);
});

//when the DB disconnects automatically
mongoose.connection.on('Disconnected', ()=> {
    console.log('Mongoose connection is disconnected...')
});

//when YOU disconnect from the DBs
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose connection is disconnected due to app termination');
    });
    process.exit(0);
});


const app = express();
app.use(cors());

//Middlewares
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());

//Routes
app.use('/users', require('./routes/users'));
app.use('/piece', require('./routes/piece'));
app.use('/contact', require('./routes/contact'));
app.use('/orders',require('./routes/commande'))



//error handler


//start the server
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Server listening at ${port}`);

