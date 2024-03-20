 import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';

dotenv.config();
const app = express();
app.use(cors());


app.use(express.json());
const port=process.env.PORT;

app.get("/",async (req,res)=>{
    res.status(200).send({
        success : true,
        message : "server healthy"
    })
});

app.use("/auth",authRouter);
app.use("/user",userRouter);



app.listen(port);