import React from 'react';
import styled from "styled-components";
import Link from 'next/link'
import Image from 'next/image'


function CardGameMain({game}) {

    if (!game) {
        return <p>Loading game... </p>
    }

    const {id, slug, title, image, imageTitle} = game
    const link = `/games/${slug}`
    const imageSrc = image

    return (
        <article>
            <CardGameBgStyled
                className=' relative rounded-lg bg-no-repeat bg-100% bg-bottom bg-blend-multiply duration-300 transition-all flex items-end h-312'
                style={{
                    backgroundImage: `url(${imageSrc})`,
                }}
            >

                <CardGameBorder className={'card-game-border'}>
                    {/*blue patch*/}
                    <div className=' absolute right-0 left-0 top-0 bg-firefly h-9'/>
                    <div className='absolute right-0 left-0 w-full top-0 h-9 z-c1'>
                        <Link href={link}>
                            <a className={`p-3 block font-roboto-bold text-white text-sm  text-center uppercase leading-none`}>read
                                more</a>
                        </Link>
                    </div>
                    <GoldStar className={'gold-star opacity-0 transition-all duration-300 '}/>
                    <div className='card-game__btn-wrap absolute w-full bottom-6 z-10 '>
                        <CardGameBtnBg
                            className={' btn-bg bg-BigGameBtn bg-cover bg-no-repeat bg-top w-max mx-auto my-0'}>
                            <Link href="">
                                <a className={`block font-roboto-bold text-white text-sm px-8 pt-4 pb-5 uppercase leading-none`}>
                                    play now
                                </a>
                            </Link>
                        </CardGameBtnBg>
                    </div>
                </CardGameBorder>
            </CardGameBgStyled>
        </article>
    );
}

const CardGameBtnBg = styled.div`
  background-size: 100%;
  background-position: 0px 2px;
`

const CardGameBgStyled = styled.div`

  & .card-game-title-image__wrap {
    width: 20.3125rem;
    height: 6.25rem;
  }

  &:hover .card-game__btn-wrap {
    opacity: 1;
  }

  &:hover .btn-bg {
    background-position: 0px -50px;
  }


  &:hover {
    background-size: 110%;
  }

  &:hover .card-game-border:after {
    content: url("/images/pages/GamesPage/BorderGold.png");
  }

  &:hover .gold-star {
    opacity: 1;
    top: 0;
    transform: scale(1);
  }
`;

const CardGameBorder = styled.div`
  width: 100%;

  &:after {
    overflow: hidden;
    display: block;
    content: url("/images/pages/GamesPage/BorderGray.png");
    position: absolute;
    top: -2px;
    left: -1px;
  }
`;

const GoldStar = styled.div`
  position: absolute;
  top: 7.125rem;
  transform: scale(0);
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/pages/HomePage/GoldStar.png');
  background-size: contain;
`

export default CardGameMain;
