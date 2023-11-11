import React, { useEffect } from 'react'
import Hostel from './Hostel'
import QueryBtn from './QueryBtn'


function HostelList() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <h1 className='bg-gray-600 xs:text-[50px] text-[20px] h11 flex-col p-2 rounded-full'>Choose Hall in which you want to Stay</h1>
            <div className='flex flex-col gap-8 mt-[20px]'>
                <div className='flex xs:flex-row flex-col justify-evenly md:gap-10 gap-4  w-[80vw]'>
                    <Hostel image='./hostel_images/SDH.png' name={'SD Hall'} rooms={1014} />
                    <Hostel image='./hostel_images/VSH.png' name={'VS Hall'} rooms={1024} />
                    <Hostel image='./hostel_images/HBH.png' name={'HB Hall'} rooms={391} />
                </div>
                <div className='flex xs:flex-row flex-col justify-evenly md:gap-10 gap-4  w-[80vw]'>
                    <Hostel image='./hostel_images/GDB.png' name={'GDB Hall'} rooms={322} />
                    <Hostel image='./hostel_images/DBA.png' name={'DBA Hall'} rooms={302} />
                    <Hostel image='./hostel_images/MSH.png' name={'MSS Hall'} rooms={405} />
                </div>
                <div className='flex xs:flex-row flex-col justify-evenly md:gap-10 gap-4  w-[80vw]'>
                    <Hostel image='./hostel_images/MVH.png' name={'MV Hall'} rooms={255} />
                    <Hostel image='./hostel_images/KMS.png' name={'KMS Hall'} rooms={300} />
                    <Hostel image='./hostel_images/CVR.png' name={'CVR Hall'} rooms={700} />
                </div>
                <div className='flex xs:flex-row flex-col justify-evenly md:gap-10 gap-4  w-[80vw]'>
                    <Hostel image='./hostel_images/SSB.png' name={'SSB Hall'} rooms={145} />
                </div>
            </div>
            <QueryBtn />
        </div>
    )
}

export default HostelList