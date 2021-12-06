import React from 'react';
import Image from 'next/image'
import MainContent from "../../components/mainContent/main-content";
import Button from "../../components/buttons/button";
import H2Colored from "../../components/typography/h2Colored";
import styled from "styled-components";
import Input from "../../components/forms/input";
import TextArea from "../../components/forms/textarea";
import Link from 'next/link'

function Contacts(props) {

    return (
        <div className={'bg-hudimgContacts bg-fixed bg-no-repeat bg-center-top-130 bg-102 4xl:bg-cover'}>
            <div
                className='z-20 relative bg-hudimgContacts bg-woodsmoke bg-fixed bg-no-repeat bg-center-top-99 bg-102 4xl:bg-cover'>
                <div className={'w-full'}>
                    <HeroContainer
                        className={'flex items-end justify-center block align-top w-full mx-auto'}

                    >
                        <p className={'font-roboto-black uppercase leading-10 pt-40 pb-44  text-center'}
                           style={{width: '40rem'}}>
                                <span className='text-white text-40'>
                                    say hello
                                </span>
                        </p>
                    </HeroContainer>
                    <div className={'-mt-4 relative z-10'}>
                        <MultiLineBackgroundsC
                            className={'bg-mlbMergedBgContacts bg-no-repeat bg-center bg-cover'}
                        >
                            <div className={'container mx-auto'}>
                                <div className={'px-4'}>
                                    <div className={'grid grid-cols-2'}>
                                        <div className={'pt-14 pb-14 pr-20'}>
                                            <h4 className={`font-roboto-black text-20 text-white uppercase mb-10`}/>
                                            <p className={'font-roboto-black text-2xl uppercase leading-normal text-white'}>
                                                You have a question, comment or you only want to say "hello", do it
                                                simply by filling out our contact form
                                            </p>
                                        </div>
                                        <div className={'pt-14 pb-14 pl-20'}>
                                            <H2Colored firstSentence={'Get in '} secondSentence={'Touch'}/>
                                            <address className={'not-italic'}>
                                                <ul className={'font-roboto-regular text-20 leading-normal text-white'}>
                                                    <li>
                                                        <a href="https://goo.gl/maps/eAFTtywGxFoNpQd87" target="_blank"
                                                           className={'transition hover:text-blaze-orange'}>Sofia
                                                            1606, Bulgaria 53-55 gen. Totleben Blvd.
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="tel:+359887622774"
                                                           className={'transition hover:text-blaze-orange'}>Tel.: +359
                                                            887 622774</a>
                                                    </li>
                                                    <li>
                                                        <a href="tel:+359887128295"
                                                           className={'transition hover:text-blaze-orange'}>Tel.: +359
                                                            887 128295</a>
                                                    </li>
                                                    <li>
                                                        <a href="mailto:E-mail: gameon@wienergames.com"
                                                           className={'transition hover:text-blaze-orange'}>E-mail:
                                                            gameon@wienergames.com</a>
                                                    </li>
                                                </ul>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </MultiLineBackgroundsC>
                    </div>
                </div>
                <MainContent
                    classes={' -mt-14 pt-14 pb-14 bg-darkMountain relative z-0'}>
                    <div className={'container 4xl:max-w-screen-2xl mx-auto'}>
                        <div className={'px-4'}>
                            <section>
                                <div className={'mt-28 mb-12'}>
                                    <p className={'font-roboto-regular text-20 text-white text-center'}>
                                        If perhaps you have some kind of project on your mind and want to cooperate with
                                        Wiener Games give us a brief description of your project with some practical
                                        examples if any and in 24 hours we will contact you.
                                    </p>
                                </div>
                                <div className={'grid grid-cols-2 grid-flow-row gap-16'}>
                                    <div>
                                        <div className={'bg-white p-4 shadow-lg'}>
                                            <Link href="https://goo.gl/maps/eAFTtywGxFoNpQd87">
                                                <a target="_blank">
                                                    <Image
                                                        src={'/images/pages/Contacts/map.png'}
                                                        width={642}
                                                        height={477}
                                                        alt={'Wiener game studio on Google map'}
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <form>
                                            <div className={'mb-4'}>
                                                <Input
                                                    labelSize={'text-base'}
                                                    paddings={'p-3'}
                                                    textColor={'text-white'} background={'bg-baltic-sea'}
                                                    labelText={'Full name'} placeholder={'John Doe'}
                                                    inputName={'userName'} isRequired isValid={true}
                                                    errorMessage={'Please enter "user name"'}/>
                                            </div>
                                            <div className={'grid grid-cols-2 grid-flow-row gap-4'}>
                                                <div className={'mb-3'}>
                                                    <Input
                                                        labelSize={'text-base'}
                                                        paddings={'p-3'}
                                                        textColor={'text-white'} background={'bg-baltic-sea'}
                                                        labelText={'E-mail address'} placeholder={'John@mail.com'}
                                                        inputName={'mail'} isRequired isValid={true}
                                                        errorMessage={'Please enter "E-mail address"'}/>
                                                </div>
                                                <div className={'mb-4'}>
                                                    <Input
                                                        labelSize={'text-base'}
                                                        paddings={'p-3'}
                                                        textColor={'text-white'} background={'bg-baltic-sea'}
                                                        labelText={'Phone number'} placeholder={'012 345 678'}
                                                        inputName={'phone'} isValid={true}
                                                        errorMessage={'Please enter "Phone number"'}/>
                                                </div>
                                            </div>
                                            <div className={'mb-4'}>
                                                <Input
                                                    labelSize={'text-base'}
                                                    paddings={'p-3'}
                                                    textColor={'text-white'} background={'bg-baltic-sea'}
                                                    labelText={'Subject'} placeholder={'Subject....'}
                                                    inputName={'subject'} isRequired isValid={true}
                                                    errorMessage={'Please enter "user name"'}/>
                                            </div>
                                            <div className={'mb-4'}>
                                                <TextArea
                                                    labelSize={'text-base'}
                                                    paddings={'p-3'}
                                                    textColor={'text-white'} background={'bg-baltic-sea'}
                                                    labelText={'Questions or Comments'}
                                                    placeholder={'Your comments....'}
                                                    inputName={'textarea'} isRequired isValid={true}
                                                    errorMessage={'Please enter your comments'}/>
                                            </div>
                                            <div>
                                                <Button
                                                    classes={'bg-blaze-orange text-white hover:bg-white hover:text-blaze-orange'}>
                                                    send
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </MainContent>
            </div>
            <section>
                <div className={'container 4xl:max-w-screen-2xl mx-auto py-24'}>
                    <div className={'text-center text-white uppercase font-bold '}>
                        <p className={'text-50 pb-8 text-6xl'}>Creative & Innovative</p>
                        <p className={'font-bold text-5xl pb-8'}>Young & Eager</p>
                        <p className={'font-bold text-4xl pb-8'}>Affordable prices</p>
                        <p className={'font-bold text-2xl'}>Full of enermy</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contacts;

const HeroContainer = styled.div`
  height: calc(100vh - 290px);
  background-image: url("/images/pages/Contacts/leafsLeft.png"), url("/images/pages/Contacts/rightLeft.png");
  background-size: contain, contain;
  background-position: left top, right top;
  background-repeat: no-repeat;
`

const MultiLineBackgroundsC = styled.div`{
  min-height: 17.5rem;
}`;
