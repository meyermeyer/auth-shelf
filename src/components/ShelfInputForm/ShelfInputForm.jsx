import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShelfInputForm extends Component {
   
    state = {
        description: '',
        image_url: ''
    }


    handleDescChange = (event) => {
     console.log('in handleDescChange', event.target.value);
     this.setState({
         ...this.state,
         description: event.target.value
     })
    }
    
    handleImgChange = (event) => {
     console.log('in handleImgChange', event.target.value);
     this.setState({
         ...this.state,
         image_url: event.target.value
     })
    }
    
    handleClick = () => {
        console.log('in handleClick', this.state.description, this.state.image_url);
       this.props.dispatch({ type: 'SEND_ITEM', payload: this.state})
    }
    
    
    render() {
        return (
        <div>
          <input placeholder="Description" onChange={this.handleDescChange}/>
                <input placeholder="Item Image URL" onChange={this.handleImgChange}/>
          <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(ShelfInputForm)