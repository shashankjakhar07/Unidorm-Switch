import mongoose from 'mongoose'

const User=new mongoose.Schema({
    rollNo: String,
    name: String,
    number: Number,
    roomNo: String,
    preferredHall:Array
})

const UserScheme=new mongoose.Schema({
    hallName:String,
    userList:[User]
})

export default mongoose.model('h',UserScheme)