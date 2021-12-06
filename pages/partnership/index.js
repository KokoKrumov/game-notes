import React from 'react';
import Image from 'next/image';


function Index(props) {
    return (
        <>
            <div className={'bg-hudimgPartner bg-fixed relative bg-no-repeat z-30 bg-center-top-99'}>
                <div className={'w-full text-center'}>                    
                    <div className={'-mt-48'} style={{maxHeight:'54rem'}}>
                        <Image
                            src={'/images/pages/Partnership/space.png'}
                            alt="Slot Games"
                            width={'1920'}
                            height={'1047'}
                        />
                        <div className={'max-w-2xl block align-top w-full mx-auto text-center -mt-96 mb-80'}>
                            <p className={'font-roboto-black absolute top-96 uppercase leading-10'} style={{width:'40rem'}}>
                                <span className='text-white text-40'>
                                    Bulgaria is one of the fast growing outsource centers of the world
                                </span>
                            </p>
                        </div>
                    </div>                    
                </div>
                <div className={'bg-darkMountain_v2 bg-center bg-cover border-t-2 border-border-gold relative z-20'}>
                    <div className={'container 4xl:max-w-screen-2xl mx-auto px-4 '}>
                        <span className="bg-symbolGold w-full h-5 -mt-4 block bg-no-repeat bg-center" />
                        <div className="grid grid-cols-2 gap-2 mt-24">
                            <div className={'text-center p-16'}>
                                <Image
                                    src={'/images/pages/Partnership/Group 582.png'}
                                    alt="The End"
                                    width={'443'}
                                    height={'406'}
                                />
                            </div>                            
                            <div className={'pl-16'}>
                                <p className={'uppercase text-white text-28 font-bold mb-10'}>
                                    <span className={'text-blaze-orange'}>But at the</span> same time it is
                                </p>
                                <div className={'my-4'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19.613" height="10.09" viewBox="0 0 19.613 10.09">
                                        <path id="top_bgr" d="M-15-.046l17.652,0L4.613,10.044H-13.039Z" transform="translate(15 0.046)" fill="#f60"/>
                                    </svg>
                                </div>
                                <p className={'text-white text-1 pr-36 leading-7'}>
                                    Within Europe<br /> Time difference is usually 1-2 hours from most countries in the EU You can visit frequently due to the low cost of flights and living <br />
                                    There are many talented artists, animators and 3D specialists <br />
                                    It has very low taxes (only 10%) <br />
                                    A good place to spend a week on the beach or skiing in the mountains
                                </p>
                                <div className={'my-4'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19.613" height="10.09" viewBox="0 0 19.613 10.09">
                                        <path id="top_bgr" d="M-15-.046l17.652,0L4.613,10.044H-13.039Z" transform="translate(15 0.046)" fill="#f60"/>
                                    </svg>
                                </div>
                                <p className={'text-white text-1 pr-36 leading-7'}>
                                    Good education and universities <br />
                                    We are at 6th place in the world with high speed internet <br />
                                    Some of the biggest companies in the world have offices here with 200+ employees <br />
                                    Average salary of a highly skilled employee with 5+ years of experience is ~50% less thаn in UK or Germany
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-40 pb-40">    
                            <div className={'pl-16'}>
                                <p className={'uppercase text-white text-28 font-bold mb-10'}>
                                    <span className={'text-blaze-orange'}>What you can</span> expect from us?
                                </p>
                                <div className={'my-4'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19.613" height="10.09" viewBox="0 0 19.613 10.09">
                                        <path id="top_bgr" d="M-15-.046l17.652,0L4.613,10.044H-13.039Z" transform="translate(15 0.046)" fill="#f60"/>
                                    </svg>
                                </div>
                                <p className={'text-white text-1 pr-24 leading-7'}>
                                    Get your own team managed by professionals (5, 10… 15 people or more)<br />
                                    Very acceptable prices (monthly based packages)<br />
                                    Full service from concepts to design, animation, sounds and development<br />
                                    Excellent communication<br />
                                    Full transparency and dedication<br />
                                    We have some of the leading artist and specialist working with us<br />
                                    Cool Social Gaming concepts and ideas<br />
                                    Honesty, support and help grow your business<br />
                                </p>                                                            
                            </div>
                            <div className={'text-center p-12'}>
                                <Image
                                    src={'/images/pages/Partnership/Group 595.png'}
                                    alt="The End"
                                    width={'532'}
                                    height={'279'}
                                />
                            </div>   
                        </div>
                    </div>
                </div>            
            </div>
            <div className={'bg-space-bottom font-bold bg-cover bg-no-repeat bg-center text-center text-white uppercase'}>
                <p className={'text-50 pt-24'}>Creative & Innovative</p>
                <p className={'text-40'}>Young & Eager</p>
                <p className={'text-28'}>Affordable prices</p>
                <p className={'text-20 pt-2 pb-32'}>Full of enermy</p>
            </div>
        </>
       
    );
}

export default Index;
