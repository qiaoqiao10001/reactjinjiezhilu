import React, { Component } from 'react';
import '../style/postItem.css'
import like from '../images/like-default.png'

class PostItem extends Component {
  constructor(props){
    super(props)
    this.state={
      editing:false,
      post: props.post
    }
    this.handleEditPost = this.handleEditPost.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleVote = this.handleVote.bind(this)
  }
  
  componentWillReceiveProps(nextPorps){
    if(this.props.post !== nextPorps.post){
      this.setState({
        post: nextPorps.post
      })
    }
  }
  
  handleEditPost(){
    const editing = this.state.editing
    // 处于编辑状态的时候，调用onSave保存
    if(editing){
      this.props.onSave({
        ...this.state.post,
        date: this.getFormatDate()
      })
    }
    this.setState({
      editing: !editing
    })
  }
  handleTitleChange(e){
    const newPost = { ...this.state.post, title: e.target.value}
    this.setState({
      post: newPost
    })
  }
  handleVote(){
    // 处理点赞 ，传递id给父组件
    this.props.onVote(this.props.post.id) 
  }
  
  getFormatDate(){
    return new Date().toLocaleString()
  }
  
  render() {
    const {post} = this.state
    return (
      <li className="item">
        <div className="title">
            {this.state.editing ? 
            <form>
              <textarea
                value={post.title}
                onChange={this.handleTitleChange}
              />
            </form>
            : post.title}
        </div>
        <div>
            创建人：<span>{post.author}</span>
        </div>
        <div>
          创建时间：<span>{post.date}</span>
        </div>
        <div className="like">
          <span>
            <img src={like} onClick={this.handleVote} alt="like"/>
          </span>
          <span>{post.vote}</span>
        </div>
        <div>
          <button onClick={this.handleEditPost}>
            {this.state.editing ? "保存" : "编辑"} 
          </button>
        </div>
      </li>
    );
  }
}

export default PostItem;