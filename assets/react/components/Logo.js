import React from 'react';

const Logo = ({animate}) => {
    return (
        <span className={`logo ${animate ? 'animate': ''}`}>
            <span>&lt;</span>
            <span>P</span>
            <span>O</span>
            <span>W</span>
            <span>E</span>
            <span>G</span>
            <span>/</span>
            <span>&gt;</span>
        </span>
    );
};

export default Logo;
