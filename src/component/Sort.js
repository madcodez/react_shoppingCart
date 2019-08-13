import React,{useState}from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {  makeStyles } from '@material-ui/styles';
import {PRODUCT_ACTIONS} from '../actions'
import { connect } from 'react-redux';


const sortBy = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' }
];


const Sort = props => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const {dispatch} = props


  const handleChange = (value) => {
  //  console.log(dispatch)
    setValue(value)
    dispatch(PRODUCT_ACTIONS.getProductsSorted(value))

  }

   return (
    <FormControl className={classes.formControl}>
    <InputLabel htmlFor="sortby-required">Sort By</InputLabel>
    <Select 
           
      onChange={e => handleChange(e.target.value)}
      name="sortby"
      value={value}
  
    >
      {sortBy.map(s => <MenuItem value={s.value}>
        <em>{s.label}</em>
      </MenuItem>)}
     
     
    </Select>
    </FormControl>
    )
} ;
  const useStyles =  makeStyles({
                                  select :{  backgroundColor: "#fff",
                                            outline: "none",
                                            border: "1px solid #ececec",
                                            borderRadius: "2px",
                                            marginLeft: "10px",
                                            width: "auto",
                                            height: "35px",
                                            cursor: "pointer"},
                                  formControl: {
                                            minWidth: 120,
                                            }        
                                          })
  export default connect()(Sort)