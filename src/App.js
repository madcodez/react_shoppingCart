import React from 'react';
import Products from './container/Products'
import Cart from './container/Cart'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopBar from './container/TopBar'
import { PRODUCT_ACTIONS, CART_ACTIONS, AUTH_ACTIONS } from './actions'
import { connect } from 'react-redux'
import store from './reducer'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)





  }

  //PRODUCTS_ACTIONS.getProducts()
  componentDidMount() {
    store.dispatch(PRODUCT_ACTIONS.getProducts())
    store.dispatch(AUTH_ACTIONS.loadUser())
  }



  render() {



    // const {products,cart} = this.state

    return (
      <React.Fragment>




        <Router>
          <TopBar />
          <div className="App" >
            <Switch>
              <Route exact path="/" component={Products} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </div>
        </Router>



      </React.Fragment>
    );
  }


}

export default connect()(App);
