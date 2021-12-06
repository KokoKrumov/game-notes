import React from 'react';

function BlockGold(props) {
    return (
        <div className={'flex grid grid-cols-4 justify-center -mb-32'}>
            <span className={`${props.image} inline-block bg-no-repeat w-72 h-80`}>
                <span className={'text-white absolute mt-72 ml-10 text-20 uppercase font-acp'}>
                    {props.title}
                </span>    
            </span>
            <span className={'bg-arrowLeft inline-block absolute mt-36 ml-72 bg-no-repeat w-4 h-4 align-middle'} />
            <span className={'text-color-gold inline content-center pt-24 mt-3.5 text-20 -ml-6 font-acp'}>
                {props.text}
            </span>            
            <div className={'bg-border-vertical-gold inline-block bg-no-repeat w-72 h-64 -ml-2 mt-4 bg-left'} />                   
        </div>
    );
}

export default BlockGold;
