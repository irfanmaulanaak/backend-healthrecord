const express = require('express');
const volleyball = require('volleyball');
const web_ehealth = require('./api/e-health');
const cors  = require('cors');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(volleyball);
app.use('/ehealth',web_ehealth);

app.get('/',(req,res)=>{
    res.json({
        "Message":"Health Record DApp"
    });
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log('Listening to port '+ port);
});

function notFound (req,res,next){
    res.status(404);
    const error = new Error("Not Found"+req.originalUrl);
    next(error);
}


function errorHandler(err,req,res,next){
    res.status(res.statusCode||500);
    res.json({
        message: err.message
    })
}

app.use(notFound);
app.use(errorHandler);