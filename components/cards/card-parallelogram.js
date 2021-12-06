import React from 'react';
import styled from "styled-components";
import Link from 'next/link'


function CardParallelogram({game, size}) {

    const {id, title, imageGame} = game
    const link = `/games/${id}`
    const imageSrc = imageGame

    return (
        <BgStyledShadow
            className='relative'
        >
            <Outer
                imageSrc={imageSrc}
                className={'relative z-c1'}
            >

                <Inner
                    className='relative right-0 bottom-0 bg-no-repeat bg-cover w-253 h-353 '
                    imageSrc={imageSrc}
                >
                    <div>
                        <div className='
                    absolute
                    right-0
                    left-0
                    bottom-0
                    z-10
                    mx-0.5
                    bg-woodsmoke
                    -left-10
                    text-white
                    cursor-pointer
                    transition ease duration-300
                    hover:bg-blaze-orange
                    '>
                            <p className='font-roboto-regular text-inherit text-20 py-6 text-center'>
                                Lucky Alien
                            </p>
                        </div>
                    </div>
                </Inner>
            </Outer>
        </BgStyledShadow>
    );
}


const BgStyledShadow = styled.div`
  &:after {
    transition: all .2s linear;
    transition-delay: 0.1s;
    content: '';
    clip-path: polygon(15% 0, 100% 0%, 85% 100%, 0% 100%);
    top: 2rem;
    left: 1rem;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 16.5rem;
    height: 22.6rem;
    z-index: 0;
  }

  &:hover:after {
    top: 1.3rem;
    left: 1rem;
  }

  &:hover > div:before,
  &:hover > div:after {
    background-position: -334px 1px;
    right: -0.7rem;
    top: 0.7rem;
  }

  &:hover > div > div {
    background-position: 90% 50%;
    right: -0.7rem;
    bottom: -0.7rem;
  }
`;

const Inner = styled.div`
  clip-path: polygon(15% 0, 100% 0%, 85% 100%, 0% 100%);
  transition: all .2s linear;
  transition-delay: 0.1s;
  background-position: 50% 50%;
  background-image: ${props => `url("${props.imageSrc}")`};
`;

const Outer = styled.div`
  filter: drop-shadow(0px 0px 20px #FF6600);

  &:before {
    transition: all .2s linear;
    transition-delay: 0.1s;
    content: '';
    clip-path: polygon(15% 0, 100% 0%, 85% 100%, 0% 100%);
    position: absolute;
    right: 0;
    top: 0;
    margin: -5px;
    background-image: ${props => `url("${props.imageSrc}")`};
    background-size: cover;
    background-position: -186PX 1px;
    width: 16.5rem;
    height: 22.6rem;
    z-index: -2;
    background-color: black;
    background-repeat: no-repeat;
  }

  &:after {
    transition: all .2s linear;
    transition-delay: 0.1s;
    content: '';
    clip-path: polygon(15% 0, 100% 0%, 85% 100%, 0% 100%);
    right: 0;
    top: 0;
    position: absolute;
    margin: -5px;
    background-color: rgba(255, 102, 0, 0.8);
    width: 16.5rem;
    height: 22.6rem;
    z-index: -1;
  }
`;

export default CardParallelogram;
