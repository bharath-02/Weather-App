import React from 'react';

import classes from './Description.module.css';

const Description = (props) => {
    return(
        <div className={classes.DescriptionWrapper}>
            {props.type}
        </div>
    );
}

export default Description;