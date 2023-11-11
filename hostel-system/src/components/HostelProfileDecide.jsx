import React, { useEffect, useState } from 'react'
import QueryBtn from './QueryBtn'
import { useLocation } from 'react-router'
import { data } from '../assets/options.js'
import HostelProfileShort from './HostelProfileShort'
import HostelProfile from './HostelProfile'
import { getRecords } from '../helper/helper.js'
import { CirclesWithBar } from 'react-loader-spinner'
import Hall from './Hall'

function HostelProfileDecide() {

    const location = useLocation()
    const [flag,setFlag]=useState(true)
    const [loader2,setLoader2]=useState(true)
    const [records, setRecords] = useState([])
    let { name } = location.state
    let nameShort = name
    for (let i = 0; i < data.length; ++i) {
        if (data[i].short === name) {
            name = data[i].long
            break
        }
    }
    
    

    

    const getData=async()=>{
        const r=await getRecords({hallName:nameShort})
        setRecords(r.reverse())
        setLoader2(false)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getData()
        if(window.innerWidth<=550)
        setFlag(false)

    }, [])


    if (loader2)
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
        <div className='background'>
            <h1 className=' text-gray-50 header h11 xs:text-[40px] text-[25px]'>{name}</h1>
            {
                flag ? <HostelProfile records={records} name={nameShort} /> : <HostelProfileShort records={records} name={nameShort} />
            }
            <Hall/>
            <QueryBtn />
        </div>

    )
}

export default HostelProfileDecide