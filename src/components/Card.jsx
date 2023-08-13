import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Card = (props) => {
    const item = props.item;
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"
    ];
    const date = new Date(props.item.available).getDate();
    const monthNo = new Date(props.item.available).getMonth();
    const month=monthNames[monthNo-1];
    const year = new Date(props.item.available).getFullYear();
    return (
        <div className='card'>
            <div className='imgArea'>
                <img src={item.img} alt="" />
            </div>
            <div className='info'>
                <div className='price'>
                    <p><span>${item.rent}</span>/month</p>
                    <FavoriteBorderIcon style={{ marginBottom: "0", cursor: "pointer" }} />
                </div>
                <div className='nameDate'>
                    <h2>{item.name}</h2>
                    <span>{month} {date}, {year}</span>
                </div>
                
                <p>{item.address}</p>
                
                <div className='features'>
                    <span>
                        <BedIcon style={{ height: "17px", width: "17px", color: "#5B9A8B" }} />
                        {item.bedroom} Beds
                    </span>
                    <span>
                        <ShowerIcon style={{ height: "17px", width: "17px", color: "#5B9A8B" }} />
                        {item.bathroom} Bathrooms
                    </span>
                    <span>
                        <DashboardIcon style={{ height: "17px", width: "17px", color: "#5B9A8B" }} />
                        {item.area}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card
