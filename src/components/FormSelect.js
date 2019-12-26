import React, { Component } from 'react';

class FormSelect extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      value: 'mobx'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(e){
    console.log(e)
    this.setState({
      value: e.target.value
    })
  }
  
  handleSubmit(e){
    alert('You picked ' + this.state.value);
    e.preventDefault();
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            pick one library
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="mobx">Mobx</option>
            </select>
          </label>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default FormSelect;