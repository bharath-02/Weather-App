import React from 'react';
import preview from '../../assets/images/Preview.svg';
import classes from './Preview.module.css';

const Preview = (props) => {
    return(
        <img
            src={preview}
            alt="Weather App Icon"
            className={classes.Preview} />
    );
}

export default Preview;