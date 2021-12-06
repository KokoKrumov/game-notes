import React from 'react';
import Image from 'next/image';
import HorizontalTwoBigs from "../../components/gridContainers/horizontal-two-bigs";
import Expertise from "../../components/expertise/expertise";


function Index(props) {
    return (
        <>
            <div className={'bg-hudimgServices bg-fixed relative bg-no-repeat z-30 bg-center-top-99'}>
                <div className={'container mx-auto 4xl:max-w-screen-2xl'}>
                    <div className={''}>
                        <div className={'py-20 grid grid-rows-1 grid-cols-2 grid-flow-col gap-4'}>
                            <div className={'absolute ml-36'}>
                                <Image
                                    src={'/images/pages/Services/play.png'}
                                    alt="Slot Games"
                                    width={'759'}
                                    height={'511'}
                                />
                            </div>
                            <div />
                            <div className={'block align-top'}>
                                <p className={'font-roboto-black relative uppercase pl-2 mt-36 ml-8 mb-48 mr-24 leading-10'}>
                                    <span className='text-white text-40'>
                                        Our company specializes mainly in the following areas of web and application development
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'bg-darkMountain bg-center bg-cover border-t-2 border-border-gold relative z-20'}>
                    <div className={'container 4xl:max-w-screen-2xl mx-auto px-4 '}>
                        <span className="bg-symbolGold w-full h-5 -mt-4 block bg-no-repeat bg-center" />
                        <div className={'text-white uppercase text-center text-28 font-bold mt-16 mb-6'}>                            
                            <span className={'text-blaze-orange'}>Our</span> Services
                        </div>
                        <div className={'container 4xl:max-w-screen-2xl mx-auto'}>
                            <section>
                                <HorizontalTwoBigs />
                            </section>                                       
                        </div>                        
                    </div>
                </div> 
                <div className={'bg-pxRepeat bg-center bg-cover'}>
                    <div className={'text-white uppercase text-center text-28 font-bold pt-20 pb-10'}>
                        <span className={'text-blaze-orange'}>Our</span> Services
                    </div>
                    <Expertise />
                </div>
            </div>
            <div className={'bg-footer-services font-bold bg-cover bg-no-repeat bg-center text-center text-white uppercase'}>
                <p className={'text-50 pt-24'}>Creative & Innovative</p>
                <p className={'text-40'}>Young & Eager</p>
                <p className={'text-28'}>Affordable prices</p>
                <p className={'text-20 pt-2 pb-32'}>Full of enermy</p>
            </div>
        </>
    );
}

export default Index;
