import React,{useState} from 'react'
import { useNavigate } from 'react-router'
import '../external.css'

function Login({rollNo,setRollNo}) {

    const navigate=useNavigate()

    const validate = () => {
        setRollNo((r) => {
            return r.toUpperCase()
        })
        let rn = rollNo.toUpperCase()
        const pattern = /^[0-9]{3}[A-Z]{2}[0-9]{4}$/;
        if (pattern.test(rn))
            return true
        else
            return false
    }

    const handleSubmit=()=>{
        if(!validate())
        retutn
        navigate('/hostelList')
    }

  return (
    <div>
        <div className="signupSection xs:flex-row flex-col">
            <div className="info">
                <h2 className='text-4xl'>Hostel Management System</h2>
                <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
                <p className='xs:mt-32 mt-6'>Go Stay with your Friends in this Session</p>
            </div>
            <form  className="signupForm flex-col" name="signupform">
                <h2>Sign Up</h2>
                <ul className="noBullet">
                <li>
                    <label></label>
                    <input type="text" className="inputFields login" id="roll-no" onChange={(e)=>setRollNo(e.target.value)} name="roll-no" placeholder="Roll No" value={rollNo}  required/>
                </li>
                <li id="center-btn">
                    <input type="submit" id="join-btn" className='join_btn' name="join" alt="Join" onClick={handleSubmit} value="Join"/>
                </li>
                </ul>
            </form>
        </div>
    </div>
  )
}

export default Login