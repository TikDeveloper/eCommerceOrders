import React, {useEffect, useState} from 'react';
import {Pagination} from '@material-ui/lab';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyle = makeStyles(()=>({
    formControll:{
        width: '110px',
        padding: '1px 12px',
        background: '#FFFFFF',
        border: '1px solid #D9D9D9',
        boxSizing: 'border-box',
        borderRadius: '4px',
    }
}))





 
    



function DataTablePagination( {dataParams, data}) {
    const val_5 = 5;
    const val_10 = 10;
    const classes = useStyle();


    const [rowsPerPage,setRowsPerPage] = useState(5)
    const [pageCount,setPageCount] = useState(Math.ceil(data.length/rowsPerPage))

    useEffect(()=>{
        dataParams({rowsPerPage})
        setPageCount(Math.ceil(data.length/rowsPerPage))
    },[data,dataParams,rowsPerPage])


    const handlePageChange = (e,pageNum) => {
        dataParams({rowsPerPage,pageNum})
    }
    const handlePerPageChange = (e) => {
        setRowsPerPage(e.target.value)
        setPageCount(Math.ceil(data.length/e.target.value))
    }
    
    





    return (
        <div className='order_body_pagination'>
            <div style={{marginRight:'8px'}}>
                <Pagination 
                    count={pageCount} 
                    variant="outlined" 
                    shape="rounded" 
                    onChange={handlePageChange}
                    
                />
            </div>
            <FormControl className={classes.formControll}>
                <Select
                    id="demo-simple-select"
                    value={rowsPerPage}
                    onChange={handlePerPageChange}
                >
                    <MenuItem value={val_5}>5/page</MenuItem>
                    <MenuItem value={val_10}>10/page</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default DataTablePagination
