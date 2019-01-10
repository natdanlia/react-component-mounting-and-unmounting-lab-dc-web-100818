import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleonLocationChange = event => {
    // event.persist()
    // console.log(event)
    this.setState({

      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state)
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            value={this.state.name}
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleonLocationChange(event)}
            id="location"
            value={this.state.location}
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (restaurant) =>  dispatch(addRestaurant(restaurant))
  };
};



//connect this component by wrapping RestaurantInput below

// this could be righr answer or gives us the same result as the bottom
// export default connect(null, {addRestaurant})(RestaurantInput)


// or


export default connect(null, mapDispatchToProps)(RestaurantInput)
