import React from 'react';
import {DesktopComputerIcon} from "@heroicons/react/outline";

function AppleIosIcon({width, height, color}) {
    return (
        <div className={`${width} ${height}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 21.12 25.906">
                <g id="apple-logo" transform="translate(-2.104)">
                    <g id="Group_623" data-name="Group 623" transform="translate(2.104)">
                        <path id="Path_634" data-name="Path 634" d="M14.938,0h.132a3.961,3.961,0,0,1-1,2.985A3.092,3.092,0,0,1,11.35,4.263,3.842,3.842,0,0,1,12.365,1.37,4.386,4.386,0,0,1,14.938,0Z" transform="translate(0.159)" fill={color}/>
                        <path id="Path_635" data-name="Path 635" d="M23.224,19.42v.056a17.019,17.019,0,0,1-2.157,4.536c-.822,1.235-1.83,2.9-3.63,2.9-1.555,0-2.588-1.091-4.182-1.121-1.686-.03-2.613.912-4.154,1.149H8.576A4.712,4.712,0,0,1,5.865,24.9,18.759,18.759,0,0,1,2.1,14.629V13.365a8.493,8.493,0,0,1,3.315-6.8,5.237,5.237,0,0,1,3.759-.949,8.86,8.86,0,0,1,1.842.576,4.779,4.779,0,0,0,1.841.6,4.152,4.152,0,0,0,1.291-.431,7.372,7.372,0,0,1,4.154-.8,5.715,5.715,0,0,1,4.235,2.755A6.078,6.078,0,0,0,19.78,14.2,6.049,6.049,0,0,0,23.224,19.42Z" transform="translate(-2.104 -1.031)" fill={color}/>
                    </g>
                </g>
            </svg>
        </div>

    );
}

export default AppleIosIcon;
