import React from 'react';

function LocationIcon(props) {
    const {color} = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block hover:fill-current hover:text-black" width="23.627" height="16" viewBox="0 0 9.627 14">
            <path id="Path_617" data-name="Path 617" d="M88.926,2.4A4.751,4.751,0,0,0,84.889,0c-.072,0-.144,0-.215,0a4.751,4.751,0,0,0-4.037,2.4,4.874,4.874,0,0,0-.064,4.816l3.472,6.354,0,.008a.844.844,0,0,0,1.464,0l0-.008,3.472-6.354A4.874,4.874,0,0,0,88.926,2.4ZM84.781,6.343A1.969,1.969,0,1,1,86.75,4.375,1.971,1.971,0,0,1,84.781,6.343Z" 
            transform="translate(-79.968 0)" 
            fill={color}/>
        </svg>
    );
}

export default LocationIcon;
