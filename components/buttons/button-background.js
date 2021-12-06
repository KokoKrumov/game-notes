import React from 'react';
import Link from "next/link";
import styled from "styled-components";

function CardGameBtnBg({size, classes,textSize}) {
    return (
        <CardGameBtnBackground size={size} className={`-btn-bg bg-BigGameBtn bg-cover bg-no-repeat bg-top ${size === 'sm' ? 'w-125' : 'w-195'} `}>
            <Link href="/">
                <a className={`block font-roboto-bold text-white text-center uppercase leading-none ${classes}`}>
                    play now
                </a>
            </Link>
        </CardGameBtnBackground>
    );
}

export default CardGameBtnBg;


const CardGameBtnBackground = styled.div`
  background-size: 103%;
  background-position: ${props => (props.size === 'sm' ? '0px 2px' : '0px 3px')};

  &:hover {
    background-position: ${props => (props.size === 'sm' ? '0px -3rem' : '0px -4.6875rem')};
  }
`
