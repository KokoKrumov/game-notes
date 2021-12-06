import React from 'react';
import styled from "styled-components";
import AllGamesIcon from "../icons/all-games-icons";
import ScrollBorderIcon from "../icons/scroll-border-icon";
import Link from 'next/link';


function SectionGame({backgroundImage, children}) {
    return (
        <SectionGameStyles
            backgroundImage={backgroundImage}
            className={'section bg-center-top bg-no-repeat bg-cover relative'}
        >
            {children}
            {/*scroll and link to all games*/}
            <div className={'absolute left-46/5 bottom-4 transform -translate-x-1/2 z-50'}>
                <div className={'flex flex-row items-center'}>
                    <Link href="/games">
                        <a className={'p-4'}>
                            <div className={'flex items-center'}>
                                <div className={'m-2'}>
                                    <AllGamesIcon width={'w-4'} height={'h-4'} color={'white'}/>
                                </div>
                                <p className={'font-roboto-regular text-base text-white'}>All Games</p>
                            </div>
                        </a>
                    </Link>
                    <div className={'flex'}>
                        <div className={'m-2'}>
                            <span className={'inline-block p-4 cursor-pointer'}>
                                <ScrollBorderIcon width={'w-5'} height={'h-6'} color={'white'}/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* /scroll and link to all games*/}
        </SectionGameStyles>
    );
}

export default SectionGame;

const SectionGameStyles = styled.section`
  background-image: ${props => `url(${props.backgroundImage})`};
  height: auto;

  & > span {
    position: absolute;
    top: -107px;
  }

  @media (min-width: 768px) {
    min-height: calc(100vh - 107px);
  }
`
