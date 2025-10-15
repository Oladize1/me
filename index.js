import e from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import { meRoute } from './route.js'

const app = e()
const PORT = process.env.PORT || 3000

app.use(e.json())
app.use(cors())



app.use('/me', meRoute)


app.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`);  
})