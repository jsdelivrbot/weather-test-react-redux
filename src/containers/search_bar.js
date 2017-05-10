import React, {Component} from 'react';
import {connect} from 'react-redux'; //libary connect container and redux
import {bindActionCreators} from "redux"; //libary connect container and action creator
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state={term: ''}

    this.onInputChange = this.onInputChange.bind(this); //callback function need to bind this 1111111
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value}); // bind the "this" in same context => search-bar
  // this will have myster context if without bind(this) above
  }

  onFormSubmit(event){
    event.preventDefault(); //tell the browser dont submit the form to server
    // need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});

  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder="get the five day forecast in your favourite cities"
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather:fetchWeather},dispatch);
                  //this.props.fetchWeather
}

export default connect(null, mapDispatchToProps)(SearchBar);
