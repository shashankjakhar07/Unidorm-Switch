import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import Select from 'react-select'
import options from '../assets/options'
import {register} from '../helper/helper.js'
import { CirclesWithBar } from 'react-loader-spinner'
import { getByRollNo } from '../helper/helper.js'
import { getUserByRollNo } from '../helper/helper.js'
import { update, deleteRecord } from '../helper/helper.js'

function Query({rollNo,setRollNo}) {

    const [loader1,setLoader1]=useState(false)
    const [name,setName] = useState('')
    const [hall,setHall]=useState('')
    const [roomNo,setRoomNo]=useState('')
    const [preHall,setPreHall]=useState([])
    const [mobileNo,setMobileNo]=useState('')
    const [button,setButton]=useState('Join')
    const [user,setUser]=useState(false)
    const [sample,setSample]=useState()
    let map;

    const handlePreHall=(value)=>{
        setPreHall(value)
    }

    const navigate=useNavigate()

    const validate=()=>{
        setRollNo((r)=>{
            return r.toUpperCase()
        })
        let rn=rollNo.toUpperCase()
        const pattern = /^[0-9]{3}[A-Z]{2}[0-9]{4}$/;
        if(pattern.test(rn))
        return true
        else 
        return false
    }

    const handleSubmit=async()=>{
        if(!validate())
        {
            alert('Type Correct RollNo')
            return
        }
        if (!(name &&hall!==undefined && hall.hasOwnProperty('value')))
        {
            alert('Enter Name and Hall')
            return false;
        }
        setLoader1(true)
        if(user===false)
        await register({name,rollNo,roomNo,number:mobileNo,hallName:hall,preferredHall:preHall})
        else 
        await update({ name, rollNo, roomNo, number: mobileNo, hallName: hall, preferredHall: preHall })
        navigate('/hostelProfile',{state:{name:hall.value}})
    }

    const handleDelete=async()=>{
        validate()
        if(hall!==undefined&&hall.hasOwnProperty('value'))
        {
            setLoader1(true)
            await deleteRecord({rollNo,hallName:hall.value})
        }
        navigate('/hostelList')
    }

    const helper=async()=>{
        let hallName=undefined
        if(validate())
        hallName=await getByRollNo({rollNo})
        if(hallName!==undefined&&hallName!='AxiosError')
        {
            let data=await getUserByRollNo({rollNo,hallName})
            if(data.roomNo!==undefined)
            {
                setName(data.name)
                setRoomNo(data.roomNo)
                setMobileNo(data.number)
                let arr=data.preferredHall.map((item,index)=>{
                    return options[map[item.value]]
                })
                setPreHall(arr)
                setUser(true)
                setButton('Update')
                setSample(rollNo)
            }
        }
        if(hallName!==undefined)
        setHall(options[map[hallName]])
    }
    
    useEffect(() => {
        map = new Map()
        options.map((item, index) => {
            map[item.value] = index
        })
        helper()
        if (rollNo !== sample)
        {
            setUser(false)
            setButton('Join')
        }
    }, [rollNo])

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    if (loader1)
        return <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel='circles-with-bar-loading'
        />

return (
    <div>
        <div className="signupSection xs:flex-row flex-col">
            <div className="info">
                <h2 className='text-4xl'>Create Your Query</h2>
                <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
                <p className='xs:mt-32 mt-6'>Which Room you want to Vacate</p>
            </div>
            <form  className="signupForm" name="signupform">
                <ul className="noBullet">
                <li>
                    <label ></label>
                    <input type="text" className="inputFields" onChange={(e)=>setRollNo(e.target.value)} id="roll-no" name="roll-no" placeholder="Roll No" value={rollNo}  required/>
                </li>
                <li>
                    <label ></label>
                    <input type="text" className="inputFields" onChange={(e)=>setName(e.target.value)} id="name" name="name" placeholder="Name" value={name} required/>
                </li>
                <li>
                    <label ></label>
                    <Select
                        value={hall}
                        required
                        name="colors"
                        placeholder='Hall'
                        onChange={(value)=>setHall(value)}
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor:'black',
                                backgroundColor: 'rgba(10, 180, 180, 0.2)'
                            }),
                            option: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'black' : 'red',
                                backgroundColor: state.isFocused ? 'black' : 'rgba(10, 180, 180, 1)',
                            }),
                           singleValue: (baseStyles, state) => ({
                                ...baseStyles,
                                backgroundColor: 'rgba(10, 180, 180, 1)'
                            }),
                        }}
                        options={options}
                        className="basic-multi-select inputFields"
                        classNamePrefix="select inputFields"
                    />
                </li>
                <li>
                    <label ></label>
                    <input type="text" className="inputFields" onChange={(e)=>setRoomNo(e.target.value)} id="room" name="room" placeholder="Room No" value={roomNo}  required/>
                </li>
                <li>
                    <label ></label>
                    <Select
                        isMulti
                        required
                        name="colors"
                        value={preHall}
                        placeholder='Preferred Hall'
                        onChange={(value)=>handlePreHall(value)}
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor:'black',
                                backgroundColor: 'rgba(10, 180, 180, 0.2)'
                            }),
                            option: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'black' : 'red',
                                backgroundColor: state.isFocused ? 'black' : 'rgba(10, 180, 180, 1)',
                            }),
                           multiValue: (baseStyles, state) => ({
                                ...baseStyles,
                                backgroundColor: 'rgba(10, 180, 180, 1)'
                            }),
                        }}
                        options={options}
                        className="basic-multi-select inputFields"
                        classNamePrefix="select inputFields"
                    />
                </li>
                <li>
                    <label ></label>
                    <input type="text" className="inputFields" onChange={(e)=>setMobileNo(e.target.value)} id="mobile-no" name="mobile-no" placeholder="Mobile No" value={mobileNo}  required/>
                </li>
                <li id="center-btn">
                    <input readOnly  id="join-btn" name="join" onClick={handleSubmit} alt="join" onChange={()=>{}} value={button}/>
                </li>
                
                {user&&<li id="center-btn">
                    <input readOnly id="join-btn" name="join" onClick={handleDelete} alt="Join" onChange={()=>{}} value="Delete"/>
                </li>}
                </ul>
            </form>
        </div>
    </div>
  )
}

export default Query