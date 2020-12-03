import React, { useState } from 'react';
import './Products.css';


import { NavLink } from 'react-router-dom';

function ProductsItem() {
    const [open,setOpen] = useState(false)



    return (
        <li>
            <div className='menu_item' onClick={(e)=>{setOpen(!open)}}>
                <div className='menu_item_icon products_icon'/>
                <div className='menu_item_name'>
                    Products
                </div>
                <div className={open ? `bottom_icon` : `right_icon`}/>
            </div>
            {
                (open && 
                    <div className='sub_menu'>
                        <NavLink to='/products' activeClassName='manu_item_active' className='sub_menu_item'>
                            Products
                        </NavLink>
                        <NavLink to='/inventory' activeClassName='manu_item_active' className='sub_menu_item'>
                                Inventory
                        </NavLink>
                        <NavLink to='/collection' activeClassName='manu_item_active' className='sub_menu_item'>
                            Collection
                        </NavLink>
                        <NavLink to='/gift-cards' activeClassName='manu_item_active' className='sub_menu_item'>
                                Gift Cards
                        </NavLink>
                    </div>
                )
            }
        </li>
    )
}

export default ProductsItem;
