import React, { Component } from 'react';
import UserList from './UserList'
import UserDetail from './UserDetail'

class UserContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          name: 'react', id: 1,
          age: 12,
          phone: 18123212321,
          address: '广州'
        },
        {
          name: 'ng', id: 2,
          age: 11,
          phone: 18123212321,
          address: '广州1'
        },{
          name: 'vu', id: 3,
          age: 14,
          phone: 181212321,
          address: '广州2'
        }
      ],
      currentUserId: null
    }
    this.handleAddUser = this.handleAddUser.bind(this)
    this.handleSetCurrentUser = this.handleSetCurrentUser.bind(this)
  }
  handleAddUser(user) {
    this.setState({
      users: [...this.state.users, { name: user, id: Math.ceil(Math.random() * 10) }]
    })
  }
  handleSetCurrentUser(userId) {
    this.setState({
      currentUserId: userId
    })
  }
  render() {
    const filterUsers = this.state.users.filter((user) =>
      user.id === this.state.currentUserId
    )
    const currentUser = filterUsers.length > 0 ? filterUsers[0] : null
    return (
      <div>
        <UserList users={this.state.users}
          onAddUser={this.handleAddUser}
          currentUserId={this.state.currentUserId}
          onSetCurrentUserId={this.handleSetCurrentUser}
        />
        <UserDetail currentUser={currentUser}></UserDetail>
      </div>
    );
  }
}


export default UserContainer;