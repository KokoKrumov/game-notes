import React from 'react';
import Image from 'next/image';
import BlockGold from '../../components/aboutBlock/blockGold';
import BlockRight from '../../components/aboutBlock/blockRight';
import BlockLeft from '../../components/aboutBlock/blockLeft';
import HeroInnerPage from '../../components/hero/hero-inner-page';



function Index(props) {
    return (
        <>
            <div className={'bg-hudimgAbout bg-fixed relative bg-no-repeat z-30 bg-center-top-99'}>
                <HeroInnerPage 
                    title="Our company specializes mainly in the following areas of web and application development"
                    image="/images/pages/AboutUs/moni.png"
                />
                        
                <div className={'bg-bgr bg-cover border-t-2 border-border-gold relative z-20'}>
                    <div className={'container 4xl:max-w-screen-2xl mx-auto px-4 '}>
                        <span className="bg-symbolGold w-full h-5 -mt-4 block bg-no-repeat bg-center" />
                        <span className="bg-textOnceUponaTime w-full h-52 block bg-no-repeat bg-center" />
                        <BlockGold 
                            image="bg-creative"
                            title="Creative & Innovative"
                            text="Oh, wait…I forgot – you never heard about this awesome team! Let me tell you their story…"
                        />
                        <BlockRight 
                            image="bg-YoungEager"
                            title="Young & Eager"
                            text="If you haven't seen them already here they are – young, creative, full of energy and innovative ideas… and of course at very affordable prices!"
                            textPosition="pt-16"
                        />
                        <BlockLeft 
                            image="bg-Affordable"
                            title="Affordable Prices"
                            text="Their main goal is to deliver high quality products and push your business forward (despite of loses and heavy casualties on the battlefield). But at the same time they will keep your company expenses far less (even ridiculously less) from what you spend on designing and developing games so far."
                        />
                        <BlockRight 
                            image="bg-FullofEnergy"
                            title="Full of Energy"
                            text="They are young as a studio, but everyone from their team has huge experience in what they do – slaying dragons, burning witches, saving princesses… and from time to time, even making games. Moreover they are always ready to go the extra mile for the highest bidder!"
                            textPosition="pt-6"
                        />
                    </div>
                    <div className={'text-center mt-40 text-white'}>
                        <Image
                            src={'/images/pages/AboutUs/TheEnd.svg'}
                            alt="The End"
                            width={'390'}
                            height={'160'}
                        />
                        <p className={'text-white uppercase font-roboto-bold'}>The Wieners Team</p>
                        <p className={'text-silver leading-5 mt-2 mb-5'}>
                            Their team consists of 15 elite warriors of various talents. <br />
                            One day you could be their Sovereign!</p>
                        <Image
                            src={'/images/pages/AboutUs/Wiener.png'}
                            alt="Wiener"
                            width={'126'}
                            height={'59'}
                        />
                        <div className={'h-14'}/>
                    </div>
                </div>            
            </div>
            <div className={'bg-footer-about bg-cover bg-no-repeat bg-center text-center text-white uppercase'}>
                <p className={'font-bold text-50 pb-8 pt-24'}>Creative & Innovative</p>
                <p className={'font-bold text-40 pb-8'}>Young & Eager</p>
                <p className={'font-bold text-28 pb-8'}>Affordable prices</p>
                <p className={'font-bold text-20 pb-32'}>Full of enermy</p>
            </div>
        </>
       
    );
}

export default Index;
