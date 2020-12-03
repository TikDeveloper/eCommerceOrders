import React, { useState } from 'react';
import './Apps.css';


function AppsItem() {
    const [open,setOpen] = useState(false)



    return (
        <li>
            <div className='menu_item' onClick={(e)=>{setOpen(!open)}}>
                <div className='menu_item_icon apps_icon'/>
                <div className='menu_item_name'>
                    Apps
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

export default AppsItem;
