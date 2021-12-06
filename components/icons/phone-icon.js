import React from 'react';

function PhoneIcon(props) {
    const {color} = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="21.872" height="11.897" viewBox="0 0 11.872 11.897">
            <path id="Path_615" data-name="Path 615" d="M12.1,8.731l-1.66-1.66A1.1,1.1,0,0,0,8.6,7.486,1.13,1.13,0,0,1,7.3,8.2,5.12,5.12,0,0,1,4.214,5.114a1.075,1.075,0,0,1,.712-1.3A1.1,1.1,0,0,0,5.34,1.972L3.68.311a1.184,1.184,0,0,0-1.6,0L.952,1.438c-1.127,1.186.119,4.329,2.906,7.116s5.93,4.091,7.116,2.906L12.1,10.332A1.184,1.184,0,0,0,12.1,8.731Z" 
            transform="translate(-0.539 0)" 
            fill={color}/>
        </svg>
    );
}

export default PhoneIcon;
