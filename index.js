const mongoose =require('mongoose');
const express =require('express');
require('dotenv').config()
const userRouter = require('./Routes/UserRouter')

const app = express();
const port = process.env.PORT
const cors =require('cors');

app.use(express.json({extended:true, limit:"100mb"}))
app.use(express.urlencoded({extended:true, limit:"100mb"}))
app.use((cors({origin: "*"})))
app.use("/sekinahtodo",userRouter)

const uri = process.env.MONGO_URI
mongoose.connect(uri).then((res)=>{
    console.log("connected to mongoose");
}).catch((error)=>{
    console.log(error);
})

const Server = app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})