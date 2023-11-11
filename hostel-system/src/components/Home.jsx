import React, { useState, useEffect } from 'react'
import Login from './Login'
import HostelList from './HostelList'
import HostelProfile from './HostelProfile'
import Query from './Query'
import HostelProfileShort from './HostelProfileShort'
import HostelProfileDecide from './HostelProfileDecide'
import Hostel from './Hostel'
import svg from '/assets/nitr_logo.svg'
import { CirclesWithBar } from 'react-loader-spinner'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {

  const [loader, setLoader] = useState(true)
  const [rollNo, setRollNo] = useState('')

  useEffect(() => {
    // var it=setTimeout(()=>{
    //   setLoader(false)
    // },2000)
    // return ()=>{
    //   clearInterval(it)
    // }
    setLoader(false)
  }, [])



  if (loader)
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
    // <div>
    <div>
      <img src={'https://github.com/harsh-0712/Hostel-Management/assets/116945589/0a8f5eb1-f9d3-4396-bfbd-8357633e1366'} className='svg mb-[100px]' alt="Your SVG" />
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/'
              element={
                <Login rollNo={rollNo} setRollNo={setRollNo}
                />
              }
            />
            <Route path='/hostelList'
              element={
                <HostelList
                />
              }
            />
            <Route path='/hostelProfile'
              element={
                <HostelProfileDecide
                />
              }
            />
            <Route path='/query'
              element={
                <Query rollNo={rollNo} setRollNo={setRollNo}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
    // {/* </div> */}
  )
}

export default Home