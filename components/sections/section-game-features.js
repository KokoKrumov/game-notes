import React from 'react';
import CardGameBtnBg from "../buttons/button-background";
import H2Colored from "../typography/h2Colored";
import CardGameFeature from "../cards/card-game-feature";
import SectionGame from "./section-game";


function SectionGameFeatures({section}) {
    return (
        <SectionGame
            backgroundImage={section.background}

        >
            <span id={section.sectionSlug}/>
            <div
                className={'container mx-auto py-16 px-4'}>
                <div className={'mb-14 text-center'}>
                    <H2Colored firstSentence={'game'} secondSentence={'features'}/>
                </div>
                <div className={'grid grid-flow-row gap-x-32 grid-cols-2'}>
                    {section.features.map(feature => {
                        return (
                            <div key={feature.id}>
                                <CardGameFeature src={feature.image} title={feature.title}/>
                            </div>
                        )
                    })}

                </div>
                <div className={'text-center'}>
                    <div className={'inline-block'}>
                        <CardGameBtnBg size={'lg'} classes={'text-20 pt-6 pb-9 px-12'}/>
                    </div>
                </div>
            </div>
        </SectionGame>
    );
}

export default SectionGameFeatures;
