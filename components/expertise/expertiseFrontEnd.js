import React from 'react';
import Image from 'next/image';
import styled from "styled-components";


function ExpertiseFrontEnd(props) {

    return (
        <div className={'container 4xl:max-w-screen-2xl mx-auto px-4 mb-32'}>
            <div className={'grid grid-rows-1 grid-cols-4 text-center'}>
                <div>
                    <Expertise>
                        <div className="border-background absolute z-10 bg-border-blue bg-center bg-contain"></div>
                        <div className="expertiseContent">
                            <Image
                                src={'/images/pages/Services/frontend.jpg'}
                                alt="ArtWork"
                                width={'317'}
                                height={'213'}
                            /> 
                            <div className={'bg-expertiseDark bg-center bg-no-repeat text-white text-sm'}>
                                <p className="uppercase text-white font-bold text-lg mb-8 pt-3">
                                    <span className={'title'}>Front</span>
                                    End
                                </p>      
                                <div className={'grid grid-rows-5 grid-cols-2 text-center'}>                          
                                    <p>HTML 5</p>
                                    <p>JAVA</p>
                                    <p>Unity3D</p>
                                    <p>C#/C/Obj-C</p>
                                    <p>Phaser</p>
                                    <p>Adobe Air</p>
                                    <p>PixiJS</p>
                                    <p>CSS 3</p>
                                    <p>.NET </p> 
                                </div>
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
        color: #18defd;
    }
    .tehnology p {
        width: 50%;
        display: inline-block;
    }
`;

export default ExpertiseFrontEnd;