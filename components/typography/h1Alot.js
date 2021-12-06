import React from 'react';

function H1Alot({classes, firstSentence, secondSentence}) {
    return (
        <h1 className={`font-alot uppercase leading-none ${classes}`}>
            <span className={'text-blaze-orange'}>{firstSentence} </span>
            <span className={'text-white'}>{secondSentence}</span>
        </h1>
    );
}

export default H1Alot;
