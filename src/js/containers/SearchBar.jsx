import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

@connect(null)
export default class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({
      term: e.target.value,
    })
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.dispatch(fetchWeather(this.state.term));
    this.setState({
      term: ''
    })

  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} class="input-group">
        <input type="text" class="form-control" value={this.state.term}
        placeholder="Get a five-day forecast in your favorite cities, only in US"
        onChange={this.onInputChange.bind(this)}/>
        <span class="input-group-btn">
        <button class="btn btn-secondary">Submit</button></span>
      </form>
    )
  }
}
