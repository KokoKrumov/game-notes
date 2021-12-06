import React from 'react';

function BlockRight(props) {
    return (
        <div className={'flex grid grid-cols-4 justify-center -mb-24'}>
            <div />
            <div />
            <div className={'bg-border-vertical-right inline-block bg-no-repeat w-96 h-64 -ml-4 mt-4 bg-left'}>
            <span className={`text-color-yellow block content-center ${props.textPosition} ml-9 mt-2 text-20 font-acp`}>
                {props.text}
            </span>
            
            </div> 
            <span className={`${props.image} inline-block bg-no-repeat ml-16 w-72 h-80`}>
                <span className={'bg-arrowRight block absolute bg-no-repeat w-4 h-4 align-middle'}
                    style={{marginLeft: '-1.5rem', marginTop: '137px'}} 
                />
                <span className={'text-white absolute mt-72 ml-16 text-20 uppercase font-acp'}>
                    {props.title}
                </span>
            </span>
        </div>
    );
}

export default BlockRight;
