import React, { useState } from 'react';
import './Customers.css';


function CustomersItem() {
    const [open,setOpen] = useState(false)



    return (
        <li>
            <div className='menu_item' onClick={(e)=>{setOpen(!open)}}>
                <div className='menu_item_icon customers_icon'/>
                <div className='menu_item_name'>
                    Customers
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

export default CustomersItem;
