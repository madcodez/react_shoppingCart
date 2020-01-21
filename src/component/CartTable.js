import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import { deleteFromCart, quantityDecrementChange, quantityIncrementChange } from '../actions/cartAction'
import { toggleInCart } from '../actions/productAction'




const CartTable = ({ cart, dispatch }) => {

    const [quantity, setQuantity] = React.useState(1);
    const handleDeleteFromCart = (product) => {
        dispatch(toggleInCart(product))
        dispatch(deleteFromCart(product))
    }


    const onDecrementQuantity = (product) => {
        //  console.log(quantity)
        if (quantity > 0) {
            setQuantity(quantity - 1);

            dispatch(quantityDecrementChange(product))
        }

    }
    const onIncrementQuantity = (product) => {

        if (quantity > 0) {
            setQuantity(quantity + 1);

            dispatch(quantityIncrementChange(product))
        }

    }

    return (
        <div className="" style={{ width: "70%" }}>
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
                        {cart.cartProducts && cart.cartProducts.map(product => (
                            <TableRow key={product.name}>
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell   >
                                    <div style={{ display: "flex" }}>

                                        <Icon type="button" onClick={() => onDecrementQuantity(product)}>remove_circle</Icon>

                                        <TextField id="standard-basic" value={product.quantity} />

                                        <Icon type="button" onClick={() => onIncrementQuantity(product)}>add_circle</Icon>
                                    </div>
                                </TableCell>

                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell align="right">{product.price * product.quantity}</TableCell>
                                <TableCell align="left"><IconButton onClick={() => handleDeleteFromCart(product)}><DeleteIcon className="" /></IconButton></TableCell>

                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="left" colSpan={1}>{cart.total}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
            { /*cart.products.map(c => <Cart cart ={c} />)*/}
        </div>
    )




}

export default connect()(CartTable)
