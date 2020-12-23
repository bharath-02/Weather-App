import React from 'react'

import classes from './InputField.module.css';
import mapping from '../../assets/mapping.json';

const InputField = (props) => {
    return (
        <div className={classes.InputFieldWrapper}>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type={props.type}
                id={props.name}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleChange}
                style={(props.error) ? {'borderBottomColor': mapping.colors.error} : null}
                required
            />
        </div>
    );
}

export default InputField;