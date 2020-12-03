import React, { useState } from 'react';
import './Orders.css';

import {NavLink} from "react-router-dom";

function OrdersItem() {
    const [open,setOpen] = useState(false)



    return (
        <li>
            <div className='menu_item' onClick={(e)=>{setOpen(!open)}}>
                <div className='menu_item_icon orders_icon'/>
                <div className='menu_item_name'>
                    Orders
                </div>
                <div className={open ? `bottom_icon` : `right_icon`}/>
            </div>
            {
                (open && 
                    <div className='sub_menu'>
                        <NavLink to='/orders' activeClassName='manu_item_active' className='sub_menu_item'>
                            
                                Orders
                        </NavLink>
                        <NavLink to='/abandoned-checkouts' activeClassName='manu_item_active' className='sub_menu_item'>
                                Abandoned Checkouts
                        </NavLink>
                    </div>
                )
            }
        </li>
    )
}

export default OrdersItem;
