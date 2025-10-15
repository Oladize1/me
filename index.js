import e from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv'
dotenv.config()

import { meRoute } from './route.js'

const app = e()
const PORT = process.env.PORT || 3000

app.use(e.json())
app.use(cors())
app.use(rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 30, 
    message: {
        status: "error",
        message: "Too many requests from this IP, please try again after a minute."
    },
    standardHeaders: true, 
    legacyHeaders: false, 
}))
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.use('/me', meRoute)


app.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`);  
})