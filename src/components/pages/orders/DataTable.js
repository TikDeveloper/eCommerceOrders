import React from 'react';
import { Table,TableHead,TableBody,TableRow,TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
    tableTh:{
        fontWeight:'600',
        fontSize:'14px',
        lineHeight:'22px',
        fontFamily: 'ProximaNova',
        color:'#262626'
    }, 
    tableTd:{
        fontWeight:'400',
        fontSize:'14px',
        lineHeight:'22px',
        fontFamily: 'ProximaNova',
        color:'#595959'
    },
    tableTdColored:{
        color:'#4649FF'
    },
    tableThead:{
        background:'#FAFAFA'
    },

   
}))



function DataTable({rows}) {

    const classes = useStyle()


    return (
        <Table size="medium" aria-label="a dense table">
            <TableHead className={classes.tableThead}>
                <TableRow>
                    <TableCell className={classes.tableTh}> Order </TableCell>
                    <TableCell className={classes.tableTh}> Date </TableCell>
                    <TableCell className={classes.tableTh}> Customer </TableCell>
                    <TableCell className={classes.tableTh}> Total </TableCell>
                    <TableCell className={classes.tableTh}> Payment </TableCell>
                    <TableCell className={classes.tableTh}> Items </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell  className={`${classes.tableTdColored} ${classes.tableTd}`}>
                            {`#${row.id}`}
                        </TableCell>
                        <TableCell  className={classes.tableTd}> 
                            {row.date} 
                        </TableCell>
                        <TableCell className={`${classes.tableTdColored} ${classes.tableTd}`}> 
                            {row.customer} 
                        </TableCell>
                        <TableCell className={classes.tableTd}> 
                            {`$${row.total}`} 
                        </TableCell>
                        <TableCell className={classes.tableTd} style={{display:'flex'}}> 
                            {
                                row.payment 
                                ? <div className='payment payment_active'>Paid</div> 
                                : <div className='payment payment_inProgress'>In Progress</div>
                            }  
                        </TableCell>
                        <TableCell className={`${classes.tableTdColored} ${classes.tableTd}`}> 
                            {`${row.items} item`}  
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default DataTable;
