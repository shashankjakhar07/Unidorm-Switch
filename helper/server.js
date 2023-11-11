import express from 'express'
import axios from 'axios'
const app=express()

// Middelwares

app.use(express.json())

const port=8000


// HTTP Requests
app.get('/',(req,res)=>{
    setInterval(async()=>{
        // console.log('making req');
        axios.get('https://hm-server-2tgn.onrender.com/helper')
        // console.log('made req');
        // axios.get('http://localhost:8080/helper')
    },600000)
    setInterval(async()=>{
        // console.log('calling helper 2');
        axios.get('https://helper-service.onrender.com/help')
        // axios.get('http://localhost:8080/helper')
    },600000)
    return res.status(201).json("Helper")
})

app.get('/help',(req,res)=>{
    // console.log('help');
    return res.status(201).json("Helper")
})


app.listen(port,()=>{
    console.log(`Server connected to http://localhost:${port}/`);
})
