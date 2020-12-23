import React from 'react';

import classes from './Footer.module.css';
import Logo from '../../elements/Logo/Logo';

const Footer = (props) => {
    return(
        <footer className={classes.Footer}>
            <Logo colorScheme='dark' clicked={props.onClickHandler} />
            <div className={classes.Separator}></div>
        </footer>
    );
}

export default Footer;