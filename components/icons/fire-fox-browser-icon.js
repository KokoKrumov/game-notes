import React from 'react';
import {DesktopComputerIcon} from "@heroicons/react/outline";

function FireFoxBrowserIcon({width, height, color}) {
    return (
        <div className={`${width} ${height}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 22.205 21.239">
                <g id="firefox" transform="translate(0 -11.136)">
                    <g id="Group_634" data-name="Group 634" transform="translate(0 11.136)">
                        <path id="Path_640" data-name="Path 640"
                              d="M15.448,11.136c2.144,1.457,3.379,5.3,3.379,8.206a8.648,8.648,0,0,1-.271,2.143,5.828,5.828,0,0,0-2.318-4.141,5.79,5.79,0,0,1-4.653,9.239,4.12,4.12,0,0,1-2.9-.966c1.96,0,3.166-1.93,4.827-1.93a1.4,1.4,0,0,0-1.447-.966c-1.207,0-.637.966-2.9.966s-3.379-1.361-3.379-2.413,1.564-1.815,1.93-1.447c.329-.329,0-.966,0-.966l2.9-1.93H9.655c-4.287,0-1.825-3-.966-3.862-1.535,0-2.5,1.42-2.9,1.93a8.424,8.424,0,0,0-2.413,0c-.212.049-.511-.328-.791-.849A5.4,5.4,0,0,1,1.93,12.1a3.254,3.254,0,0,0-.53,3.785.212.212,0,0,0-.049.078A11.1,11.1,0,0,0,11.1,32.375c6.13,0,11.1-4.49,11.1-10.619V20.79A9.614,9.614,0,0,0,15.448,11.136Z"
                              transform="translate(0 -11.136)" fill={color}/>
                    </g>
                </g>
            </svg>
        </div>

    );
}

export default FireFoxBrowserIcon;
