import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options'
import OptionModel from  './OptionModal';


const subtitle = 'Put your life in the hands of the computer';
class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption : undefined
    }

    handleClearSelectedOption = () => {
        this.setState( () => ({
            selectedOption: undefined
        }))
    }

    handleDeleteOptions = () =>{
        this.setState( () => ({options : [] }) )
      }
       
      handleDeleteOption = (optionToRemove) =>{
        
        this.setState( (prevState) => ({
          options:prevState.options.filter((option) => optionToRemove !== option)
        }))
      }
    
      handlePick = () => {
          const randNum = Math.floor(Math.random() * this.state.options.length);
          const option = this.state.options[randNum]
          this.setState ( () => ({
            selectedOption : option
          }))
      }
    
      handleAddOption = (option) => {
        
        if(!option) {
          return 'Enter a valid value'
        }else if(this.state.options.indexOf(option) > -1) {
          return 'This item already exists'
        }
    
        this.setState( (prevState) => ({options:   prevState.options.concat([option])}) )
      }



  componentDidMount(){
    try{
      const json = localStorage.getItem('options')
      const options = JSON.parse(json);
  
      if(options){
        this.setState( () => ({options:options}))
      }

    }catch(e){
      // do nothing
    }

  }

  componentDidUpdate(prevProps , prevState){
    if(prevState.options.length !== this.state.options.length){
      const json  = JSON.stringify(this.state.options);
      localStorage.setItem('options' ,json)
    }
  }

  

  render(){
    return (
      <div>
    <Header  subtitle={subtitle}/>
    <Action hasOption={this.state.options.length > 0}
            handlePick={this.handlePick}
    />
    <Options options={this.state.options}
            handleDeleteOptions = {this.handleDeleteOptions}
            handleDeleteOption = {this.handleDeleteOption}
    />
    <AddOption 
            handleAddOption = {this.handleAddOption}
    />

    <OptionModel selectedOption = {this.state.selectedOption} 
                handleClearSelectedOption = {this.handleClearSelectedOption}
    />
      </div>
    )
  }
}


export default IndecisionApp;