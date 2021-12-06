import React from 'react';
import styled from "styled-components";

function MultiLineBackgrounds(
    {
        mlbFirstColTitle = '',
        mlbFirstColDescription,
        mlbFirstColBackground,
        mlbSecondColTitle = '',
        mlbSecondColDescription,
        mlbSecondColBackground
    }) {
    return (
        <MultiLineBackgroundsC
            className={'bg-mlbMergedBg bg-no-repeat bg-center bg-cover'}
        >
            <div className={'container mx-auto'}>
                <div className={'px-4'}>
                    <div className={'grid grid-cols-2'}>
                        <div className={'pt-14 pb-14 pr-20'}>
                            <h4 className={'font-roboto-black text-20 text-white uppercase mb-2'}>
                                {mlbFirstColTitle}
                            </h4>
                            <p className={'font-roboto-regular text-20 leading-normal text-white'}>
                                {mlbFirstColDescription}
                            </p>
                        </div>
                        <div className={'pt-14 pb-14 pl-20'}>
                            <h4 className={`font-roboto-black text-20 text-white uppercase ${mlbSecondColTitle ? 'mb-2' : 'mb-10'}`}>
                                {mlbSecondColTitle}
                            </h4>
                            <p className={'font-roboto-regular text-20 leading-normal text-white'}>
                                {mlbSecondColDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </MultiLineBackgroundsC>
    );
}

export default MultiLineBackgrounds;

const MultiLineBackgroundsC = styled.div`{
  min-height: 17.5rem;
}`;
