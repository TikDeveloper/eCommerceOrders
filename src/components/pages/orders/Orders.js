import React from 'react'
import OrdersBody from './OrdersBody'
import OrdersHeader from './OrdersHeader'

const rows = [
    {id:1,date:'24-11-20',customer:'Jack Wilimas',total:90,payment:true,items:999},
    {id:2,date:'7-11-20',customer:'Bob Adams',total:40,payment:false,items:999},
    {id:3,date:'7-11-20',customer:'Bob Adams',total:40,payment:false,items:999},
    {id:4,date:'7-11-20',customer:'Bob Adams',total:40,payment:true,items:999},
    {id:5,date:'7-11-20',customer:'Bob Adams',total:40,payment:false,items:999},
    {id:6,date:'7-11-20',customer:'Bob Adams',total:40,payment:true,items:999},
    {id:7,date:'7-11-20',customer:'Bob Adams',total:40,payment:false,items:999},
    {id:8,date:'7-11-20',customer:'Bob Adams',total:40,payment:true,items:999},
    {id:9,date:'7-11-20',customer:'Bob Adams',total:40,payment:false,items:4},
    {id:10,date:'7-11-20',customer:'Bob Adams',total:40,payment:false,items:5},
    {id:11,date:'24-11-20',customer:'Jack Wilimas',total:90,payment:true,items:6},
    {id:12,date:'7-11-20',customer:'Bob Adams',total:40,payment:false,items:4},
    {id:13,date:'7-11-20',customer:'Bob Adams',total:40,payment:false,items:4},
    {id:14,date:'7-11-20',customer:'Bob Adams',total:40,payment:true,items:4},
    {id:15,date:'7-11-20',customer:'Bob Adams',total:40,payment:false,items:4},
    {id:16,date:'7-11-20',customer:'Bob Adams',total:40,payment:true,items:4},
    {id:17,date:'7-11-20',customer:'Bob Adams',total:40,payment:false,items:4},
    {id:18,date:'7-11-20',customer:'Bob Adams',total:40,payment:true,items:4},
    {id:19,date:'7-11-20',customer:'Bob Adams',total:40,payment:false,items:4},
    {id:20,date:'7-11-20',customer:'Bob Adams',total:40,payment:false,items:4},
]

function Orders() {
    return (
        <div className='orders'>
            <OrdersHeader/>
            <OrdersBody rows={rows} />
        </div>
    )
}

export default Orders
