import React from 'react';
import './Button.scss';

const Button = (props) => {
    let classes = 'btn';
    if ( props.size ) {
        classes += ' btn-'+props.size;
    }
    if ( props.color ) {
        classes += ' btn-'+props.color;
    }
    return (
        <div className={classes}>{props.text}</div>
    );
};

export default Button;