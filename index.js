import express from 'express'
import cors from 'cors'
import env from 'dotenv'
import http from 'http'
import route from './route'
import path from 'path'
env.config()

const app = express();
const server = http.createServer(app);


const port = process.env.PORT || 3005
app.use('/api',route)

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

app.listen(port,()=>{
    console.log('하이')
})