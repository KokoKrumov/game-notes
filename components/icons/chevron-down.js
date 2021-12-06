import React from 'react';

function ChevronDown({color, width, height, classes}) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${width} ${color} cursor-pointer ${classes}`} fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
        </svg>
    );
}

export default ChevronDown;
