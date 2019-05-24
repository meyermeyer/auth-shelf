import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShelfItem extends Component {
    render(){
        console.log(this.props.reduxState)
        return(
            <ul>
                {this.props.reduxState.storeItemReducer && this.props.reduxState.storeItemReducer.map((item, i) => {
                    return (
                        <li key={i}>
                            {item.description}
                            <img src={item.image_url}/>
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