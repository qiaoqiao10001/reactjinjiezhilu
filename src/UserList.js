import React, { Component } from 'react';
import './style/user.css'
class UserList extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      newUser:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(e){
    const target = e.target
    
    this.setState({newUser: target.value})
  }
  // 通过props调用父组件的方法来增加用户
  handleClick(){
    if(this.state.newUser && this.state.newUser.length > 0)
      this.props.onAddUser(this.state.newUser)
  }
  handleUserClick(userId){
    this.props.onSetCurrentUserId(userId)
  }
  render() {
    return (
      <div>
        <ul className="user-list">
          {
            this.props.users.map((item,idx) => {
              return (
                <li key={item.id}
                  className={(this.props.currentUserId === item.id) ? 'current' : ''}
                  onClick={this.handleUserClick.bind(this, item.id)}
                >
                  <span>{item.name}</span>
                </li>
              )
            })
          }
        </ul>
        <input type="text" onChange={this.handleChange} value={this.state.newUser}/>
        <button onClick={this.handleClick}>增加用户</button>
      </div>
    );
  }
}

export default UserList;