import React, { useState } from 'react';
import './Settings.css';


function SettingsItem() {
    const [open,setOpen] = useState(false)



    return (
        <div className='settings'>
            <div className='menu_item' onClick={(e)=>{setOpen(!open)}}>
                <div className='menu_item_icon settings_icon'/>
                <div className='menu_item_name'>
                    Settings
                </div>
                <div className={open ? `bottom_icon` : `right_icon`}/>
            </div>
            {
                (open && 
                    <div className='sub_menu'>
                        
                    </div>
                )
            }
        </div>
    )
}

export default SettingsItem;
