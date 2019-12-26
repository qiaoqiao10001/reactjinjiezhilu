import React, { Component } from 'react';

class FormRadio extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      react: false,
      redux: false,
      mobx: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(e){
    const target = e.target
    this.setState({
      [target.name]: target.checked
    })
  }
  handleSubmit(e){
    e.preventDefault()
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            react:<input type="checkbox" name='react' value='react' checked={this.state.react} onChange={this.handleChange}/>
          </label>
          <label>
          redux: <input type="checkbox" name='redux' value='redux' checked={this.state.redux} onChange={this.handleChange} />
          </label>
          <label>
            mobx: <input type="checkbox" name='mobx' value='mobx' checked={this.state.mobx} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default FormRadio;