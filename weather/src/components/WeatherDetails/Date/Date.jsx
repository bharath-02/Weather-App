import React from 'react';

import dateformat from 'dateformat';

import classes from './Date.module.css';

const Dates = (props) => {
    const today = new Date();
    return(
        <div className={classes.DateWrapper}>
            {dateformat(today, "dddd, mmmm dd")} 
        </div>
    );
}

export default Dates;