import React, { useState } from 'react';
import './Analytics.css';


function AnalyticsItem() {
    const [open,setOpen] = useState(false)



    return (
        <li>
            <div className='menu_item' onClick={(e)=>{setOpen(!open)}}>
                <div className='menu_item_icon analytics_icon'/>
                <div className='menu_item_name'>
                    Analytics
                </div>
                <div className={open ? `bottom_icon` : `right_icon`}/>
            </div>
            {
                (open && 
                    <div className='sub_menu'>
                        
                    </div>
                )
            }
        </li>
    )
}

export default AnalyticsItem;
