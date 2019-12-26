import React from 'react';
import PostList from './PostList'
import Modal from './components/Modal'
// import FormInput from './components/FormInput'
// import FormSelect from './components/FormSelect'
// import FormRadio from './components/FormRadio'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {showModal: false}
  }
  
  closeModal=()=>{
    this.setState({showModal: false})
  }
  
  render() {
    return (
      <div className="App">
        <PostList></PostList>
        {this.state.showModal && (
          <Modal onClose={this.closeModal}>modaldialog</Modal>
        )}
        {/* <FormInput></FormInput>
      <FormSelect></FormSelect>
      <FormRadio></FormRadio> */}
      </div>
    )
  };
}

export default App;
