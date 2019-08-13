import {PRODUCT_ACTIONS} from '../actions'


const initialState = [{
    id : 1,
    name : "Coffee Mugs yy",
    price : 100,
    image : "coffee1.png",
    quantity : 1
},
{
    id : 2,
    name : "Coffee Mugs xx",
    price :250,
    image : "coffee2.png",
    quantity : 1
},
{
    id : 3,
    name : "Coffee Mugs ww",
    price : 168,
    image : "coffee3.png",
    quantity : 1
},{  id : 4,name : "Coffee Mugs zz", price : 399 , quantity : 1 , image : "coffee4.png"},{  id : 5,name : "Coffee Mugs For Travel", price : 599 , quantity : 1 , image : "coffee5.png"}]



export default function products(state = initialState, action) {
    switch (action.type) {
      case PRODUCT_ACTIONS.GET_PRODUCTS:
        return state

        case PRODUCT_ACTIONS.GET_PRODUCTS_SORTED:{
             const products = [...state];
            const sortBy = action.payload
           // console.log(sortBy)
            products.sort(compare[sortBy])
            return products
        }
       
      default:
        return state
    }
  }


  const compare = {
    lowestprice: (a, b) => {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    },
    highestprice: (a, b) => {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    }
  };