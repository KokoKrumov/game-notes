import React from 'react';
import Image from "next/image";

function HeroInnerPage({title,image,background}) {
    return (
        <div className={'container mx-auto 4xl:max-w-screen-2xl'}>
            <div className={''}>
                <div className={'py-20 grid grid-rows-1 grid-cols-2 grid-flow-col gap-4'}>
                    <Image
                        src={image}
                        alt="Slot Games"
                        width={'714'}
                        height={'538'}
                    />
                    <div className={'max-w-2xl inline-block align-top'}>
                        <p className={'font-roboto-black relative uppercase pl-2 mt-36 ml-16 leading-10'}>
                            <span className='text-white text-40'>
                                {title}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroInnerPage;
