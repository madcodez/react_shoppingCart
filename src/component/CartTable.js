import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import {deleteFromCart} from '../actions/cartAction'

 const CartTable = ({cart ,dispatch}) => {
    console.log(cart)
            const handleDeleteFromCart = (product)=>{
               
                dispatch(deleteFromCart(product))
            }

    
  
   
    
            return (
                <div className="" style = {{ width : "70%"}}>
                     <Paper>
                      <Table >
                            <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                              
                                <TableCell align="right">Price/Q</TableCell>
                                <TableCell align="right">Total Price</TableCell>
                                <TableCell align="right"></TableCell>
                               
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {cart.cartProducts && cart.cartProducts.map(row => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.cartQuantity}</TableCell>
                                
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.cartQuantity * row.price}</TableCell>
                                <TableCell align="left"><IconButton onClick={()=>handleDeleteFromCart(row)}><DeleteIcon className="" /></IconButton></TableCell>
                             
                                </TableRow>
                            ))}
                             <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>Subtotal</TableCell>
                                <TableCell align="left"colSpan={1}>{cart.total}</TableCell>
                            </TableRow>
                            </TableBody>
                        </Table>
                      </Paper>
                     { /*cart.products.map(c => <Cart cart ={c} />)*/}
                </div>
            )

        
       
   
}

export default connect()(CartTable)
