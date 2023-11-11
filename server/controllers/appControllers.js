import Model from '../model/userModel.js'
import RollNoModel from '../model/rollNoModel.js'

export const createQuery = async (req,res) => {
    try {
        const body=req.body.items
        // console.log(body);
        const entry=await Model.findOne({hallName:body.hallName.value})
        // console.log(entry);
        if(!entry)
        return res.status(404).send({msg:'Cannot find Hall'})
        // console.log(entry);
        const {rollNo,name,preferredHall,roomNo,number}=body
        const users=[...entry.userList,{rollNo,name,roomNo,preferredHall,number}]
        // console.log(users);
        await Model.updateOne({_id:entry._id},{userList:users})
        // console.log(rollNo,body.hallName.value);
        await RollNoModel.create({rollNo:rollNo,hallName:body.hallName.value})
        res.status(201).send({msg:'Update Done'})
    } catch (error) {
        // console.log(error);
        res.status(501).send(error)
    }
}

export const updateQuery = async (req,res)=>{
    try {
        const body=req.body.items
        // console.log(body);
        const data=await RollNoModel.findOne({rollNo:body.rollNo})
        const hN=data.hallName
        if(hN!==body.hallName.value)
        {
            let entry=await Model.findOne({hallName:hN})
            if(!entry)
            return res.status(404).send({msg:'Cannot find Hall'})
            let {rollNo,name,hallName,preferredHall,roomNo,number}=body
            let users=entry.userList.filter((item)=>{
                if(item.rollNo!==rollNo)
                return {...item.toObject()}
            })
            await Model.updateOne({_id:entry.id},{userList:users})
            entry=await Model.findOne({hallName:body.hallName.value})
            if(!entry)
            return res.status(404).send({msg:'Cannot find Hall'})
            hallName=hallName.value
            users=[...entry.userList,{rollNo,name,roomNo,preferredHall,number}]
            await Model.updateOne({_id:entry._id},{userList:users})
            await RollNoModel.updateOne({_id:data._id},{hallName:hallName})
            return res.status(201).send({msg:'Update Done'})
        }
        const entry=await Model.findOne({hallName:hN})
        if(!entry)
        return res.status(404).send({msg:'Cannot find Hall'})
        let {rollNo,name,hallName,preferredHall,roomNo,number}=body
        hallName=hallName.value
        const users=entry.userList.map((item)=>{
            // console.log("item=>",item,rollNo);
            if(item.rollNo===rollNo)
            {
                // console.log(number);
                return {...item.toObject(),rollNo,name,preferredHall,roomNo,number}
            }
            return {...item.toObject()}
        })
        // console.log(users);
        await Model.updateOne({_id:entry._id},{userList:users})
        await RollNoModel.updateOne({_id:data._id},{hallName:hallName})
        res.status(201).send({msg:'Update Done'})
    } catch (error) {
        // console.log(error);
        res.status(501).send(error)
    }
}

export const deleteQuery=async(req,res)=>{
    try {
        const {rollNo,hallName}=req.query
        const entry=await Model.findOne({hallName})
        if(!entry)
        res.status(404).send({msg:'Cannot find Hall'})

        const users=entry.userList.filter((item)=>{
            if(item.rollNo!==rollNo)
            return {...item.toObject()}
        })
        await Model.updateOne({_id:entry.id},{userList:users})
        await RollNoModel.deleteOne({rollNo:rollNo})
        res.status(201).send({msg:'Deletion Done'})
    } catch (error) {
        // console.log(error);
        res.status(501).send(error)
    }
}

export const getUsers=async(req,res)=>{
    try {
        const {hallName}=req.query
        // console.log('server=>',hallName);
        const entry=await Model.findOne({hallName})
        if(!entry)
        return res.status(404).send({msg:'Cannot find Hall'})
        // res.status(201).json({...entry.userList})
        res.status(201).json([...entry.userList])

    } catch (error) {
        // console.log(error);
        res.status(501).send(error)
    }   
}


export const getByRollNo=async(req,res)=>{
    try {
        const {rollNo}=req.query
        const entry=await RollNoModel.findOne({rollNo})
        if(!entry)
        return res.status(404).send({msg:'Cannot find Hall'})
        // console.log("entry",entry);
        res.status(201).json({hallName:entry.hallName})

    } catch (error) {
        // console.log(error);
        res.status(501).send(error)
    }   
}

export const getUserByRollNo=async(req,res)=>{
    try {
        // console.log(req);
        const {rollNo,hallName}=req.query
        const entry=await Model.findOne({hallName})
        if(!entry)
        return res.status(404).send({msg:'Cannot find Hall'})
        // console.log(entry);
        const data=entry.userList.filter((item,index)=>{
            return item.rollNo===rollNo
        })
        res.status(201).json(data[0])
    } catch (error) {
        // console.log(error);
        res.status(501).send(error)
    }
}

export const deleteRecord=async(req,res)=>{
    try {
        const {rollNo,hallName}=req.query
        const entry=await Model.findOne({hallName})
        if(!entry)
        return res.status(404).send({msg:'Cannot find Hall'})
        // console.log(entry);
        entry.userList=entry.userList.filter((item,index)=>{
            return item.rollNo!==rollNo
        })
        // console.log("userList=>",entry.userList);
        await Model.updateOne({_id:entry._id},{userList:entry.userList})
        await RollNoModel.deleteOne({rollNo})
        res.status(202).json({sucess:'Sucess'})
    } catch (error) {
        // console.log(error);
        // console.log('hello');
        res.status(501).send(error)
    }
}
