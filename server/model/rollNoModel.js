import mongoose from 'mongoose'

const UserScheme=new mongoose.Schema({
    rollNo:String,
    hallName:String
})

export default mongoose.model('rollnos',UserScheme)