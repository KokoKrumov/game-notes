import React from 'react';
import {DesktopComputerIcon} from "@heroicons/react/outline";

function ComputerIcon({width, height, color}) {
    return (
        <div className={`${width} ${height}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 26 23.273">
                <path id="desktop"
                      d="M23.93,20.145H2.07A2.072,2.072,0,0,0,0,22.215V36.74a2.072,2.072,0,0,0,2.07,2.07h8.248L8.336,40.888a1.156,1.156,0,0,0-.215.671v.7a1.156,1.156,0,0,0,1.156,1.156h7.445a1.156,1.156,0,0,0,1.156-1.156v-.7a1.156,1.156,0,0,0-.215-.671L15.683,38.81H23.93A2.072,2.072,0,0,0,26,36.74V22.215A2.072,2.072,0,0,0,23.93,20.145ZM23.688,36.5H2.312V22.457H23.688Z"
                      transform="translate(0 -20.145)" fill={color}/>
            </svg>
        </div>

    );
}

export default ComputerIcon;
