import React from 'react';

function MailIcon_v2(props) {
    const {color} = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="28" height="14" viewBox="-2 0 14 14">
            <path id="Path_616" data-name="Path 616" d="M139.454,254.241c-.845,0-1.273-.636-1.273-1.909a3.22,3.22,0,1,0-.775,2.058,2.269,2.269,0,0,0,2.048,1.124c2.545,0,2.545-2.4,2.545-3.182a7,7,0,1,0-2.133,5.031.639.639,0,1,0-.891-.915h0a5.727,5.727,0,1,1,1.751-4.116C140.727,253.759,140.407,254.241,139.454,254.241Zm-4.454,0a1.909,1.909,0,1,1,1.909-1.909A1.909,1.909,0,0,1,135,254.241Z" 
            transform="translate(-128 -245.332)" 
            fill={color}/>
        </svg>
    );
}

export default MailIcon_v2;
