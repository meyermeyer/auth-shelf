import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShelfItem extends Component {
    handleClick = (event) =>{
        this.props.dispatch({type: 'DELETE_ITEM', payload: {user_id: event.target.value.user_id, id: event.target.id}})
        console.log('in handleClick', event.target.value);
        
    }
    render(){
        console.log(this.props.reduxState)
        return(
            <ul>
                {this.props.reduxState.storeItemReducer && this.props.reduxState.storeItemReducer.map((item, i) => {
                    return (
                        <li key={i}>
                            {item.description}
                            <img src={item.image_url}/>
                            <button value={item.id} onClick={this.handleClick}>Delete</button>
                        </li>
                    )
                })}
            </ul>
            // <p>something</p>
            
            
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(ShelfItem)