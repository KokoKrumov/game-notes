import React from 'react';
import Image from 'next/image';
import styled from "styled-components";


function ExpertiseArtWork(props) {

    return (
        <div className={'container 4xl:max-w-screen-2xl mx-auto px-4'}>
            <div className={'grid grid-rows-1 grid-cols-4 text-center'}>
                <div>
                    <Expertise>
                        <div className="border-background absolute z-10 bg-border-red bg-center bg-contain"></div>
                        <div className="expertiseContent">
                            <Image
                                src={'/images/pages/Services/artwork.jpg'}
                                alt="ArtWork"
                                width={'317'}
                                height={'213'}
                            /> 
                            <div className={'bg-expertiseDark bg-center bg-no-repeat text-white text-sm'}>
                                <p className="uppercase text-white font-bold text-lg mb-8 pt-3">
                                    <span className={'title'}>Atr</span>
                                    work
                                </p>
                                <p>2D/3D Artwork</p>
                                <p>2D/3D Animation</p>
                                <p>After Effects</p>
                                <p>Concept Creation</p>
                                <p>Storyboard creation</p>
                                <p>UI design</p>
                                <p>Fluid layouts</p>
                            </div>
                        </div>
                    </Expertise>
                </div>
                
            </div>
        </div>
    );
}


const Expertise = styled.div`
    .border-background, .expertiseContent {
        width: 334px;
        height: 550px;
    }
    .expertiseContent {
        padding: 0.5rem;
    }
    .bg-expertiseDark {
        background-size: 100% 100%;
        height: 320px;
        line-height: 28px;
        margin-top: -6px;
    }
    .title {
        color: #fe3a1a;
    }
`;

export default ExpertiseArtWork;