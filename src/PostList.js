import React, { Component } from 'react';
import PostItem from './components/PostItem'

 
class PostList extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
    this.timer = null
    this.handleVote = this.handleVote.bind(this)
  }
  // 模拟异步数据
  
  componentDidMount(){
    this.timer = setTimeout(() => {
      this.setState({
        posts:[
          {id:1, title: '大家一起来讨论React吧', author: '张三', date: '2019年12月26日09:43:31',vote:0 },
          { id:2,title: '大家一起来讨论vue吧', author: '李四', date: '2019年12月26日09:43:31',vote: 0},
          {id:3, title: '大家一起来讨论angular吧', author: '张三', date: '2019年12月26日09:43:31', vote: 0},
        ]
      })
    },1000)
  }
  
  componentWillUnmount(){
    if(this.timer){
      clearTimeout(this.timer)
    }
  }
  
  handleVote(id){
    // 通过id来找到需要更新的帖子点赞对象
   const posts = this.state.posts.map(item => {
     const newItem = item.id === id ? {...item, vote: ++item.vote} : item 
     return newItem
   }) 
   this.setState({
     posts
   })
  }
  
  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map( item => 
          <PostItem key={item.id} post={item} onVote={this.handleVote}></PostItem>
          )}
        </ul>
        
      </div>
    );
  }
}

export default PostList;