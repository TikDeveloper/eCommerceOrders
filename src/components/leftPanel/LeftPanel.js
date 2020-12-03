import React from 'react';
import './LeftPanel.css';
import DashboardItem from './dashboard/Dashboard';
import AnalyticsItem from './analytics/Analytics';
import OrdersItem from './orders/Orders';
import ProductsItem from './products/Products';
import CustomersItem from './customers/Customers';
import DiscountsItem from './discounts/Discounts';
import Apps from './apps/Apps';
import Settings from './settingss/Settings';


  



function LeftPanel() {
    


    return (
        <nav className='leftPanel'>
            <ul>
                <DashboardItem/>
                <AnalyticsItem/>
                <OrdersItem/>
                <ProductsItem/>
                <CustomersItem/>
                <DiscountsItem/>
                <Apps/>
            </ul>
            <Settings/>
        </nav>
    )
}



export default LeftPanel;
