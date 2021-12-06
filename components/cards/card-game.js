import React from 'react';
import styled from "styled-components";
import Link from 'next/link'
import Image from 'next/image'
import CardGameBtnBg from "../buttons/button-background";


function CardGame({game, size}) {

    const {id, title, imageGame, imageTitle} = game
    const link = `/games/${id}`
    const imageSrc = imageGame

    function cardPatch() {
        return (
            <div className='
                    absolute
                    right-0
                    left-0
                    top-0
                    bg-firefly
                    z-10
                    mx-0.5
                    '/>
        )
    }

    return (
        <div>
            <CardGameBgStyled
                size={size}
                className='
                relative
                rounded-lg
                bg-no-repeat
                bg-100%
                bg-bottom
                bg-blend-multiply
                duration-300
                transition-all
                flex
                items-end
                '
                style={{
                    backgroundImage: `url(${imageSrc})`,
                    height: `${size === 'lg' ? '25.75rem' : '12.0625rem'}`
                }}
            >
                <DarkLayout className={'dark-layout  duration-300 transition-all'}/>
                <CardGameBorder
                    size={size}
                >

                    <BlurredPart imageSrc={imageSrc}
                                className={`rounded blurredPart relative ${size === 'lg' ? 'h-32' : 'h-16'} duration-300 transition-all w-full overflow-hidden`}/>
                    <DarkLayout className={'dark-layout  duration-300 transition-all'}/>
                    <div className={'card-game-title-image__wrap absolute duration-300 transition-all transform -translate-x-1/2 bottom-4 left-1/2'}>
                        <img
                            className='card-game-title-image duration-300 transition-all block w-full h-auto'
                            src={imageTitle}
                            alt={title}
                        />
                    </div>
                    <div className='card-game__btn-wrap absolute bottom-4 opacity-0 duration-300 transition-all z-10 transform -translate-x-1/2 left-1/2'>
                        <Link href="/">
                            <a className={`block font-roboto-bold text-white ${size === 'sm' ? 'text-xs p-3' : 'text-20  p-4'} text-center uppercase leading-none`}>read more</a>
                        </Link>
                        <CardGameBtnBg
                            size={size}
                            classes={`${size==='sm' ? 'text-xs pt-4 pb-6 px-6' : 'text-20 pt-6 pb-9 px-12'}`}/>
                    </div>
                </CardGameBorder>
            </CardGameBgStyled>
        </div>
    );
}




const CardGameBgStyled = styled.div`

  & .card-game-title-image__wrap {
    width:  ${props => (props.size === 'sm' ? '9.0625rem' : '20.3125rem')};
    height:  ${props => (props.size === 'sm' ? '2.8125rem' : '6.25rem')};
  }
  
  &:hover .card-game__btn-wrap {
    opacity: 1;
  }
  

  &:hover {
    background-size: 110%;
  }

  &:hover .dark-layout {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:hover .card-game-title-image__wrap {
    bottom: ${props => (props.size === 'sm' ? '7rem' : '13rem')};
    width:  ${props => (props.size === 'sm' ? '13.125rem' : '33.4375rem')};
    height:  ${props => (props.size === 'sm' ? '4.375rem' : '10.625rem')};
  }

  &:hover .blurredPart {
    height:  ${props => (props.size === 'sm' ? '6.5rem' : '9.5rem')};
  }
`;


const DarkLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
`;

const CardGameBorder = styled.div`
  width: 100%;

  &:after {
    overflow: hidden;
    display: block;
    content: ${props => (props.size === 'lg' ? 'url("/images/pages/HomePage/BigBorderThumb.png")' : 'url("/images/pages/HomePage/SmallBorderThumb.png")')};
    position: absolute;
    top: -2px;
    left: -1px;
  }
`;
const BlurredPart = styled.div`

  &:after {
    content: "";
    position: absolute;
    top: -2rem;
    right: -2rem;
    bottom: -2rem;
    left: -2rem;
    background-image: ${props => `url(${props.imageSrc})`};
    -webkit-filter: blur(1.3rem);
    -moz-filter: blur(1.3rem);
    -o-filter: blur(1.3rem);
    -ms-filter: blur(1.3rem);
    background-position: bottom center;
    background-size: cover;
  }
`;

export default CardGame;
