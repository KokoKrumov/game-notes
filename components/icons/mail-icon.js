import React from 'react';

function MailIcon(props) {
    const {color} = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-blaze-orange hover:fill-current" fill="#fff" width="29.146" height="17.299" viewBox="0 0 20.146 16.299">
            <g id="email" transform="translate(0 -61)">
            <g id="Group_681" data-name="Group 681" transform="translate(0 61)">
                <path id="Path_667" data-name="Path 667" d="M14.727,61H1.419A1.422,1.422,0,0,0,0,62.419V71.88A1.421,1.421,0,0,0,1.419,73.3H14.727a1.421,1.421,0,0,0,1.419-1.419V62.419A1.421,1.421,0,0,0,14.727,61Zm-.2.946L8.1,68.374,1.62,61.946ZM.946,71.684V62.61L5.5,67.128Zm.669.669,4.559-4.559,1.6,1.584a.473.473,0,0,0,.668,0L10,67.818l4.534,4.534ZM15.2,71.684l-4.534-4.534L15.2,62.615Z" transform="translate(0 -61)" 
                fill='{color}'/>
            </g>
            </g>
        </svg>
    );
}

export default MailIcon;
