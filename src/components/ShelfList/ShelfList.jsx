import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem'



class ShelfList extends Component {
    componentDidMount(){
        this.props.dispatch({type:'FETCH_ITEMS'})
    }
    render(){
        return(
            // {this.props.reduxState.storeItemReducer.map((item)=>{
            //     return(

            //     )
            // })}
                <ShelfItem />
            
        )
    }
}


export default connect()(ShelfList);