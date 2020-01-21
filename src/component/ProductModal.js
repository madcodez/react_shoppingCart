import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeProductModalAction, toggleInCart } from '../actions/productAction'
import { addToCart } from '../actions/cartAction'


import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';

const styles = theme => ({
    root: {
        margin: 0,

        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        width: "300px",
        padding: theme.spacing(5),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),

    },
}))(MuiDialogActions);

const useStyles = makeStyles({
    card: {

        maxWidth: "500px"
    },
    media: {
        height: "300px", width: "300px", display: "block"
    },
    buttonLeft: {
        float: "left"
    }
});

const ProductModal = ({ open, product, dispatch }) => {

    const handleAddToCart = () => {

        dispatch(addToCart(product))
        dispatch(toggleInCart(product))
        dispatch(closeProductModalAction())

    }
    const classes = useStyles();
    const handleClose = () => {
        dispatch(closeProductModalAction())
    };
    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Item to Cart
             </DialogTitle>

                <Card className={classes.card}>


                    <DialogContent>
                        <CardMedia
                            className={classes.media}
                            image={require(`../static/product/${product.image}`)}

                        />

                        <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Typography variant="h4" color="textSecondary" component="h1">
                            Price : ${product.price}
                        </Typography>

                    </DialogContent>



                </Card>

                <DialogActions>
                    <Button color="secondary" onClick={handleClose}>
                        Back
                   </Button>
                    <Button autoFocus color="primary" onClick={handleAddToCart}>

                        Add To Cart

                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        //<div>Model </div>
    )


}
// const mapStateToProps = (props) => {
//     console.log(props)
// }

export default connect()(ProductModal)
