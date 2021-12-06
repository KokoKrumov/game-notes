import React from 'react';
import CardCircle from "../cards/card-circle";
import Image from "next/image";
import CardGameBtnBg from "../buttons/button-background";
import SectionGame from "./section-game";

function SectionGameHero({section}) {

    return (
        <SectionGame
            backgroundImage={section.background}
        >
            <span id={section.sectionSlug}/>
            <div
                className={'container mx-auto py-24 px-4'}
            >
                <div className={'grid grid-flow-row grid-cols-2 items-center'}>
                    <div>
                        <div className={'mb-10'}>
                            <h1 className={'mb-8 font-roboto-light text-40 text-white'}>
                                {section.title}
                            </h1>
                            <p className={'font-roboto-regular text-20 text-white'}>
                                {section.description}
                            </p>
                        </div>
                        <div className={'flex items-center'}>
                            <div className={'mr-8'}>
                                <CardCircle values={section.maxWin}/>
                                <p className={'font-roboto-light text-white text-lg uppercase text-center mt-5'}>
                                    max win
                                </p>
                            </div>
                            <div className={'mr-8'}>
                                <CardCircle values={section.volatility}/>
                                <p className={'font-roboto-light text-white text-lg uppercase text-center mt-5'}>
                                    volatility
                                </p>
                            </div>
                            <div className={'mr-8'}>
                                <CardCircle values={section.rtp}/>
                                <p className={'font-roboto-light text-white text-lg uppercase text-center mt-5'}>
                                    rtp
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'text-center'}>
                        <Image
                            width={560}
                            height={550}
                            alt={section.title}
                            src={section.image}
                        />
                        <div className={'inline-block'}>
                            <CardGameBtnBg size={'lg'}
                                           classes={'inline-block text-20 pt-6 pb-9 px-12'}/>
                        </div>
                    </div>
                </div>
            </div>
        </SectionGame>
    );
}

export default SectionGameHero;
