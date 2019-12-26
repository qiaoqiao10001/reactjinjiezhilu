import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      password:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    console.log(e)
    const target = e.target
    this.setState({
      [target.name]: target.value
    })
  }
  handleSubmit(e){
    console.log('登录成功')
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            用户名：<input type="text" name='name' onChange={this.handleChange} id='name' value={this.state.name}/>
          </label>
          <label htmlFor="pwd">
            <input type="password" id='pwd' name="password" value={this.state.password} onChange={this.handleChange}/>
          </label>
          <input type="submit" value='登录'/>
        </form>
      </div>
    );
  }
}

export default Form;