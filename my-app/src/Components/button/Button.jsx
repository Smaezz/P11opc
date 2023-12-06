import React from 'react';
import './button.css'

const button = ({ title, classButton, type, click }) => {
    return (
        <>
            <button 
                className={classButton}
                type={type}
                onClick={click}>
                {title}
            </button>
        </>
    );
};

export default button;

