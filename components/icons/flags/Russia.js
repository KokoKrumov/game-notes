import React from 'react';

function Russia({width, height}) {
    return (
        <div className={`${width} ${height}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 28 19">
                <defs>
                    <clipPath id="clipPath">
                        <rect id="Rectangle_156" data-name="Rectangle 156" width="28" height="19" rx="2" transform="translate(0.195)" fill="#fff"/>
                    </clipPath>
                </defs>
                <g id="russia" transform="translate(-0.195)" clipPath="url(#clipPath)">
                    <g id="russia-2" data-name="russia" transform="translate(0)">
                        <path id="Path_644" data-name="Path 644" d="M0,85.33v18.68H28.021V85.33Z" transform="translate(0 -85.33)" fill="#f0f0f0"/>
                        <rect id="Rectangle_150" data-name="Rectangle 150" width="28" height="19" transform="translate(0.195 0)" fill="#0052b4"/>
                        <rect id="Rectangle_151" data-name="Rectangle 151" width="28" height="6" transform="translate(0.195 0)" fill="#f0f0f0"/>
                        <rect id="Rectangle_152" data-name="Rectangle 152" width="28" height="7" transform="translate(0.195 11.999)" fill="#d80027"/>
                    </g>
                </g>
            </svg>
        </div>

    );
}

export default Russia;
