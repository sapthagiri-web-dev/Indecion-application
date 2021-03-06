import React from 'react';
import Modal from 'react-modal';

const OptionModel= (props) => {

    return (
        <Modal
        
        isOpen={!!props.selectedOption}
        onRequestClose = {props.handleClearSelectedOption}
        contentLabel="Selected Option">
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick = {props.handleClearSelectedOption}>okay</button>
        </Modal>
    )
}


export default OptionModel;