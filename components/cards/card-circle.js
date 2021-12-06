import React from 'react';

function CardCircle({values}) {
    return (
        <div className={'w-28 h-28 rounded-full border-white shadow-cardCircleOuter'}>
            <div className={'w-28 h-28 rounded-full flex items-center justify-center border border-white shadow-cardCircleInner'}>
                <p className={'font-roboto-medium text-blaze-orange text-18'}>
                    {values}
                </p>
            </div>
        </div>
    );
}

export default CardCircle;
