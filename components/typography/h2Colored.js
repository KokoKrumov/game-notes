import React from 'react';

function H2Colored({classes, firstSentence, secondSentence}) {
    return (
        <h2 className={`font-roboto-black text-28 uppercase ${classes}`}>
            <span className={'text-blaze-orange'}>{firstSentence} </span>
            <span className={'text-white'}>{secondSentence}</span>
        </h2>
    );
}

export default H2Colored;
