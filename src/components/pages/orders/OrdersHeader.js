import React from 'react';
import './Orders.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyle = makeStyles(()=>({
   
    createOrderBtn:{
        background: '#4649FF',
        borderRadius: '4px',
        color:'#FFFFFF !important',
        padding:'5px 16px',
        marginLeft: '16px',
        '&:hover': {
            backgroundColor: '#4649FF',
        }
    },
    expBtn:{
        padding:'5px 16px',
        background: '#FFFFFF',
        border: '1px dashed #D9D9D9',
        boxSizing: 'border-box',
        borderRadius: '4px',
        color:'#595959',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#FFFFFF',
        }
    }
    
    
    
}))

function OrdersHeader() {
    const classes = useStyle()
    
    return (
        
        <div className='orders_header'>
            <h1 className='page_title'>Orders</h1>
            <div className='orders_header_options'> 
                <Button className={classes.expBtn}>
                    <div className='exp_logo'/>
                    Export
                </Button>
                <Button className={classes.createOrderBtn}>
                    Create Order
                </Button>
                
            </div>
        </div>
       
    )
}

export default OrdersHeader;