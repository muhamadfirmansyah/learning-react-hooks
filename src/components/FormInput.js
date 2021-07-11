import React, { useState } from 'react'
import PropTypes from 'prop-types'

import '../styles/FormInput.css'
import Button from './Button'

const FormInput = ({ storeData }) => {

    const [text, setText] = useState("")

    const changeText = (e) => {
        setText(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault();
        
        if (text !== "") {
            storeData(text)
        }

        setText("")
    }

    return (
        <form onSubmit={ submitForm } style={ formStyle }>
            <input
                type="text"
                placeholder="Add task"
                value={ text }
                style={ inputStyle }
                onChange={ changeText } />
            <Button 
                text="add"
                variant="info"
                action={ submitForm } />
        </form>
    )
}

FormInput.propTypes = {
    storeData: PropTypes.func.isRequired
}

const formStyle = {
    background: "#FFFFFF",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}

const inputStyle = {
    width: "70%",
    border: "none"
}

export default FormInput;