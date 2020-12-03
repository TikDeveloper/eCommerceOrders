import React, { useState } from 'react';
import './Discounts.css';


function DiscountsItem() {
    const [open,setOpen] = useState(false)



    return (
        <li>
            <div className='menu_item' onClick={(e)=>{setOpen(!open)}}>
                <div className='menu_item_icon discounts_icon'/>
                <div className='menu_item_name'>
                    Discounts
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

export default DiscountsItem;
