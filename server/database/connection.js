// import { MongoClient, ServerApiVersion } from 'mongodb'
// const uri = "mongodb+srv://harsh:M@hendr@07@example.f9f20gs.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

import mongoose from 'mongoose'

const connect=async()=>{
    // const url='mongodb://localhost:27017/hostel'
    const url = `mongodb+srv://harsh:Mahendra0712@example.f9f20gs.mongodb.net/?retryWrites=true&w=majority`
    const db=await mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('Connected to Database');
    })
    .catch((err)=>{
        console.log(err);
    })
    return db;
}

export default connect