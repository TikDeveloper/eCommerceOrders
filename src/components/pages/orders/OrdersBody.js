import React, {useState,useCallback} from 'react';
import DataTable from './DataTable';
import DataTablePagination from './DataTablePagination';
import './Orders.css';



function OrdersBody( {rows} ) {
  

    // Search //
    const handleOnChangeSearch = (e) =>{
        const searchVal = e.target.value
        const filteredRows = rows.filter(i => {
            return  Object.values(i).toString().toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
        })
        setNewData(filteredRows);
        
    }



    const [showedData, setShowedData] = useState([])
    const [newData, setNewData] = useState(rows)

    const dataParams = useCallback(({rowsPerPage = 5, pageNum = 1}) => {
        setShowedData(newData.slice((pageNum-1)*rowsPerPage,pageNum*rowsPerPage))
    },[newData])
    



    // Custom Select //
    const [openSub,setOpenSub] = useState(false)
    const [valueSub,setValueSub] = useState('Status All')
    const handleSubmenu = (e) =>{
        setOpenSub(!openSub)
    }
    const handleSubmenuVal = (e) =>{
        setValueSub(`Status ${e.target.innerText}`)
    }
    
    
    return (
        <div className='orders_body'>

            <ul className='order_body_options'>
                <li className='order_body_options_left'>  
                    <div className='search_div'>
                        <input 
                            type='text' 
                            className='order_body_option search_inp' 
                            placeholder='Search' 
                            onChange={handleOnChangeSearch}
                        />
                    </div>
                    <button className='order_body_option statusAll_btn' onClick={handleSubmenu}> 
                        {valueSub}
                        {openSub && 
                        (
                            <ul className='submenu2'>
                                <li onClick={handleSubmenuVal}>All</li>
                                <li onClick={handleSubmenuVal}>Delivered</li>
                                <li onClick={handleSubmenuVal}>Processing</li>
                            </ul> 
                        )
                        }
                        
                    </button>
                    <button className='order_body_option payment_btn'> Payment </button>
                    <button className='order_body_option more_btn'> More </button>
                </li>
                <li className='order_body_options_right'>
                    <button type='text' className='order_body_option sort_btn'> Sort By </button>
                </li>
            </ul>


            <DataTable rows={showedData} />
            
            <DataTablePagination  dataParams={dataParams} data={newData}/>
            
            
        </div>
    )
}

export default OrdersBody;
