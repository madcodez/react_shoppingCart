import React, { Component } from 'react'
import Product from '../component/Product'
import Sort from '../component/Sort'
import { connect } from 'react-redux'
 class Products extends Component {
    constructor(props){
        super(props)
    

    }

 

    render() {
       
       const {products} = this.props
       console.log(products)
        return (
            <div>
                            
                        <div  style = {divStyle}>
                        <div style={{width: "100%",marginBottom: "10px"}}>
                            <Sort style={{ }}/>
                        </div>
                        {products.map(product => <Product key={product.id}   product ={product}/>)} 
                        </div>

            </div>
          
        )
    }
}
const mapStateToProps = (state) => ({
    products : state.products
 })
 const divStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: "85%",
    minHeight: '600px'
  };
 
export default connect(mapStateToProps)(Products)
