import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem'
import ShelfInputForm from '../ShelfInputForm/ShelfInputForm.jsx';



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
            <>
                <ShelfInputForm />
                <ShelfItem />
            </>
        )
    }
}


export default connect()(ShelfList);