import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { openProductModalAction } from '../actions/productAction'


import store from '../reducer'


const useStyles = makeStyles({

  card: {

    // padding:"8px",
    // border: "1px solid black",
    // margin: "10px",
    // width : "250px", 

    width: "250px",
    position: "relative",
    textAlign: "center",
    boxSizing: "border-box",

    margin: "0 20px 30px 0",

    border: "1px solid transparent",
    cursor: "pointer"

  },
  media: {
    height: "180px", width: "100%", display: "block"
  },
  title: {
    fontSize: 14,
  },
  button: {
    margin: "auto"

  },
});



const Product = ({ product, dispatch, cartProducts }) => {
  const [inCart, setInCart] = React.useState(false)
  const handleProductModal = () => {

    dispatch(openProductModalAction(product))

  }



  const classes = useStyles();

  return (

    <div >
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require(`../static/product/${product.image}`)}

        />


        <CardContent>
          <Typography className={classes.title} color="textSecondary" variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {product.price}
          </Typography>
        </CardContent>
        <CardActions>{
          !product.inCart ? <Button color="primary" className={classes.button} onClick={handleProductModal}>ADD TO CART</Button>
            : <Typography>IN CART</Typography>
        }

        </CardActions>
      </Card>



    </div>
  )
}

Product.propTypes = {

}

export default connect()(Product)
