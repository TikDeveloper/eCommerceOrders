import React from 'react';
import './Dashboard.css';

import {NavLink} from "react-router-dom";

function DashboardItem() {
    return (
        <li>
            <NavLink to='/dashboard' activeClassName='manu_item_active'  className='menu_item'>
                <div className='menu_item_icon dashboard_icon'/>
                <div className='menu_item_name'>
                    Dashboard
                </div>
            </NavLink>
        </li>
    )
}

export default DashboardItem;
