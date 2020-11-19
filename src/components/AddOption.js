
import React from 'react';

class AddOption extends React.Component {
  state = {
    error: undefined
  }
  

    handleAddOption = (e) => {
     
      e.preventDefault();
      const inputVal = e.target.elements.inputValues.value.trim() //trim i used to remove before and after spaced around the string
      const error = this.props.handleAddOption(inputVal)
  
      this.setState( () => ({error : error}))
  
    
  
    }
    render(){
      return( 
        <div>
        <form  onSubmit={this.handleAddOption}>
            {this.state.error && <p>{this.state.error}</p>}
          <input type='text' name='inputValues'></input>
          <button>Add option</button>
          </form>
        </div>
      )
    }
  }

  export default AddOption;