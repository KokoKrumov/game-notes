import React from 'react';
import Image from 'next/image'
import ChevronDown from "../components/icons/chevron-down";
import HeroHomePage from "../components/hero/hero-home-page";
import MultiLineBackgrounds from "../components/multiLineBackgrounds/multi-line-backgrounds";
import homePageStaticData from "../home-page-staic-data.json"
import MainContent from "../components/mainContent/main-content";
import Button from "../components/buttons/button";
import HorizontalOneBigAndFourSmalls from "../components/gridContainers/horizontal-one-big-and-four-smalls";
import HorizontalFourSmalls from "../components/gridContainers/horizontal-four-smalls";
import H2Colored from "../components/typography/h2Colored";
import H1Alot from "../components/typography/h1Alot";
import CardParallelogram from "../components/cards/card-parallelogram";

function Index(props) {

    return (
        <div className={'bg-hudimg bg-fixed bg-no-repeat bg-center-top-130 bg-102 4xl:bg-cover'}>
            <div className='z-20 relative bg-hudimg bg-woodsmoke bg-fixed bg-no-repeat bg-center-top-99 bg-102 4xl:bg-cover'>
                <div className={'container mx-auto'}>
                    <div className={'px-4'}>
                        <HeroHomePage/>
                    </div>
                </div>
                <div className={'-mt-4 relative z-10'}>
                    <MultiLineBackgrounds
                        {...homePageStaticData}
                    />
                </div>
                <MainContent
                    style={{
                        backgroundImage: 'url(/images/pages/HomePage/Bgr_img.jpg), url(/images/pages/HomePage/Bgr_pxRepeat_updated.jpg)',
                        backgroundRepeat: 'no-repeat, repeat-y',
                        backgroundSize: 'contain, contain'
                    }}
                    classes={' -mt-14 pt-14 pb-14 relative z-0'}>
                    <div className={'container 4xl:max-w-screen-2xl mx-auto'}>
                        <div className={'px-4'}>
                            <section>
                                <H2Colored
                                    classes={'mt-14 mb-8 text-center'}
                                    firstSentence={'new'}
                                    secondSentence={'games'}/>
                                <HorizontalOneBigAndFourSmalls games={homePageStaticData.newGames}/>
                                <div className={'text-center'}>
                                    <Button
                                        classes={'mt-8 mb-3 bg-blaze-orange text-white hover:bg-white hover:text-blaze-orange'}>
                                        see more
                                    </Button>
                                </div>
                            </section>
                            <section>
                                <H2Colored
                                    classes={'mt-14 mb-8 text-center'}
                                    firstSentence={'recommended'}
                                    secondSentence={'games'}/>
                                <HorizontalFourSmalls games={homePageStaticData.recommendedGames}/>
                                <div className={'text-center'}>
                                    <Button
                                        classes={'mt-8 mb-3 bg-blaze-orange text-white hover:bg-white hover:text-blaze-orange'}>
                                        see more
                                    </Button>
                                </div>
                            </section>
                            <section>
                                <H2Colored
                                    classes={'mt-14 mb-8 text-center'}
                                    firstSentence={'take big'}
                                    secondSentence={'wins'}/>
                                <HorizontalOneBigAndFourSmalls games={homePageStaticData.bigWinsGames} mirrored/>
                                <div className={'text-center'}>
                                    <Button
                                        classes={'mt-8 mb-3 bg-blaze-orange text-white hover:bg-white hover:text-blaze-orange'}>
                                        see more
                                    </Button>
                                </div>
                            </section>
                        </div>
                    </div>
                </MainContent>
            </div>
            <section>
                <div className={'container 4xl:max-w-screen-2xl mx-auto pb-16'}>
                    <div className={'px-4'}>
                        <div className={'mt-10'}>
                            <div className={'grid grid-flow-row grid-cols-5'}>
                                <div/>
                                <H1Alot
                                    classes={'text-54 break-words'}
                                    firstSentence={'watch'}
                                    secondSentence={'trailers'}
                                />
                                <div/>
                                <div/>
                                <div/>
                            </div>
                        </div>
                        <div className={'grid grid-rows-1 grid-cols-3'}>
                            <div>
                                <Image
                                    src={`/images/pages/HomePage/aliens.png`}
                                    alt="Lucky Aliens"
                                    width={'380'}
                                    height={'380'}
                                />
                            </div>
                            <div className={'col-span-2 flex justify-end'}>
                                <div className={'grid grid-rows-1 grid-cols-3 grid-flow-col gap-9'}>
                                    {homePageStaticData.trailersGames.map(trailer => {
                                        return (
                                            <CardParallelogram key={trailer.id} game={trailer} />
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Index;
