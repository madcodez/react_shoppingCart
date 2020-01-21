import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';




const StyledBadge = withStyles(theme => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const NavBar = ({ cart }) => {
    console.log(cart)
    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <Typography variant="title" style={{ color: "black" }}>
                        <Link to="/"> InfiniteShop</Link>
                    </Typography>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={cart.inCartProductCount} color="secondary">
                            <Link to="/cart">  <ShoppingCartIcon /> </Link>
                        </StyledBadge>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    )
}
export default connect()(NavBar);