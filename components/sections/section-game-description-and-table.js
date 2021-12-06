import React from 'react';
import CardGameBtnBg from "../buttons/button-background";
import H2Colored from "../typography/h2Colored";
import TableGame from "../tables/table-game";
import ComputerIcon from "../icons/desktop-computer-icon";
import AppleIosIcon from "../icons/apple-ios-icon";
import AndroidIcon from "../icons/android-icon";
import ChromeBrowserIcon from "../icons/chrome-browser-icon";
import FireFoxBrowserIcon from "../icons/fire-fox-browser-icon";
import UK from "../icons/flags/UK";
import Russia from "../icons/flags/Russia";
import Germany from "../icons/flags/Germany";
import SectionGame from "./section-game";

function SectionGameDescriptionAndTable({section}) {
    return (
        <SectionGame
            backgroundImage={section.background}
        >
            <span id={section.sectionSlug}/>
            <div
                className={'container mx-auto py-24 px-4'}>
                <div className={'grid grid-flow-row gap-x-16 grid-cols-2'}>
                    <div>
                        <H2Colored firstSentence={'game'} secondSentence={'description'}/>
                        <div className={'mt-12'}>
                            <p className={'font-roboto-medium text-18 text-white'}>
                                {section.gameDescriptionMain}
                            </p>
                            <p className={'mt-4 font-roboto-light text-base text-white'}>
                                {section.gameDescriptionMainFull}
                            </p>
                        </div>
                        <div className={'mt-8'}>
                            <CardGameBtnBg size={'sm'} classes={'text-sm pt-4 pb-5 px-6'}/>
                        </div>
                    </div>
                    <div>
                        <H2Colored firstSentence={'game'} secondSentence={'description'}/>
                        <TableGame gameDetails={section.gameDetails}/>
                        <div className={'grid grid-flow-row gap-x-6 grid-cols-2'}>
                            <div className={'flex items-center mt-8'}>
                                <div>
                                    <p className={'font-roboto-bold text-sm uppercase mr-2'}>
                                        <span className={'text-blaze-orange'}>supported </span>
                                        <span className={'text-white'}>platforms</span>
                                    </p>
                                </div>
                                <div>
                                    <div className={'flex'}>
                                        <div className={'ml-2'}>
                                            {section.gameDetails.supportedPlatform.pc &&
                                            <ComputerIcon width={'w-6'} height={'h-6'}
                                                          color={'white'}/>}
                                        </div>
                                        <div className={'ml-2'}>
                                            {section.gameDetails.supportedPlatform.ios &&
                                            <AppleIosIcon width={'w-6'} height={'h-6'}
                                                          color={'white'}/>}
                                        </div>
                                        <div className={'ml-2'}>
                                            {section.gameDetails.supportedPlatform.android &&
                                            <AndroidIcon width={'w-6'} height={'h-6'}
                                                         color={'white'}/>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex items-center mt-8'}>
                                <div>
                                    <p className={'font-roboto-bold text-sm uppercase mr-2'}>
                                        <span className={'text-blaze-orange'}>supported </span>
                                        <span className={'text-white'}>browsers</span>
                                    </p>
                                </div>
                                <div>
                                    <div className={'flex'}>
                                        <div className={'ml-2'}>
                                            {section.gameDetails.supportedBrowsers.chrome &&
                                            <ChromeBrowserIcon width={'w-6'} height={'h-6'}
                                                               color={'white'}/>}
                                        </div>
                                        <div className={'ml-2'}>
                                            {section.gameDetails.supportedBrowsers.ios &&
                                            <FireFoxBrowserIcon width={'w-6'} height={'h-6'}
                                                                color={'white'}/>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex items-center mt-8'}>
                            <div>
                                <p className={'font-roboto-bold text-sm uppercase text-white mr-2'}>
                                    languages
                                </p>
                            </div>
                            <div>
                                <div className={'flex'}>
                                    <div className={'ml-2'}>
                                        {section.gameDetails.supportedLanguages.eng &&
                                        <UK width={'w-6'} height={'h-6'}/>}
                                    </div>
                                    <div className={'ml-2'}>
                                        {section.gameDetails.supportedLanguages.rus &&
                                        <Russia width={'w-6'} height={'h-6'}/>}
                                    </div>
                                    <div className={'ml-2'}>
                                        {section.gameDetails.supportedLanguages.ger &&
                                        <Germany width={'w-6'} height={'h-6'}/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionGame>
    );
}

export default SectionGameDescriptionAndTable;
