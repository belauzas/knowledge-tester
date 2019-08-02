import React from 'react';
import './NotYetOverlay.scss';

const NotYetOverlay = (props) => {
    return (
        <div className="not-yet-overlay">
            <div className="number">{props.number}</div>
        </div>
    );
};

export default NotYetOverlay;