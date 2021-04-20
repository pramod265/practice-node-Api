// express server
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const postRoutes = require('./routes/post');
const dotenv = require('dotenv');

// setting up .env config
dotenv.config()

//db
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    )
.then(() => console.log("DB Connection Established !"));

mongoose.connection.on('error', err => {
    console.log(`DB Connection Error: ${err.message}`);
});

 
// Middleware declaration
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(expressValidator());
app.use('/', postRoutes);

const port = process.env.PORT || '8080'
app.listen(port, () => {
    console.log(`A node API is listening on ${port}`)
});


// const myOwnMiddleware = (req, res, next) => {
//     console.log(" test middleware !!");
//     next();
// }
// app.use(myOwnMiddleware);