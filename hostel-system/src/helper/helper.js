import axios from 'axios'  

// make api request

const url='https://hm-server-2tgn.onrender.com'


export const register=async(items)=>{
    try{
        return await axios.post(`${url}/api/createQuery`,{items})
    }
    catch(error){
        // console.log(error);
        return error
    }
}

export const update=async(items)=>{
    try{
        return await axios.post(`${url}/api/updateQuery`,{items})
    }
    catch(error){
        // console.log(error);
        return error
    }
}

export const deleteRecord=async(items)=>{
    try{
        // console.log(items);
        return await axios.delete(`${url}/api/deleteRecord?rollNo=${items.rollNo}&hallName=${items.hallName}`)
    }
    catch(error){
        // console.log(error);
        return error
    }
}

export const getRecords=async(items)=>{
    try {
        let {data}=await axios.get(`${url}/api/getUsers?hallName=${items.hallName}`)
        return data
        
    } catch (error) {
        // console.log(error)
        return error
    }
}

export const getByRollNo=async(items)=>{
    try {
        // console.log('hello');
        let {data}=await axios.get(`${url}/api/getByRollNo?rollNo=${items.rollNo}`)
        // console.log(data.hallName);
        return data.hallName
    } catch (error) {
        // console.log(error);
        return error
    }
}

export const getUserByRollNo=async(items)=>{
    try {
        // console.log('hi');
        let {data}=await axios.get(`${url}/api/getUserByRollNo?rollNo=${items.rollNo}&hallName=${items.hallName}`)
        // console.log(data);
        return data
    } catch (error) {
        // console.log(error);
        return error
    }
}