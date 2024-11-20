"use client";

import React from 'react';

const Square = ({ value, onClick }: { value: any, onClick: any }) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;