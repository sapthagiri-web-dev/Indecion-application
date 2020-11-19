
 import React from 'react';
 import Option from './Option';
 

const Options = (props) =>{

    return (
      <div>
      <button onClick={props.handleDeleteOptions}> Remove All </button>
      {props.options.length === 0 && <p>Enter add some option to get started</p>}
        {
          props.options.map((option) => {
          return (
            <Option key={option}
             optionText={option}
            handleDeleteOption = {props.handleDeleteOption}/>)
        })}
     
      </div>
    )
  
  }

  export default Options;