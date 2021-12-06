import React from 'react';
import styled from "styled-components";
import Link from 'next/link'
import Image from 'next/image'
import CardGameBtnBg from "../buttons/button-background";


function CardGameFeature({src, title}) {

    return (
        <div>
            <div className={'relative'}>
                <div
                    className={'bg-contain bg-no-repeat bg-center-top rounded-2xl '}
                    style={{
                        backgroundImage: `url(${src})`
                    }}
                >
                    <Image src={'/images/decorations/b-gold-feature.png'} width={640} height={400}/>
                </div>
            </div>
            <p className={'font-roboto-bold text-20 text-white text-center'}>
                {title}
            </p>
        </div>
    );
}

export default CardGameFeature;
