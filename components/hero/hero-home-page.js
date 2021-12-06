import React from 'react';
import Image from "next/image";
import ChevronDown from "../icons/chevron-down";
import H1Alot from "../typography/h1Alot";

function HeroHomePage(props) {
    return (
        <div className={'text-center pt-5'}>
            <Image
                src={`/images/pages/HomePage/slotGames.png`}
                alt="Slot Games"
                width={'900'}
                height={'500'}
            />
            <div className={'-mt-45'}>
                <H1Alot
                    classes={'text-90 relative filter drop-shadow-xl'}
                    firstSentence={'casino'}
                    secondSentence={'games'}
                />
            </div>
            <div>
                <p className={'font-roboto-black text-40 relative text-white uppercase tracking-4'}>
                    content provider
                </p>
            </div>
            <div>
                <ChevronDown color={'text-blaze-orange'} classes={'mx-auto'} width={'w-57'}/>
            </div>
        </div>
    );
}

export default HeroHomePage;
