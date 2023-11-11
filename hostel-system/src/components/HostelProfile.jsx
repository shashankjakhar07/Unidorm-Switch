import React, { useState,useEffect } from 'react'
import QueryBtn from './QueryBtn'
import '../table.css'
import { useLocation } from 'react-router';
import { data } from '../assets/options'
import { CirclesWithBar } from 'react-loader-spinner';

function HostelProfile({records,name}) {

    return (
            <div className="container-table mt-10 ">
                <ul className="responsive-table gap-5">
                    <li className="table-header font-semibold">
                        <div className="col col-1">Room No</div>
                        <div className="col col-2">Name</div>
                        <div className="col col-3">Hall Name</div>
                        <div className="col col-4">Preferred Hall</div>
                        <div className="col col-5">Mobile No</div>
                        <div className="col col-6">Roll No</div>
                    </li>
                    {
                        records.map((item,index)=>{
                            return (
                                <li className="table-rowi " key={index}>
                                    <div className="col col-1" data-label="Medicine Name">{item.roomNo}</div>
                                    <div className="col col-2" data-label="Quantity">{item.name}</div>
                                    <div className="col col-3" data-label="Price">{name}</div>
                                    <div className="col col-4" data-label="Vendor Name">
                                        {
                                            item.preferredHall.map((hall, index) => {
                                                if (index !== item.preferredHall.length - 1)
                                                    return hall.value + ", "
                                                return hall.value
                                            })
                                        }
                                    </div>
                                    <div className="col col-5" data-label="Vendor Name">{item.number}</div>
                                    <div className="col col-6" data-label="Vendor Number">{item.rollNo}</div>
                                </li>
                            )
                        })
                    }
                    {/* <li className="table-rowi">
                        <div className="col col-1" data-label="Medicine Name">A-318</div>
                        <div className="col col-2" data-label="Quantity">Mahendra Singh</div>
                        <div className="col col-3" data-label="Price">SD Hall</div>
                        <div className="col col-5" data-label="Vendor Name">HB Hall, GDB Hall</div>
                        <div className="col col-5" data-label="Vendor Name">9079666807</div>
                        <div className="col col-6" data-label="Vendor Number">120CS0960</div>
                    </li> */}
                    
                </ul>
            </div>
    )
}

export default HostelProfile