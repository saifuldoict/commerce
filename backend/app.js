const express =require('express');
const router =require('./src/routes/api');
const app= new express();

const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');

const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const mongoose =require('mongoose');
const path = require("path");


let URL="mongodb+srv://saifulnhk:8vRVQwPEWZ7qSHUA@cluster0.xzces.mongodb.net/E-commerce?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(URL).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})

const _dirname = path.resolve();
app.use(cookieParser());
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

app.set('etag', false);
app.use("/api/v1",router)

app.use(express.static(path.join(_dirname,"/client2/dist")));
app.get('*',(_, res)=>{
    res.sendFile(path.resolve(_dirname,"client2","dist","index.html"));
})

module.exports=app;